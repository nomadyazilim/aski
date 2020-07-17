import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ServisService} from './servis.service' ;
import {HttpClientModule}from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyD8XJROeUAZlsmdwiDCVToZw070stteoCk', 
       
      })
    ],
  providers: [
    StatusBar,
    SplashScreen,
    ServisService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
