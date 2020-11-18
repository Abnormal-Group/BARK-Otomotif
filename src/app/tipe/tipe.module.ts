import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipePageRoutingModule } from './tipe-routing.module';

import { TipePage } from './tipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipePageRoutingModule
  ],
  declarations: [TipePage]
})
export class TipePageModule {}
