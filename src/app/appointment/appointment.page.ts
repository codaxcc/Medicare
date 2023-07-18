import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Appointment } from 'src/app/model/shared.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  appointments: Appointment[] = [];

  constructor(
    @Inject(DataService) private dataService: DataService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.appointments = this.dataService.sharedData.appointments;
  }

  deleteContent(appointment: Appointment) {
    const index = this.appointments.indexOf(appointment);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }
  }

  bookAgain(appointment: Appointment) {
    // Handle the navigation here
    const url = appointment.profileInfo.url;
    this.router.navigateByUrl(url);
  }
}
