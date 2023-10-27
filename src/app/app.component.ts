import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'senWell';

  user : { name: string, email: string, contact:string } = { name: '', email: '', contact: ''};
  users: { name: string, email: string, contact:string }[] = [];

  private resetData() {
    this.user.name = '';
    this.user.email = '';
    this.user.contact = '';
  }

  addUser() {
    this.users.push({ ...this.user });
    this.resetData();
  }

}
