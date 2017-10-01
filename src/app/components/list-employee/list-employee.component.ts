import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  totalEmployee:number=0;
  totalEmployeeSalary:number=0;
  
  constructor(public empService : EmployeeService) { 
    
}

  

  ngOnInit() {
    this.empService.getEmployees().subscribe(employees=> {
    this.employees=employees;
    this.getTotalEmployees();
    });
  }

  getTotalEmployees(){
 
    for(let index=0;index<this.employees.length;index++){
      this.totalEmployee +=1;
      this.totalEmployeeSalary += parseFloat(this.employees[index].salary.toString());
    }


  }
}
