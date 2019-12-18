import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thisrdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: this._formBuilder.control("Введите имя", [Validators.required]),
    });
    this.secondFormGroup = this._formBuilder.group({
      email: this._formBuilder.control("Введите email", [Validators.required]),
    });
    this.thisrdFormGroup = this._formBuilder.group({
      birth: this._formBuilder.control("Введите дату дождения", [Validators.required])
    });
  }

  register = (): void =>{
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
    console.log(this.firstFormGroup.controls['name'].value);
    console.log(this.secondFormGroup.controls['email'].value);
    console.log(this.thisrdFormGroup.controls['birth'].value);
    }
  }

}
