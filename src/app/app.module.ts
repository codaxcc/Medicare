import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,   
            FormsModule,
           ReactiveFormsModule , 
           IonicModule.forRoot(), 
           AppRoutingModule,IonicModule.forRoot(),
             IonicStorageModule.forRoot()],
             providers: [
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              Storage
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
 

 
