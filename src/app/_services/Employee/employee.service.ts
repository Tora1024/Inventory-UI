import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IEmployee } from '../../_models/Employee/index';

@Injectable()
export class EmployeeService {
  public employees$ = new BehaviorSubject<IEmployee[]>([]);

  private _employeesUrl = 'http://0.0.0.0:3000/api/Employees';

  constructor(private _http : HttpClient) {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this._http
      .get<IEmployee[]>(this._employeesUrl)
      .subscribe(employees => this.employees$.next(employees));
  }
}