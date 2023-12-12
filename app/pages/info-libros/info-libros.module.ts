import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoLibrosPageRoutingModule } from './info-libros-routing.module';

import { InfoLibrosPage } from './info-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoLibrosPageRoutingModule
  ],
  declarations: [InfoLibrosPage]
})
export class InfoLibrosPageModule {}
