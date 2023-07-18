import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ForgotPasswordModalComponent } from '../forgot-password-modal/forgot-password-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  invalidCredentials: boolean = false;

  constructor(
    private router: Router,
    private storage: Storage,
    private alertController: AlertController,
    private modalController: ModalController
  ) {
    this.initializeStorage();
  }
  
  ngOnInit() {
    this.storage.keys().then((keys) => {
      console.log(keys);
    });
  }

  async initializeStorage() {
    await this.storage.create();
  }

  login() {
    const enteredUsername = this.username;
    const enteredPassword = this.password;

    this.storage.get('username').then((storedUsername) => {
      this.storage.get('password').then((storedPassword) => {
        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
          console.log('Login successful');
          this.router.navigate(['/home']);
        } else {
          this.presentAlert('Incorrect username or password. Please try again');
        }
      });
    });
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  async openForgotPasswordModal() {
    const modal = await this.modalController.create({
      component: ForgotPasswordModalComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result?.data?.newPassword) {
        const newPassword = result.data.newPassword;
        this.storage.set('password', newPassword);
        console.log('Password updated successfully');
      }
    });

    await modal.present();
  }
}
