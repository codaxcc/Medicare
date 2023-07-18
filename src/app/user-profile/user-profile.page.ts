 import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {
  fullname!: string;
  email!: string;
  phone!: number;
  username!: string;

  constructor(private storage: Storage) {
    this.loadUserData();
  }

  async loadUserData() {
    await this.storage.create();

    this.storage.get('username').then((username) => {
      this.username = username || '';
    });

    this.storage.get('fullname').then((fullname) => {
      this.fullname = fullname || '';
    });

    this.storage.get('email').then((email) => {
      this.email = email || '';
    });

    this.storage.get('phone').then((phone) => {
      this.phone = phone || '';
    });
  }

}






