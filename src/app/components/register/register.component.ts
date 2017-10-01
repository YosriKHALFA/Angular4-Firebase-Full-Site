import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import {AuthenService   } from '../../services/authen.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

    this.authService.register(this.email, this.password).then((res) => {
        this.flashMessagesService.show('Registered successfully ! ',{cssClass:'alert-success',timeout:6000});
        this.router.navigate(['/']);
      }).catch( (err)=>{
        this.flashMessagesService.show( err.message,{cssClass:'alert-danger',timeout:6000});
        this.router.navigate(['/register']);
      });

      }

}
