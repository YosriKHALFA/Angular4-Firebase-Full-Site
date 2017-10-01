import { Injectable } from '@angular/core';
import { Settings } from '../Settings';


@Injectable()
export class SettingsService {

  settings:Settings={
    isRegisterOpen:true,
    disableSalary:true,
    isSalaryEditable:true
  }

  constructor() {
    if(localStorage.getItem('settings')!= null){
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(){
    return this.settings;
  }


 changeSettings(settings:Settings){
     localStorage.setItem('settings',JSON.stringify(settings));
  }



}


