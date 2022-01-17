import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDepartmentComponent } from './select-department/select-department.component';



@NgModule({
  declarations: [
    SelectDepartmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SelectDepartmentComponent]

})
export class DepartmentModule { }
