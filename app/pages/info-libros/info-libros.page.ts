import { Component, OnInit, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-libros',
  templateUrl: './info-libros.page.html',
  styleUrls: ['./info-libros.page.scss'],
})
export class InfoLibrosPage implements OnInit {

  @Input() libro: any;

  constructor(private modalController: ModalController,
              private apiCrud: ApicrudService,
              private router: Router) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
