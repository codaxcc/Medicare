import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/model/shared.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedData: {
    name: string;
    age: string;
    address: string;
    phone: string;
    datetime: Date;
    profileInfo: any;
    appointments: Appointment[];
  } = {
    name: '',
    age: '',
    address: '',
    phone: '',
    datetime: new Date(),
    profileInfo: {},
    appointments: []
  };

  constructor() { }

  setProfileInfo(info: any) {
    this.sharedData.profileInfo = info;
  }

  getProfileInfo() {
    return this.sharedData.profileInfo;
  }

  addAppointment(appointment: Appointment) {
    this.sharedData.appointments.push(appointment);
  }

  getAppointments() {
    return this.sharedData.appointments;
  }
}
