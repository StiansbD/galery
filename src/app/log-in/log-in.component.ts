import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { InputService } from '../services/input.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  private auth: any;

  email: any;
  password: any;

  emailValue: string;
  passwordValue: string;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.auth = this.authservice;
    
    this.email = new InputService();
    this.password = new InputService();

    this.emailValue = "";
    this.passwordValue = "";

    this.email.initInput();
    this.password.initInput();    
  }

  onChange(): void {
    this.email.setDefault(false);
    this.email.setError("");

    this.password.setDefault(false);
    this.password.setError("");

    if (this.auth.isEmail(this.emailValue))
      this.auth.setEmail(this.emailValue);
    else
      this.email.setError(this.auth.getError());
    
    if (this.auth.checkPasswordLength(this.passwordValue)) 
      this.auth.setPassword(this.passwordValue);
    else
      this.password.setError(this.auth.getError());
  }

  checkValues(): boolean {
    return true;    
  }  

  connect(): void {
    if (this.checkValues()) {
      this.auth.logIn();
    }
  }
}
