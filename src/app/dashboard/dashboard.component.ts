import { Component } from '@angular/core';

import { IFacility } from '../_models/Facility/index';
import { FacilityService } from '../_services/Facility/index';
import { IItemType } from '../_models/ItemType/index';
import { ItemTypeService } from '../_services/ItemType/index';
import { IEmployee } from '../_models/Employee/index';
import { EmployeeService } from '../_services/Employee/index';
import { IItemList } from '../_models/ItemList/index';
import { ItemListService } from '../_services/ItemList/index';

import { sortOrder as sortOrderList } from '../_constants/sortOrder/index';
import { itemTypes as itemTypesList } from '../_constants/itemTypes/index';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  sortOrderConstant: Array<String> = sortOrderList;
  itemTypesConstant: Array<String> = itemTypesList;
  selectedSortOrder: string = 'Newest first';
  selectedLocation: string = 'Location';
  selectedItemType: string = 'Item Type';

  itemTypes: IItemType[] = [];
  facilities: IFacility[] = [];
  employees: IEmployee[] = [];
  itemList: IItemList[] = [];

  // Adding the default option for facilities
  locationList: String[] = ['All locations'];

  constructor(
    private _facilityService: FacilityService,
    private _itemTypeService: ItemTypeService,
    private _employeeService: EmployeeService,
    private _itemListService: ItemListService
  ) {
    this._facilityService.facilities$.subscribe(facilities => {
      this.facilities = facilities;
      this.fillFacilityLocations();
    });
    this._itemTypeService.itemTypes$.subscribe(
      items => (this.itemTypes = items)
    );
    this._employeeService.employees$.subscribe(
      employees => (this.employees = employees)
    );
    this._itemListService.itemList$.subscribe(
      itemList => (this.itemList = itemList)
    );
  }

  fillFacilityLocations(): void {
    this.facilities.forEach(facility => {
      this.locationList.push(facility.name);
    });
  }

  // TODO: Find a way to make this one method only
  ChangeLocation(newValue: string) {
    this.selectedLocation = newValue;
    this._itemListService.filterBy(newValue, this.selectedItemType);
    this._itemListService.sortBy(this.selectedSortOrder);
  }

  ChangeItemType(newValue: string) {
    this.selectedItemType = newValue;
    this._itemListService.filterBy(this.selectedLocation, newValue);
    this._itemListService.sortBy(this.selectedSortOrder);
  }

  ChangeSortOrder(newValue: string) {
    this.selectedSortOrder = newValue;
    this._itemListService.sortBy(newValue);
  }
}
