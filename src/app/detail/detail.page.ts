import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit 
{
  datas: any = [];
  map: any;
  @ViewChild('ABC', {read: ElementRef, static: false}) ABC: ElementRef;

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.3,
    centeredSlides: true, //For cool effect haha
    spaceBetween: 55,
    loop: true,
    autoplay: true
  };

  constructor(private modalController : ModalController, private dataService: DataService, private activatedRoute: ActivatedRoute) { } 

  ngOnInit() 
  { 
    // this.activatedRoute.paramMap.subscribe(async paramMap => {
    //   if (!paramMap.has('productId')) { return; }
    //   const model = paramMap.get('productId');

    //   console.log('Model: ', model);

    //   await this.getData(model);
      
    // });
  }

  ngAfterViewInit() 
  {
    this.showMap(this.umnPos);

    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('productId')) { return; }
      const model = paramMap.get('productId');

      console.log('Model: ', model);

      await this.getData(model);
      
    });
  }

  // openPreview()
  // {
  //   this.modalController.create({
  //     component: ImageModalPage,
  //     componentProps: {
  //       img: Image
  //     }
  //   }).then(modal => modal.present());
  // }

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

  // MAP
  umnPos: any = 
  {
    lat: -6.256081,
    lng: 106.618755
  };

  showMap(pos: any) 
  {
    const options = {
      center: new google.maps.LatLng(pos.lat, pos.lng),
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.ABC.nativeElement, options);
    
    const marker = new google.maps.Marker({
      position: this.umnPos,
      map: this.map
    });
  }
}
