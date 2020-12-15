import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit 
{
  loadedProduct: Item;
  loadedImage: String;

  constructor(private activatedRoute: ActivatedRoute, private adminService: ItemService) { }

  ngOnInit() 
  {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) { return; }
      const productId = paramMap.get('productId');
      this.loadedProduct = this.adminService.getProduct(productId);
      this.loadedImage = this.loadedProduct.MerkImage;
      console.log(this.loadedProduct);
    });
  }

}
