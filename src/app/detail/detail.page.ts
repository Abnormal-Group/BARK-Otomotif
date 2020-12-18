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
  TEMP: string;
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

  }

  ngAfterViewInit() 
  {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('productId')) { return; }
      const model = paramMap.get('productId');

      console.log('Model: ', model);

      if(model == "Avanza" || model == "Innova" || model == "Fortuner" || model == "Land Cruiser")
      {
        this.TEMP = "Toyota";
      }
      else if(model == "Xpander" || model == "Pajero")
      {
        this.TEMP = "Mitsubishi";
      }
      else if(model == "Brio" || model == "Civic")
      {
        this.TEMP = "Honda";
      }

      await this.getData(model);
    });

    console.log("TEMP: ", this.TEMP);

    if(this.TEMP == "Toyota")
    {
      this.showMap(this.toyotaPos);
    }
    else if(this.TEMP == "Mitsubishi")
    {
      this.showMap(this.mitsubishiPos);
    }
    else if(this.TEMP == "Honda")
    {
      this.showMap(this.hondaPos);
    }
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

  toyotaPos: any = 
  {
    lat: -6.246756214938007,
    lng: 106.62689438050396
  };

  mitsubishiPos: any = 
  {
    lat: -6.275908734290353,
    lng: 106.65846895396079
  };

  hondaPos: any = 
  {
    lat: -6.296393181483966,
    lng: 106.66697866225027
  };

  suzukiPos: any = 
  {
    lat: -6.290311046708391,
    lng: 106.78115963353491
  };

  showMap(pos: any) 
  {
    const options = {
      center: new google.maps.LatLng(pos.lat, pos.lng),
      zoom: 15,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.ABC.nativeElement, options);

    if(this.TEMP == "Toyota")
    {
      const marker = new google.maps.Marker({
        position: this.toyotaPos,
        map: this.map
      });
    }
    else if(this.TEMP == "Mitsubishi")
    {
      const marker = new google.maps.Marker({
        position: this.mitsubishiPos,
        map: this.map
      });
    }
    else if(this.TEMP == "Honda")
    {
      const marker = new google.maps.Marker({
        position: this.hondaPos,
        map: this.map
      });
    }
  }
}
