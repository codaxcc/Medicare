import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private storage: Storage) {
    this.initializeStorage();
  }

  ngOnInit() {
     
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 
   
  signup() {
    if (this.signupForm.valid) {
      const { fullname, email, phone, username, password } = this.signupForm.value;
      this.storage.set('username', username);
      this.storage.set('password', password);
      this.storage.set('fullname', fullname);
      this.storage.set('email', email);
      this.storage.set('phone', phone);
    } else {
      console.log('Invalid form');
    }
  }

  submit() {
    this.signup();
  }

  async initializeStorage() {
    await this.storage.create();
  }
}
