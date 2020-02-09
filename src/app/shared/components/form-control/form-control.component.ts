import { Component, OnInit, Input } from '@angular/core';
import { FormBase } from '../../classes/form-base/form-base';
import { FormGroup } from '@angular/forms';
import { FormControlService } from '../../services/form-control.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() questions: FormBase<string>[] = [];
  @Input() entryPoint = 'register';
  form: FormGroup;
  payLoad = '';
  constructor(private fcs: FormControlService, private rs: RegisterService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.rs.registerUser(this.form.getRawValue());
  }
}
