import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from 'src/app/shared/classes/form-base/form-base';
import { FormControlQuestionService } from 'src/app/shared/services/form--control-question.service';
import { emit } from 'cluster';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  questions$: Observable<FormBase<any>[]>;
  @Output() entryPoint = 'register';

  constructor(service: FormControlQuestionService) {
    this.questions$ = service.getFormField('register');
  }
}
