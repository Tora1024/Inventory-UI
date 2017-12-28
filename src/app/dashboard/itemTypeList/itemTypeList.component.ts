import { Component, Input } from '@angular/core';
import { IItemList } from '../../_models/ItemList/index';
import 'rxjs/add/operator/do';

@Component({
  selector: 'itemTypeList',
  templateUrl: './itemType-list.component.html',
  styleUrls: ['./itemType-list.component.css'],
})
export class ItemTypeListComponent   {
  @Input() mergedItemList: IItemList[];
  
  errorMsg: string;
  isCollapsed: boolean = true;

  collapsed(event: any): void {}
  expanded(event: any): void {}
}