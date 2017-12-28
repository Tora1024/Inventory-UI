import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IItem } from '../../_models/Item/index';
import { LocationService } from '../Location/index';
import { ItemListService } from '../ItemList/index';

@Injectable()
export class ItemService {
  public items$ = new BehaviorSubject<IItem[]>([]);

  private _itemsUrl = 'http://0.0.0.0:3000/api/Items';

  temporalItem: any;

  constructor(
    private _http : HttpClient, 
    private _locationService: LocationService,
    private _ItemListService: ItemListService
  ) {}

  postItem(newItem: Object, newLocation: any): void {
    this._http
      .post(this._itemsUrl, newItem)
        .subscribe(res => {
          console.log('item just added: ', res);
          this.temporalItem = res;
          newLocation.itemId = this.temporalItem.id;
          this._locationService.postLocation(newLocation);
        },
        err => {
          console.log('Error occured', err.error.error.message);
        }
    );
  }
}