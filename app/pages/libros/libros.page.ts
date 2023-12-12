import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Books } from '../interfaces/interface';
import { ModalController } from '@ionic/angular';
import { InfoLibrosPage } from '../info-libros/info-libros.page';
import { MenuController } from '@ionic/angular';





@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage {

  libros : Books[]=[];

  constructor(private apicrudService: ApicrudService,
              private loadingCtrl : LoadingController,
              private modalController: ModalController,
              private menu: MenuController,) { }

    MostrarMenu(){
    this.menu.open('first');
    }

    ionViewWillEnter(){
    this.loadLibros();
    }

    async loadLibros(event?: InfiniteScrollCustomEvent){
    
      const loading = await this.loadingCtrl.create({
        message: "Espere un momento...",
        spinner: "bubbles"
      });
      await loading.present();
    
      this.apicrudService.MostrarLibros().subscribe(
        {
          next: resp=>{
            console.log(resp);
           loading.dismiss();
            let listString = JSON.stringify(resp)
            this.libros=JSON.parse(listString)
            event?.target.complete();
            console.log(this.libros);
            
          },
          error: err =>{
            console.log(err.error.message);
           loading.dismiss();
          }
        }
      ) 
    }

    async abrirModal(libro: any) {
      const modal = await this.modalController.create({
        component: InfoLibrosPage,
        componentProps: {
         libro: libro,
        }
      });
      return await modal.present();
    }

}
