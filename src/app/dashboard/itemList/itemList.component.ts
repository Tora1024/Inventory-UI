import { Component, Input } from '@angular/core';
import { IItem } from '../../_models/Item/index';
import { IItemType } from '../../_models/ItemType/index';
import 'rxjs/add/operator/do';

@Component({
  selector: 'itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
})
export class ItemListComponent   {
  @Input() itemTypeList: IItemType[];
  //@Input() itemList: IItem[];
  errorMsg: string;
  isCollapsed: boolean = true;

  constructor() {}
  collapsed(event: any): void {}
  expanded(event: any): void {}
}