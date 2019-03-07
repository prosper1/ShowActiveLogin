import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false)

  constructor( private storage:Storage, private plt:Platform) { 

  }

  login(){
    return this.storage.set(TOKEN_KEY, 'Bearer 123456').then(result => {
      this.authenticationState.next(true);
    })
  }

  logout(){
    return this.storage.remove(TOKEN_KEY).then(result => {
      this.authenticationState.next(false);
    })
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get(TOKEN_KEY).then(result => {
      if (result){
        this.authenticationState.next(true)
      }
    })
  }
  
}
