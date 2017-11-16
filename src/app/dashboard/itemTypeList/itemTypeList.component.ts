import { Component, OnInit } from '@angular/core';
import { IItemType } from '../../_models/ItemType/index';
import { ItemTypeService } from '../../_services/ItemType/index';

@Component({
  selector: 'itemTypeList',
  providers: [ItemTypeService],
  templateUrl: './itemType-list.component.html',
  styleUrls: ['./itemType-list.component.css'],
})
export class ItemTypeListComponent implements OnInit {
  itemTypes: IItemType[] = [];
  errorMsg: string;

  constructor(private _itemTypeService: ItemTypeService) {    
    
  }
  
  ngOnInit(): void {
    this._itemTypeService.getItemTypes()
      .subscribe(itemTypes => {
        this.itemTypes = itemTypes;
      },
      error => this.errorMsg = <any>error
    );
  }
}