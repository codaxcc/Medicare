import { Component } from '@angular/core';

@Component({
  selector: 'app-dental',
  templateUrl: './dental.page.html',
  styleUrls: ['./dental.page.scss'],
})
export class DentalPage {
  doctors = [
    {
      avatar: 'assets/dental/d1.jpg',
      name: 'Dr. Mikee Pascual',
      specialty: 'Zahn Aesthetix Dental Clinic',
      schedule: 'Monday-Friday (By Appoinment)' ,
      location: '85 Osmena Blvd Santa Cruz',
      time: '9:00am-4:00pm',
      experience: '7',
      fee: '₱ 450',
      url: '/dental/d1',
    },
    {
      avatar: 'assets/dental/d2.jpg',
      name: 'Dr. Dianne Rivera',
      specialty: 'Little Blue Dental Clinic',
      location: '2361-E. St Corner, Sta Ana, Manila',
      schedule: 'Monday-Saturday',
      time: '8:00am-3:00pm (By Appoinment)',
      experience: '5',
      fee: '₱ 450',
      url: '/dental/d2',
    },
    {
      avatar: 'assets/dental/d3.jpg',
      name: 'Dr. Rebecca Santecelis',
      specialty: 'Santecelis Dental Clinic',
      schedule: 'Monday-Friday (By Appoinment)',
      location: 'Rizal Blvd, Brgy Labas Sta. Rosa Laguna',
      time: '9:00am-5:00pm',
      experience: '5',
      fee: '₱ 500',
      url: '/dental/d3',
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
