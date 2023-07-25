import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenguinListComponent } from './penguin-list/penguin-list.component';
import { PenguinDetailComponent } from './penguin-detail/penguin-detail.component';
import { PenguinAquariumComponent } from './penguin-aquarium/penguin-aquarium.component';
import { PenguinNotFoundComponent } from './error/penguin-not-found/penguin-not-found.component';
import { PenguinGoodsComponent } from './penguin-goods/penguin-goods.component';

const routes: Routes = [
  {
    //親パスの時のルート
    path:'',
    //「URLが完全一致した場合」
    pathMatch: 'full',
    component: PenguinListComponent
  },
  {
    //水族館
    path:'aquarium',
    pathMatch: 'full',
    component: PenguinAquariumComponent
  },
  {
    //水族館
    path:'goods',
    component: PenguinGoodsComponent
  },{
    //詳細画面
    path:':id',
    component: PenguinDetailComponent
  },
  {
    //404
    path:'**',
    component: PenguinNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
