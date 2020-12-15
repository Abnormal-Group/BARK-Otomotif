import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'merek',
    pathMatch: 'full'
  },
  {
    path: 'merek',
    loadChildren: () => import('./merek/merek.module').then( m => m.MerekPageModule)
  },
  {
    path: 'merek/model/:productId',
    loadChildren: () => import('./model/model.module').then( m => m.ModelPageModule)
  },
  {
    path: 'tipe',
    loadChildren: () => import('./tipe/tipe.module').then( m => m.TipePageModule)
  },
  {
    path: 'merek/model/:productId/detail/:productId',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./image-modal/image-modal.module').then( m => m.ImageModalPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
