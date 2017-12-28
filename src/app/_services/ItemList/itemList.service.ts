import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IItemList } from '../../_models/ItemList/index';

@Injectable()
export class ItemListService {
  public itemList$ = new BehaviorSubject<IItemList[]>([]);
  private cachedList: any[];

  private _itemListUrl = 'http://0.0.0.0:3000/api/viewItemLists';

  constructor(private _http : HttpClient) {
    this.fetchItemList();
  }

  fetchItemList(): void {
    this._http
      .get<IItemList[]>(this._itemListUrl)
      .subscribe(itemList => {
        this.itemList$.next(itemList);
        this.cachedList = Object.assign([], itemList);
        console.log('cached list default:', this.cachedList);
      });
  }

  filterBy(locationFilter: string, itemTypeFilter: string): void {    
    //Default values for each dropdownlist
    //TODO: make a constant out of this and use it in both places instead
    const defaultItemType: string = 'Item Type';
    const defaultLocation: string = 'Location';
    const allItemType: string = 'All types';
    const allLocation: string = 'All locations';
    //Default column names for each dropdownlist
    //TODO: make a constant out of this and use it in both places instead
    const columnItemType: string = 'type';
    const columLocation: string = 'facilityName';

    let newList;

    newList = this.cachedList.filter((item: any) => {
      if ((locationFilter === defaultLocation || locationFilter === allLocation) 
        && (itemTypeFilter === defaultItemType || itemTypeFilter === allItemType)) {
        this.fetchItemList()
      } else if ( locationFilter === defaultLocation || locationFilter === allLocation ) {
        return item[columnItemType] === itemTypeFilter
      } else if ( itemTypeFilter === defaultItemType || itemTypeFilter === allItemType ) {
        return item[columLocation] === locationFilter
      } else {
        return item[columnItemType] === itemTypeFilter && item[columLocation] === locationFilter
      }
    });
    this.itemList$.next(newList);
    this.cachedList = Object.assign([], newList);
  }

  sortBy(sortValue: string): void {
    sortValue === 'Newest first' ? this.sortDate(-1) :
    sortValue === 'Oldest first' ? this.sortDate(1) :
    sortValue === 'Name: A - Z' ? this.sortAlphabetically(1) :
    sortValue === 'Name: Z - A' ? this.sortAlphabetically(-1) : '';
  }

  sortAlphabetically(sortOrder: number): void {
    this.cachedList.sort((a,b) => {
      if (a.name < b.name)
        return sortOrder * -1;
      if (a.name > b.name)
        return sortOrder * 1;
      return 0;
    });
    this.itemList$.next(this.cachedList)
  }

  sortDate(sortOrder: number): void {
    this.cachedList.sort((a,b) => {
      if (a.createDate < b.createDate)
        return sortOrder * -1;
      if (a.createDate > b.createDate)
        return sortOrder * 1;
      return 0;
    });
    this.itemList$.next(this.cachedList)
  }
}