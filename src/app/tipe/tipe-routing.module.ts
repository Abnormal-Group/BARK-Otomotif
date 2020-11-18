import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipePage } from './tipe.page';

const routes: Routes = [
  {
    path: '',
    component: TipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipePageRoutingModule {}
