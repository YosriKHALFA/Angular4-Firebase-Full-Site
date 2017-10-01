import { Injectable } from '@angular/core';
import {Router  ,CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AuthGuard implements CanActivate {

 constructor(
   public router:Router,
   public afAuth:AngularFireAuth
 ) { }



 canActivate(): Observable<boolean>{
   return this.afAuth.authState.map(auth => {

     if(!auth){
       this.router.navigate(['/login']);
       return false;
     }else{
       return true;
     }

   });
 }



}
