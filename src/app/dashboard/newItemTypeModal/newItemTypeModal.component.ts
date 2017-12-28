import { Component, ViewChild } from '@angular/core';
import { IItemType } from '../../_models/ItemType/index';
import { ItemTypeService } from '../../_services/ItemType/index';
import { itemTypes } from '../../_constants/itemTypes/index';

import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'newItemTypeModal',
  templateUrl: './newItemTypeModal.component.html',
  styleUrls: ['./newItemTypeModal.component.css', '../dashboard.component.css'],
})
export class NewItemTypeModalComponent {
  @ViewChild('itemTypeModal') public modal: ModalDirective;

  itemTypes: IItemType[] = [];
  dateCreated: Number = Date.now();
  model: any = {};
  itemTypesConstant: Array<String> = itemTypes;
  selectedItemType: string = 'Select Item Type';

  constructor(private _itemTypeService: ItemTypeService) {
  }

  submitItemType(): void {
    console.log('information to add: ', this.model.itemType, this.model.itemName, this.model.itemDescription );
    let body: Object = {
      id: 0,
      type: this.model.itemType, 
      name: this.model.itemName, 
      description: this.model.itemDescription, 
      picture_url: '', 
      createDate: this.dateCreated,
      administratorId: 1
    };
    this._itemTypeService.postItemType(body);
    this.modal.hide();
    this.cleanForm();
  }

  cleanForm(): void {
    this.selectedItemType = 'Select Item Type';
    this.model.itemName = '';
    this.model.itemDescription = '';
  }

  ChangeCurrentItemType(newCurrentItemType: string) {
    this.selectedItemType = newCurrentItemType;
    this.model.itemType = newCurrentItemType;
  }
}