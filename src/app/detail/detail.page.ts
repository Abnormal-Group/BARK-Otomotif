import {  Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.3,
    centeredSlides: true, //For cool effect haha
    spaceBetween: 55,
    loop: true,
    autoplay: true
   };
  
    constructor(private modalController : ModalController ){

    } 


    openPreview(){
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: Image
        }
      }).then(modal => modal.present());
    }

    
  }
  
