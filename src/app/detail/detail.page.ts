import {  Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit 
{
  datas: any = [];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.3,
    centeredSlides: true, //For cool effect haha
    spaceBetween: 55,
    loop: true,
    autoplay: true
  };

  constructor(private modalController : ModalController, private dataService: DataService, private activatedRoute: ActivatedRoute) { } 

  async ngOnInit() 
  { 
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('productId')) { return; }
      const model = paramMap.get('productId');

      console.log('Model: ', model);

      await this.getData(model);
      
    });
  }

  // async ionViewWillEnter() 
  // {
  //   await this.getData('Avanza');
  // }

  openPreview()
  {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: Image
      }
    }).then(modal => modal.present());
  }

  async getData(key)
  {
    var DATA = await this.dataService.getAllData() as [];

    this.datas = [];

    DATA.forEach(uid => {
      if(uid['key'] == key)
      {
        this.datas.push({
          Image: uid['Image'],
          SSBB: uid['SSBB'],
          Tipe: uid['Tipe'],
          DXL: uid['DXL'],
          CC: uid['CC'],
          Kompresi: uid['Kompresi'],
          HP: uid['HP'],
          Torsi: uid['Torsi']
        });
      }
    });

    console.log('Data Array: ', this.datas);
  }
}
