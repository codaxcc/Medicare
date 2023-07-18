import { Component } from '@angular/core';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.page.html',
  styleUrls: ['./primary.page.scss'],
})
export class PrimaryPage {
  doctors = [
    {
      avatar: 'assets/primary/p1.jpg',
      name: 'Dr. Kim Samuel',
      specialty: 'Lifestyle Medicine',
      schedule: 'Monday-Friday',
      time: '9:00am-4:00pm',
      experience: '7',
      fee: '550',
      url: '/primary/profile',
    },
    {
      avatar: 'assets/primary/p2.jpg',
      name: 'Dr. Clent Domingo ',
      specialty: 'General Medicine',
      schedule: 'Monday-Friday',
      time: '8:00am-5:00pm',
      experience: '4',
      fee: '450',
      url: '/primary/profile2',
    },
    {
      avatar: 'assets/primary/p3.jpg',
      name: 'Dr. Jake Carlos',
      specialty: 'Primary Care',
      schedule: 'Monday-Friday',
      time: '10:00am-5:00pm',
      experience: '3',
      fee: '500',
      url: '/primary/profile3',
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
