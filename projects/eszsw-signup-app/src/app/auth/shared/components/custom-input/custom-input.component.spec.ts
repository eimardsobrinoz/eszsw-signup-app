import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputComponent } from './custom-input.component';
import { FormsModule, ReactiveFormsModule, FormControlDirective, NgControl } from '@angular/forms';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomInputComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule
      ]
    })
      .overrideComponent(CustomInputComponent, {
        set: {
          providers: [
            {
              provide: NgControl,
              useValue: new FormControlDirective([], [], [], null)
            }
          ]
        }
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
