import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
})
export class FormArrayComponent {
  @Input() formArray!: FormArray;
  @Input() displayName!: string;
  @Input() childFormGroup!: FormGroup;
  @Output() newItemEvent = new EventEmitter<FormGroup>();

  addNewItem() {
    this.formArray.push(
      new FormGroup({
        email: new FormControl(''),
      })
    );
  }

  removeItem(index: number) {
    this.formArray.removeAt(index);
  }
}
