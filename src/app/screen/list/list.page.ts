import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router' 
 
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
   
})
export class ListPage implements OnInit {
  constructor(private router:Router,) { }
  ngOnInit() {
  }


  logMeIn(){
    this.router.navigate(['/home'])
  }
  
 
  swiperSlideChanged(e:any){
    console.log('event', event);
  }

 expandCategory: boolean = false;  

  categories: any[] = [
    {
      label: 'Primary Care',
      link: 'primary',
      imageSrc: 'assets/primary/primary.png'
    },
    {
      label: 'Pediatrics',
      link: 'pedia',
      imageSrc: 'assets/pedia/baby.png'
    },
    {
      label: 'Dental',
      link: 'dental',
      imageSrc: 'assets/dental/dental.png'
    },
    {
      label: 'Mental Health',
      link: 'mental',
      imageSrc: 'assets/mental/brain.png'
    },
    {
      label: 'Cardiology',
      link: 'cardio',
      imageSrc: 'assets/cardio/cardiology.png'
    },
    {
      label: 'Obgyn',
      link: 'ob',
      imageSrc: 'assets/ob/ob.png'
    },
    {
      label: 'Geriatricians',
      link: 'elder',
      imageSrc: 'assets/elder/elder.png'
    },
    {
      label: 'Dermatology',
      imageSrc: 'assets/derma.png'
    }
  ];

  
}
 