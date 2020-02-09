import { TestBed } from '@angular/core/testing';

import { FormControlQuestionService } from './form--control-question.service';

describe('FormControlQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormControlQuestionService = TestBed.get(FormControlQuestionService);
    expect(service).toBeTruthy();
  });
});
