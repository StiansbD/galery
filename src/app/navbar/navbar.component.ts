import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  app = new AppComponent();

  private auth: any;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.auth = this.authservice;
  }

  isConnected(): boolean {
    return this.auth.isConnected();
  }
  
  logOut() {
    this.auth.logOut();
  }

}
