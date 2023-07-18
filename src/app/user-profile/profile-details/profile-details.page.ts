import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage {
  fullname!: string;
  email!: string;
  phone!: string;
  isEditProfile: boolean = false;

  constructor(private storage: Storage) {
    this.loadUserData();
  }

  
 async loadUserData() {
  await this.storage.create();

  this.storage.get('fullname').then((fullname) => {
    this.fullname = fullname || 'fullname';
  });

  this.storage.get('email').then((email) => {
    this.email = email || 'email';
  });

  this.storage.get('phone').then((phone) => {
    this.phone = phone || 'phone';
  });
}


  submitForm() {
    this.storage.set('fullname', this.fullname);
    this.storage.set('email', this.email);
    this.storage.set('phone', this.phone);
    console.log('Personal info updated');
    this.isEditProfile = false;  
  }

  toggleEditProfile() {
    this.isEditProfile = !this.isEditProfile;
  }
}
