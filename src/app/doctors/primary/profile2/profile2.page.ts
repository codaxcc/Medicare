import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Appointment } from 'src/app/model/shared.model';
import { DataService } from 'src/app/services/data.service';
 
@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.page.html',
  styleUrls: ['./profile2.page.scss'],
})
export class Profile2Page implements OnInit {
  profileInfo: any;

  constructor(
    private toastCtrl: ToastController,
    public dataService: DataService,) {}

  ngOnInit() {
    const profileInfo = {
      image: 'assets/primary/p2.jpg',
      description: 'General Medicine',
      name: 'Dr. Clent Domingo',
      fee: '₱450',
      url: 'profile2'
    };
    this.profileInfo = profileInfo; 
    this.dataService.setProfileInfo(profileInfo);
  }

  saveInput(name: string, age: string, address: string, phone: string, datetime: Date) {
    const profileInfo = this.profileInfo; // Get the profileInfo from the class property
  
    const appointment: Appointment = {
      name: name,
      age: age,
      address: address,
      phone: phone,
      datetime: datetime,
      profileInfo: profileInfo
    };
  
    this.dataService.sharedData.appointments.push(appointment);
    this.presentToast();
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== 0 && utcDay !== 6;
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Appointment added',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }
}
