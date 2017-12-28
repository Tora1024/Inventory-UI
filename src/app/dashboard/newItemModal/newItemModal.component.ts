import { Component, Input, ViewChild } from '@angular/core';
import { IItemType } from '../../_models/ItemType/index';
import { IFacility } from '../../_models/Facility/index';
import { IEmployee } from '../../_models/Employee/index';
import { ItemTypeService } from '../../_services/ItemType/index';
import { ItemService } from '../../_services/Item/index';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'newItemModal',
  templateUrl: './newItemModal.component.html',
  styleUrls: ['./newItemModal.component.css', '../dashboard.component.css'],
})
export class NewItemModalComponent {
  @ViewChild('itemModal') public modal: ModalDirective;
  dateCreated: Number = Date.now();
  selectedItemType: string = 'Select Item Type';
  selectedFacility: string = 'Select Facility';
  selectedEmployee: string = 'Select Employee';
  model: any = {};
  @Input() itemTypeList: IItemType[];
  @Input() facilityList: IFacility[];
  @Input() employeeList: IEmployee[];

  constructor(private _itemTypeService: ItemTypeService, private _itemService: ItemService) {}

  ChangeItemTypeName(newValue: string, newId: number) {
    this.selectedItemType = newValue;
    this.model.itemTypeId = newId;
  }

  ChangeFacilityName(newValue: string, newId: number) {
    this.selectedFacility = newValue;
    this.model.FacilityId = newId;
  }

  ChangeEmplyeeName(newValue: string) {
    this.selectedEmployee = newValue;
  }

  submitItem(): void {
    let newItem: Object = {
      id: 0,
      serialNumber: this.model.serialNumber, 
      itemTypeId: this.model.itemTypeId, 
      picture_url: '', 
      createDate: this.dateCreated,
      administratorId: 1,
    };
    let newLocation: Object = {
      id: 0,
      itemId: 1, 
      employeeId: Number(this.selectedEmployee),
      facilityId: this.model.FacilityId, 
      beginDate: this.dateCreated,
      administratorId: 1,
    };
    this._itemService.postItem(newItem, newLocation);
    this.modal.hide();
    this.clearForm();
  }

  clearForm(): void {
    this.selectedItemType = 'Select Item Type';
    this.selectedFacility = 'Select Facility';
    this.selectedEmployee = 'Select Employee';
    this.model.serialNumber = '';
  }
}