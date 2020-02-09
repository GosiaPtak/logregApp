import { Injectable } from '@angular/core';
import { FormBase } from '../classes/form-base/form-base';
import { FormInputText } from '../classes/form-base/form-textinput';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlQuestionService {
  getFormField(entryPoint) {
    let questions: FormBase<string>[];

    if (entryPoint === 'register') {
      questions = [
        new FormInputText({
          key: 'registerFirstName',
          label: 'First name',
          required: true,
          order: 1
        }),
        new FormInputText({
          key: 'registerLastName',
          label: 'Last name',
          type: 'text',
          required: true,
          order: 2
        }),
        new FormInputText({
          key: 'registerEmailAddress',
          label: 'Email',
          type: 'email',
          required: true,
          order: 3
        }),
        new FormInputText({
          key: 'registerPassword',
          label: 'Password',
          type: 'password',
          required: true,
          order: 4
        })
      ];
      return of(questions.sort((a, b) => a.order - b.order));
    } else if (entryPoint === 'login') {
      questions = [
        new FormInputText({
          key: 'logInEmailAddress',
          label: 'Email',
          type: 'email',
          required: true,
          order: 3
        }),
        new FormInputText({
          key: 'logInPassword',
          label: 'Password',
          type: 'password',
          required: true,
          order: 4
        })
      ];
      return of(questions.sort((a, b) => a.order - b.order));
    }
  }
}
