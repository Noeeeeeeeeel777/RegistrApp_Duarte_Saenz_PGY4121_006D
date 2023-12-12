import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoLibrosPage } from './info-libros.page';

const routes: Routes = [
  {
    path: '',
    component: InfoLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoLibrosPageRoutingModule {}
