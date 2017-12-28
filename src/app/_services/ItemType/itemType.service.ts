import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IItemType } from '../../_models/ItemType/index';

@Injectable()
export class ItemTypeService {
  public itemTypes$ = new BehaviorSubject<IItemType[]>([]);

  private _itemTypesUrl = 'http://0.0.0.0:3000/api/ItemTypes';

  constructor(private _http: HttpClient) {
    this.fetchItemTypes();
  }

  fetchItemTypes(): void {
    this._http
      .get<IItemType[]>(this._itemTypesUrl)
      .subscribe(items => this.itemTypes$.next(items));
  }

  postItemType(newItemType: Object): void {
    this._http.post(this._itemTypesUrl, newItemType).subscribe(
      res => {
        console.log('item type just added: ', res);
        this.fetchItemTypes();
      },
      err => {
        console.log('Error occured', err.error.error.message);
      }
    );
  }
}
