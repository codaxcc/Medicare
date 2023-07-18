import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileInfo: any;

  constructor(private profileService: ProfileService) {
    this.profileInfo = this.profileService.getProfileInfo();
  }
}
