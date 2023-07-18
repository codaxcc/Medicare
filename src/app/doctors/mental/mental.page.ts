import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mental',
  templateUrl: './mental.page.html',
  styleUrls: ['./mental.page.scss'],
})
 
 
export class MentalPage {
  doctors = [
    {
      avatar: 'assets/mental/m1.jpg',
      name: 'Dr. Maxwell Martinez',
      specialty: 'Neurulogy',
      schedule: 'Monday-Friday',
      time: '9:00am-5:00pm',
      experience: '10',
      fee: '₱500',
      url: '/mental/m1',
      location: 'Candelaria',
    },
    {
      avatar: 'assets/mental/m2.png',
      name: 'Dr. Janice Sy ',
      specialty: 'Internal Medicine, Adult Neurology',
      schedule: 'Monday-Saturday',
      time: '4:00pm-10:00pm',
      experience: '13',
      fee: '₱ 600.50',
      url: '/mental/m2',
      location: 'Batangas',
    },
    {
      avatar: 'assets/mental/m3.png',
      name: 'Dr. John Tan',
      specialty: 'Adult Neurology',
      schedule: 'Tuesday-Friday',
      time: '8:00am-5:00pm',
      experience: '10',
      fee: '₱ 500',
      url: '/elder/e3',
      location: 'Adramedix Medical Center  Manila',
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
