import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private auth: any;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.auth = this.authservice;
  }

  isConnected(): boolean {
    return this.auth.isConnected();
  }

  getPseudo(): string {
    return this.auth.getPseudo();
  }

}
