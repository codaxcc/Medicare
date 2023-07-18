import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedData: ShareData[] = [];

  constructor() { }

  addAppointment(appointment: ShareData) {
    this.sharedData.push(appointment);
  }

  removeAppointment(index: number) {
    this.sharedData.splice(index, 1);
  }

  clearAppointments() {
    this.sharedData = [];
  }
}
