import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './e2.component.html',
  styleUrls: ['./e2.component.scss'],
})
export class E2Component {
  profileInfo: any;

  constructor(private profileService: ProfileService) {
    this.profileInfo = this.profileService.getProfileInfo();
  }
}
