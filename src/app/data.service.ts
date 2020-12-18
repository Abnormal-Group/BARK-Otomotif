import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  constructor(private fireDb: AngularFireDatabase) { }

  getAllData()
  {
    return new Promise(resolve => {
      this.fireDb.list('Data/').snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val() as {}}))
        )
      ).subscribe(datas => {
        resolve(datas);
      })
    });
  }
}
