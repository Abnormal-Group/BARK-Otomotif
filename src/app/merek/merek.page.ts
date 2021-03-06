import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-merek',
  templateUrl: './merek.page.html',
  styleUrls: ['./merek.page.scss'],
})
export class MerekPage implements OnInit 
{ 
  Products  : Item[];
  List      : boolean = true;

  constructor (private productService: ItemService) { }

  ngOnInit () 
  {
    this.Products = this.productService.getAllProduct();
    console.log(this.Products);
  }

  toggleBtn()
  {
    if(this.List)
    {
      this.List = false;
    }
    else
    {
      this.List = true;
    }
  }
}
