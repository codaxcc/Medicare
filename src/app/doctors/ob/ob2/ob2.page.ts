import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SharedData, Appointment } from 'src/app/model/shared.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ob1',
  templateUrl: './ob2.page.html',
  styleUrls: ['./ob2.page.scss'],
})
export class Ob2Page implements OnInit {
  profileInfo: any;
  datetime!: Date;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    public dataService: DataService
  ) {}

  ngOnInit() {
    const profileInfo = {
      image:  'assets/ob/o3.png',
      description: 'OB-GYN',
      name:  'Dr. Maine Castro ',
      fee: '₱500',
      location: 'Lipa Medix Medical Art Center',
      url: 'ob/o2'

    };
    this.profileInfo = profileInfo;  
    this.dataService.setProfileInfo(profileInfo);
    this.dataService.sharedData.datetime = this.datetime;

    
  }
  

  saveInput(name: string, age: string, address: string, phone: string, datetime: Date, profileInfo: any) {
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
  

  
  dismissModal() {
    this.modalController.dismiss();
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