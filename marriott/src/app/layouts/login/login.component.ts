import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { EnquiryService } from '../../core/services/enquiry.service';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  themeMode: boolean = true;
  validateLoginForm!: FormGroup;
  validateEnquiryForm!: FormGroup;

  loading = false;

  task!: AngularFireUploadTask;
  percentage!: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private enquiryService: EnquiryService,
    private msg: NzMessageService,
    private router: Router,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.validateLoginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [true],
    });

    this.validateEnquiryForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      phoneNumberPrefix: ['+61'],
      phoneNumber: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      filePath: ['', [Validators.required]],
      submitTime: ['', [Validators.required]],
      agree: [false],
      expand: [false],
    });
  }

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credetial = await this.afAuth.signInWithPopup(provider);
    const user = {
      _id: credetial.user?.uid,
      avatarPath: credetial.user?.photoURL,
      displayName: credetial.user?.displayName,
      email: credetial.user?.email,
      phone: credetial.user?.phoneNumber,
      userName: '',
    };
    localStorage.setItem('token', JSON.stringify(null));
    localStorage.setItem('admin', JSON.stringify(user));
    return this.authService.addAdmin(user).subscribe({
      next: (val) => {
        this.msg.success('Login successfully');
        this.router.navigateByUrl('admin');
      },
      error: (e) => this.msg.error('Login fail'),
    });
  }

  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }

    if (this.validateLoginForm.value) {
      this.authService.login(this.validateLoginForm.value).subscribe({
        next: (val) => {
          this.msg.success('Login successfully');
          this.router.navigateByUrl('admin');
        },
        error: (e) => this.msg.error('Login fail'),
      });
    }
  }

  submitEnquiryForm(): void {
    for (const i in this.validateEnquiryForm.controls) {
      this.validateEnquiryForm.controls[i].markAsDirty();
      this.validateEnquiryForm.controls[i].updateValueAndValidity();
    }

    if (
      this.validateEnquiryForm.value &&
      this.validateEnquiryForm.controls['filePath']
    ) {
      this.validateEnquiryForm.controls['submitTime'].setValue(
        new Date(Date.now()).toLocaleString()
      );
      this.enquiryService.addEnquity(this.validateEnquiryForm.value).subscribe({
        next: (val) => {
          this.msg.success('Thanks for your enquiry ^^');
          this.themeMode = true;
        },
        error: (e) => this.msg.error('Something wrong'),
      });
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateEnquiryForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  handleChange(event: any): void {
    const file = event.target.files[0];

    // The storage path
    const filePath = `enquiries/${Date.now()}_${file.name}`;

    // Reference to storage bucket
    const fileRef = this.storage.ref(filePath);

    if (file) {
      // The main task
      this.task = this.storage.upload(filePath, file);

      // Progress monitoring
      this.percentage = this.task.percentageChanges() as Observable<number>;

      this.task
        .snapshotChanges()
        .pipe(
          tap(console.log),
          // The file's download URL
          finalize(async () => {
            fileRef
              .getDownloadURL()
              .toPromise()
              .then((url) => {
                this.validateEnquiryForm.controls['filePath'].setValue(url);
              });
          })
        )
        .subscribe();
    } else {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  getInt(value: any) {
    return Number.parseInt(value, 10);
  }
}
