import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './e1.component.html',
  styleUrls: ['./e1.component.scss'],
})
export class E1Component {
  profileInfo: any;

  constructor(private profileService: ProfileService) {
    this.profileInfo = this.profileService.getProfileInfo();
  }
}
