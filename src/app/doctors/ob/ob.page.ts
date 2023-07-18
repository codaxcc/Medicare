import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ob',
  templateUrl: './ob.page.html',
  styleUrls: ['./ob.page.scss'],
})
export class ObPage {
  doctors = [
    {
      avatar: 'assets/ob/o1.png',
      name: 'Dr. Emma Panaligan',
      specialty: 'Obsterics and Gynecology',
      schedule: 'Monday-Friday',
      time: '9:00am-5:00pm',
      experience: '20',
      fee: '₱500 (By Appointment)',
      url: '/ob/ob1',
      location: 'Panaligan OB-Gyne Ultrasound Clinic, Batangas City',
    },
    {
      avatar: 'assets/ob/o3.png',
      name: 'Dr. Maine Castro ',
      specialty: 'OB-GYN',
      schedule: 'Monday-Friday',
      time: '8:00am-5:00pm',
      experience: '3',
      fee: '₱ 500 (By Appointment)',
      url: '/ob/ob2',
      location: 'Lipa Medix Medical Art Center',
    },
    {
      avatar: 'assets/ob/o2.png',
      name: 'Dr. Dexter Mallari ',
      specialty: 'OB-GYN',
      schedule: 'Tuesday-Friday',
      time: '8:00am-5:00pm',
      experience: '10',
      fee: '₱ 500 (By Appointment)' ,
      url: '/ob/ob3',
      location: 'MedicaL Center Batangas',
    },
  ];

  filteredItems: any[];

  constructor() {
    this.filteredItems = this.doctors;
  }

  filterItems(event: any) {
    const query = event.detail.value.toLowerCase();
    this.filteredItems = this.doctors.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.specialty.toLowerCase().includes(query)
  
    );
  }
}
