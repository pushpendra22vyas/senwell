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
  isEditing:boolean = false;

  private resetData() {
    this.user.name = '';
    this.user.email = '';
    this.user.contact = '';
  }

  addUser() {
    this.users.push({ ...this.user });
    this.resetData();
  }

  editUser(user:any) {
    this.isEditing = true;
    this.user.name = user.name;
    this.user.email = user.email;
    this.user.contact = user.contact;
  }

  updateUser() {
    const index = this.users.indexOf(this.user);
    if (index !== -1) {
      this.users[index] = { ...this.user };
    }
    this.isEditing = false;
    this.resetData();
  }

  deleteUser(user:any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

}
