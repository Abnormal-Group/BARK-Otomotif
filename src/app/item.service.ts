import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
// import { CarData } from './Item.model';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService 
{
  // private Path = '/Merek';
  // Ref: AngularFireList<CarData> = null;

  // constructor (private db: AngularFireDatabase)
  // { 
  //   this.Ref = db.list(this.Path);
  // }

  private MOBIL: Item[] = [
    {
      ID: '001',
      Merk: 'Toyota',
      MerkImage: 'https://www.toyota.astra.co.id/sites/default/files/2019-11/fit-tc-logo.jpeg',
      Model: ['Avanza', 'Innova', 'Fortuner'],
    },
    {
      ID: '002',
      Merk: 'Mitsubishi',
      MerkImage: 'https://logos-download.com/wp-content/uploads/2016/02/Mitsubishi_logo_standart.png',
      Model: ['Xpander', 'Pajero'],
    },
    {
      ID: '003',
      Merk: 'Honda',
      MerkImage: 'https://upload.wikimedia.org/wikipedia/id/thumb/d/d5/Honda-logo.png/1200px-Honda-logo.png',
      Model: ['Brio', 'Civic'],
    },
  ];

  constructor() { }

  // getAll(): AngularFireList<CarData>
  // {
  //   return this.Ref;
  // }

  getAllProduct()
  {
    return [...this.MOBIL];
  }

  getProduct(productId: string) 
  {
    return {...this.MOBIL.find(product => {
      return product.ID === productId;
    })};
  }
}
