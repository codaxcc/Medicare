import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
})
export class ForgotPasswordModalComponent {
  newPassword!: string;
  confirmPassword!: string;

  constructor(private modalController: ModalController) {}

  resetPassword() {
     
    if (this.newPassword === this.confirmPassword) {
     
      this.modalController.dismiss({
        newPassword: this.newPassword
      });
    } else {
      console.log('Passwords do not match');
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
