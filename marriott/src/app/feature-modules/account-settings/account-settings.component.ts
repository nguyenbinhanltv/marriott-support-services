import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Admin } from 'src/app/core/models/admin.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  validateForm!: FormGroup;
  adminData!: Admin;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
    ) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.adminData = this.authService.getAdmin;
    console.log(this.adminData);
  }

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

}
