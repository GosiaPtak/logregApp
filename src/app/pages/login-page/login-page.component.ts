import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControlQuestionService } from './../../shared/services/form--control-question.service';
import { FormBase } from './../../shared/classes/form-base/form-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  questions$: Observable<FormBase<any>[]>;
  @Output() entryPoint = 'login';

  constructor(service: FormControlQuestionService) {
    this.questions$ = service.getFormField('login');
  }
}
