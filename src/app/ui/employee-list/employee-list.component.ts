import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = `Sample text`;
  // data$: Observable<Employee[] | null> = of (null);

  data$: Observable<ProjectModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) {
  }
}

