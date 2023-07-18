import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedia',
  templateUrl: './pedia.page.html',
  styleUrls: ['./pedia.page.scss'],
})
export class PediaPage{
 
  doctors = [
    {
      avatar: 'assets/pedia/b1.jpg',
      name: 'Dr. Luzy Micubo',
      specialty: 'General Medicine | Pediatrics',
      schedule: 'Monday-Friday',
      time: '10:00am-3:00pm',
      experience: '5',
      fee: '₱500 (By Appointment)',
      url: '/pedia/p1',
      location: 'Allied Care Experts- Quezon City',
    },
    {
      avatar: 'assets/pedia/b2.jpg',
      name: 'Dr. Aivan Perez ',
      specialty: 'Primary Care Physician | Pediatric',
      schedule: 'Monday-Friday',
      time: '8:00am-5:00pm',
      experience: '4',
      fee: '₱ 500 (By Appointment)',
      url: '/pedia/p2',
      location: 'Batangas Capitol Medical Center',
    },
    {
      avatar: 'assets/pedia/b3.jpg',
      name: 'Dr. Jacqui Marquez-Millano ',
      specialty: 'Pediatrics',
      schedule: 'Wednesday-Friday',
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
