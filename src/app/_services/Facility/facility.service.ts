import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IFacility } from '../../_models/Facility/index';

@Injectable()
export class FacilityService {
  public facilities$ = new BehaviorSubject<IFacility[]>([]);

  private _facilitiesUrl = 'http://0.0.0.0:3000/api/Facilities';

  constructor(private _http : HttpClient) {
    this.fetchFacilities();
  }

  fetchFacilities(): void {
    this._http
      .get<IFacility[]>(this._facilitiesUrl)
      .subscribe(facilities => this.facilities$.next(facilities));
  }
}