import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { EnquiryService } from '../../core/services/enquiry.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  themeMode: boolean = true;
  validateLoginForm!: FormGroup;
  validateEnquiryForm!: FormGroup;

  loading = false;

  task!: AngularFireUploadTask;
  snapshot!: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private enquiryService: EnquiryService,
    private msg: NzMessageService,
    private router: Router,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.validateLoginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });

    this.validateEnquiryForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      phoneNumberPrefix: ['+84'],
      phoneNumber: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      filePath: ['', [Validators.required]],
      agree: [false]
    });
  }

  submitLoginForm(): void {
    for (const i in this.validateLoginForm.controls) {
      this.validateLoginForm.controls[i].markAsDirty();
      this.validateLoginForm.controls[i].updateValueAndValidity();
    }

    if (this.validateLoginForm.value) {
      console.log(this.validateLoginForm.value);
      this.authService.login(this.validateLoginForm.value).subscribe({
        next: val => this.router.navigateByUrl('admin'),
        error: e => console.log(e)
      });
    }
  }

  submitEnquiryForm(): void {
    for (const i in this.validateEnquiryForm.controls) {
      this.validateEnquiryForm.controls[i].markAsDirty();
      this.validateEnquiryForm.controls[i].updateValueAndValidity();
    }

    if (this.validateEnquiryForm.value) {
      console.log(this.validateEnquiryForm.value);
      this.enquiryService.addEnquity(this.validateEnquiryForm.value).subscribe({
        next: val => console.log(val),
        error: e => console.log(e)
      });
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateEnquiryForm.controls.checkPassword.updateValueAndValidity());
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  handleChange(info: { file: NzUploadFile }): void {


    // The storage path
    const filePath = `enquiries/${Date.now()}_${info.file.name}`;

    // Reference to storage bucket
    const fileRef = this.storage.ref(filePath);

    // The main task
    this.task = this.storage.upload(filePath, info.file);

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        const filePath = await fileRef.getDownloadURL().toPromise();
        this.validateEnquiryForm.controls['filePath'].setValue(filePath);
        console.log(this.validateEnquiryForm.value);
      }),
    );
  }
}
