import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetform!: FormGroup;
  submitted = false;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackbar: MatSnackBar, private route: Router) { }

  ngOnInit() {
    this.resetform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  showHidePassword(e: any) {
    this.showPassword = e.target.checked;
  }

  reset() {
    if (this.resetform.value.confirmpassword === this.resetform.value.password) {
      if (this.resetform.valid) {
        let resetdata = {
          email: this.resetform.value.password,
        };
        console.log("reset function working", resetdata);
        this.route.navigateByUrl('/login');
      }
      else {
        console.log("invalid data");
        this.snackbar.open("Enter valid password", '', {
          duration: 2000
        })
      }
    }
    else {
      console.log("Error:passwords didn't match");
      this.snackbar.open("The passwords didn't match. Try again!", '', {
        duration: 2000
      });
    }
  }

}
