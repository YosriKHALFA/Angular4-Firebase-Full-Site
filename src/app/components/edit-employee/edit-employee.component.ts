import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Employee } from '../../Employee';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router , ActivatedRoute , Params } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
@Component({
 selector: 'app-edit-employee',
 templateUrl: './edit-employee.component.html',
 styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

 id:string;
 employee:Employee={

   firstName :"",
   lastName :'',
   email :'',
   country :'',
   city :'',
   phone :0,
   salary :0
 };

 isSalaryEditable;boolean;


 constructor(
   public employeeService:EmployeeService,
   public router:Router,
   public activatedRoute:ActivatedRoute,
   public flashMessagesService:FlashMessagesService,
   public settingService: SettingsService
 ) { }

 ngOnInit() {
   this.id = this.activatedRoute.snapshot.params['id'];
   this.employeeService.getEmployee(this.id).subscribe(employee =>{
     this.employee = employee;
   });

  this.isSalaryEditable = this.settingService.getSettings().isSalaryEditable;
 }


 mySubmit({value,valid}:{value:Employee,valid:boolean}){

   if (!valid) {
     this.flashMessagesService.show('Please write correct info',{cssClass:'alert-danger',timeout:6000});

     this.router.navigate(['edit-employee/'+this.id]);
    // console.log("not correct data");
   }else{
     this.employeeService.updateEmployee(this.id,value);
     this.flashMessagesService.show('Employee updated successfully !',{cssClass:'alert-success',timeout:6000});

     this.router.navigate(['employee/'+this.id]);
    // console.log(this.employee);
   }
     }





}
