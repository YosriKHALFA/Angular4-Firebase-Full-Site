import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Employee } from '../../Employee';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router , ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id:string;
  employee:Employee;
  hasSalary:boolean = false;
  updateSalary:boolean=false;
  showSalaryUpdate:boolean=false;

  constructor(public employeeService:EmployeeService,
    public router:Router,
    public activatedRoute:ActivatedRoute,
    public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(employee =>{
      if(employee.salary>0){
        this.hasSalary=true;
      }
      this.employee = employee;
     // console.log(this.employee);
    });
  }

  updateSalaryEmployee(id:string){
    this.employeeService.updateEmployee(this.id,this.employee);
    this.flashMessagesService.show("Salary Updated successfully ! :) ",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/employee/'+this.id]);
  }



  myDelete(){
    if(confirm("Are you sure ! :(")){
      this.employeeService.deleteEmployee(this.id);
      this.flashMessagesService.show("Employee Deleted successfully !  ",{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/']);
    }
  }

}
