import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IItemType } from '../../_models/ItemType/index';


@Injectable()
export class ItemTypeService {

  private _itemTypesUrl = 'http://0.0.0.0:3000/api/ItemTypes';

  constructor(private _http : HttpClient) {

  }

  getItemTypes(): Observable<IItemType[]> {
    return this._http.get<IItemType[]>(this._itemTypesUrl)
      .do(data => console.log(`All: ${JSON.stringify(data)}`))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message);
  }
}