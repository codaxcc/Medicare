import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve) => {
      this.storage.get('username').then((storedUsername) => {
        if (storedUsername) {
          
          resolve(true);
        } else {
         
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
