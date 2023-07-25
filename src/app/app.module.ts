import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PenguinListComponent } from './penguin-list/penguin-list.component';

//Angular material ツールバー
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PenguinDetailComponent } from './penguin-detail/penguin-detail.component';
import { PenguinAquariumComponent } from './penguin-aquarium/penguin-aquarium.component';
import { PenguinNotFoundComponent } from './error/penguin-not-found/penguin-not-found.component';
import { PenguinGoodsComponent } from './penguin-goods/penguin-goods.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PenguinListComponent,
    PenguinDetailComponent,
    PenguinAquariumComponent,
    PenguinNotFoundComponent,
    PenguinGoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Angular material ツールバー
    MatToolbarModule,
    MatCardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
