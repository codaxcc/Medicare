import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.scss'],
})
export class Profile2Component {
  profileInfo: any;

  constructor(private profileService: ProfileService) {
    this.profileInfo = this.profileService.getProfileInfo();
  }
}
