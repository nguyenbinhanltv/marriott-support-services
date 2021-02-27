import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private msg: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      displayName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactDetail: ['', [Validators.required]],
      NDISNo: ['', [Validators.required]],
      marriottDivision: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    if (value) {
      this.clientService.addClient(value)
        .pipe(
          map(res => res.message)
        )
        .subscribe(message => {
          this.msg.success(message);
        });
    }
  }

}
