import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupform!: FormGroup;
  submitted = false;
  showPassword: boolean=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.signupform = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  showHidePassword(e: any) {
    this.showPassword = e.target.checked;
  }
  
  signup() {
    if (this.signupform.value.confirmpassword === this.signupform.value.password) {
      if (this.signupform.valid) {

        let reqSignup = {
          firstName: this.signupform.value.firstname,
          lastName: this.signupform.value.lastname,
          email: this.signupform.value.email,
          password: this.signupform.value.password,
        }
        console.log(reqSignup);
      }
    }
  }
}
