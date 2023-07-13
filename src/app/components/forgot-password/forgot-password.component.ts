import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  Recoveryform!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService: UserService, private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.Recoveryform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

  }
  Recovery() {
    if(this.Recoveryform.valid){
      let recoverdata={
        email: this.Recoveryform.value.email,
      };
      console.log("Valid data",recoverdata)
      this.route.navigateByUrl('/reset-password');
    }
    else{
      this.snackBar.open('InValid Email', '', { duration: 2000 });
      console.log("invalid data");
    }
  }

}
