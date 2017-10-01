import { Injectable } from '@angular/core';
import {Router  ,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate {

 constructor(
   public router:Router,
   public afAuth:AngularFireAuth,
   public settingsService: SettingsService
 ) { }



 canActivate():  boolean {

  if (this.settingsService.getSettings().isRegisterOpen) {
    return true;
  }else{
    this.router.navigate(['/login']);
    return false;
  }


 }



}
