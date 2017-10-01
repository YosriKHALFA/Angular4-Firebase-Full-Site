import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router   } from '@angular/router';
import { AuthenService   } from '../../services/authen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;


  constructor(
     public router:Router,
    public authService:AuthenService,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  mySubmit(){

this.authService.login(this.email, this.password).then((res) => {
    this.flashMessagesService.show('you are logged in ! ',{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/']);
  }).catch( (err)=>{
    this.flashMessagesService.show( err.message,{cssClass:'alert-danger',timeout:6000});
    this.router.navigate(['/login']);
  });

  }

}
