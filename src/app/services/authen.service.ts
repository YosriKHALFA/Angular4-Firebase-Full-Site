import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenService {

  constructor(public afAuth: AngularFireAuth) { }
  
  
  login(email: string , password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => resolve(user),
          err => reject(err));
    });
  }
  
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
  
  logout(){
    this.afAuth.auth.signOut();
  }
  
  
  register(email: string , password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => resolve(user),
          err => reject(err));
    });
  }

}
