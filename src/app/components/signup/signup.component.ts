import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    'class': 'app-signup-ctn'
  }

})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup; // Declare loginForm variable

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit() {
    // Initialize loginForm with formBuilder
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get loginControls() { return this.signUpForm.controls; }

  handleSignUp() {
    if (this.signUpForm.invalid) {
      return;
    }
  
    const { firstName, lastName, userName, password } = this.signUpForm.value;
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      email: userName,
      password: password
    };
  
    this.userService.signUpApiCall(requestBody).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

}
