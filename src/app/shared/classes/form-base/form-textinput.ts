import { FormBase } from './form-base';

export class FormInputText extends FormBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options.type || '';
  }
}
