import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ILocation } from '../../_models/Location/index';
import { ItemListService } from '../ItemList/index';

@Injectable()
export class LocationService {
  public locations$ = new BehaviorSubject<ILocation[]>([]);

  private _locationsUrl = 'http://0.0.0.0:3000/api/Locations';

  constructor(private _http : HttpClient, private _ItemListService: ItemListService) {
    this.fetchLocations();
  }

  fetchLocations(): void {
    this._http
      .get<ILocation[]>(this._locationsUrl)
      .subscribe(locations => this.locations$.next(locations));
  }

  postLocation(newLocation: Object): void {
    this._http
      .post(this._locationsUrl, newLocation)
        .subscribe(res => {
          console.log('location just added: ', res);
          this.fetchLocations();
          this._ItemListService.fetchItemList();
        },
        err => {
          console.log('Error occured', err.error.error.message);
        }
    );
  }
}