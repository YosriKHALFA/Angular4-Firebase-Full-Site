import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

employee:Employee={
  firstName :"",
  lastName:"",
  email:"",
  country:"",
  city:"",
  phone:0,
  salary:0
} 

disableSalary:boolean=true;
  constructor(public falshMess: FlashMessagesService,public router:Router,public empService:EmployeeService) { }

  ngOnInit() {
  }

  mySubmit({value,valid}:{value:Employee,valid:boolean}){
    if(this.disableSalary){
      value.salary=0;
    } 
    if(!valid){
      this.falshMess.show('Please write correct info',{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['add-Employee']);
    }else{

      this.empService.addEmployee(value);
      this.falshMess.show('New Employee add successfully !',{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['']);
    }

  }

}
