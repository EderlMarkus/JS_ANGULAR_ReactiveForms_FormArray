import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  readonly #fb: FormBuilder = inject(FormBuilder);

  protected myForm: FormGroup = this.#fb.group({
    firstName: ['Markus'],
    lastName: ['Ederl'],
    emails: this.#fb.array([]),
  });

  get emails(): FormArray {
    return this.myForm.controls['emails'] as FormArray;
  }
}
