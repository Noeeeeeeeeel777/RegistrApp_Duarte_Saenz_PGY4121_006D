import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'; 


@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  picture: any;
  
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }

  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    this.picture = image.dataUrl;
  }

  async escanearCodigo() {
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      alert(`Código escaneado exitosamente!!: ${result.content}`);
      // Aquí puedes utilizar el valor del código escaneado como desees
    }
  }

  


}
