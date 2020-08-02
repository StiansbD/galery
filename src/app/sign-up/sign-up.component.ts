import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private auth: any;

  pseudo: any;
  email: any;
  password: any;
  passwordConfirmation: any;
  termsConditions: any;

  pseudoValue: string;
  emailValue: string;
  passwordValue: string;
  passwordConfirmationValue: string;
  termsConditionsValue: boolean;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.auth = this.authservice;

    this.pseudo = new InputService();
    this.email = new InputService();
    this.password = new InputService();
    this.passwordConfirmation = new InputService();
    this.termsConditions = new InputService();

    this.pseudoValue = "";
    this.emailValue = "";
    this.passwordValue = "";
    this.passwordConfirmationValue = "";
    this.termsConditionsValue = false;

    this.pseudo.initInput();
    this.email.initInput();
    this.password.initInput();
    this.passwordConfirmation.initInput();
    this.termsConditions.initInput();
  }

  initDefaultAndError(): void {
    this.pseudo.setDefault(false);
    this.pseudo.setError("");
    
    this.email.setDefault(false);
    this.email.setError("");

    this.password.setDefault(false);
    this.password.setError("");

    this.passwordConfirmation.setDefault(false);
    this.passwordConfirmation.setError("");

    this.termsConditions.setDefault(false);
    this.termsConditions.setError("");
  }

  onChange(): void {
    this.initDefaultAndError();

    /* check if a pseudo is enter */
    if (this.auth.isEmpty(this.pseudoValue))
      this.pseudo.setError("Must to enter a pseudo");
    else
      this.auth.setPseudo(this.pseudoValue);

    /* check email */
    if (this.auth.isEmail(this.emailValue))
      this.auth.setEmail(this.emailValue);
    else
      this.email.setError(this.auth.getError());
    
    /* check password */
    if (!this.auth.checkPasswordLength(this.passwordValue))
      this.password.setError(this.auth.getError());

    /* check password confirmation */
    if (!this.auth.checkPasswordLength(this.passwordConfirmationValue))
      this.passwordConfirmation.setError(this.auth.getError());

    /* check if passwords match */
    if (this.auth.isPasswordMatch(this.passwordValue, this.passwordConfirmationValue))
      this.auth.setPassword(this.passwordValue);
    else
      this.passwordConfirmation.setError("Password must match");
    
    /* check if terms and conditions is checked */
    if (this.termsConditionsValue == false) 
      this.termsConditions.setError(
        "Must have read and accept the terms and conditions"
      );

  }

  hasAnError(): boolean {
    return (
      this.pseudo.hasAnError() ||
      this.email.hasAnError() || 
      this.password.hasAnError() ||
      this.passwordConfirmation.hasAnError() ||
      this.termsConditions.hasAnError()
    )
  }

  signUp(): void {
    this.auth.logIn();
  }
}
