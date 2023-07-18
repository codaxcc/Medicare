import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elder',
  templateUrl: './elder.page.html',
  styleUrls: ['./elder.page.scss'],
})
 
export class ElderPage {
  doctors = [
    {
      avatar: 'assets/elder/e1.jpg',
      name: 'Dr. Krisha Borromeo',
      specialty: 'Geriatric Medicine',
      schedule: 'Monday-Friday',
      time: '8:00am-5:00pm',
      experience: '3',
      fee: '₱500-700',
      url: '/elder/e1',
      location: 'Manila',
    },
    {
      avatar: 'assets/elder/e2.jpg',
      name: 'Dr. Ricky Gutierez ',
      specialty: 'Internal Medicine, Specialist, Hospitan Administration',
      schedule: 'Monday-Saturday',
      time: '8:00am-5:00pm',
      experience: '15',
      fee: '₱ 410.50',
      url: '/elder/e2',
      location: 'Batangas',
    },
    {
      avatar: 'assets/elder/e3.png',
      name: 'Dr. Sharon Buenaseda',
      specialty: 'Geriatric Medicine',
      schedule: 'Monday-Wednesday',
      time: '8:00am-5:00pm',
      experience: '3',
      fee: '500',
      url: '/elder/e3',
      location: 'Laguna',
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
