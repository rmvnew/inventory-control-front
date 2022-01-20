import { DepartmentResponse } from './../model/department.model';
import { DepartmentService } from './../department.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-department',
  templateUrl: './select-department.component.html',
  styleUrls: ['./select-department.component.css']
})
export class SelectDepartmentComponent implements OnInit {

  @Output() onChangeDepartmentValues = new EventEmitter<any>()

  departmentResponse: DepartmentResponse[] = []

  constructor(private service: DepartmentService) { }

  ngOnInit(): void {

    this.service.getAllDepartment()
      .subscribe(res => {
        for (let index = 0; index < res.length; index++) {
          this.departmentResponse.push(res[index])
        }
      })

  }

  onChanged(value:any){
    const valueEmiter = {value: value.value}
    this.onChangeDepartmentValues.emit(valueEmiter)
  }

}
