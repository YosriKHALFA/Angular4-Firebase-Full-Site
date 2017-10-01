import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import { AuthenService   } from '../../services/authen.service';
import 'rxjs/add/operator/map';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogIn:boolean;
  isUserLogin:string;
  enableRegister:boolean;


  constructor(
    public router:Router,
    public authService:AuthenService,
    public flashMessagesService:FlashMessagesService,
    public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogIn=true;
        this.isUserLogin=auth.email;
      }else{
        this.isLogIn=false;
      }
    });
this.enableRegister = this.settingsService.getSettings().isRegisterOpen;

  }


  logoutClick(){
    this.authService.logout();
    this.flashMessagesService.show( "Your are logged out !",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/login']);
  }



}
