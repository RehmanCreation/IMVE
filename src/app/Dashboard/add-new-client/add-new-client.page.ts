import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.page.html',
  styleUrls: ['./add-new-client.page.scss'],
})
export class AddNewClientPage {
  constructor(private navCtrl: NavController) {}

  close() {
    this.navCtrl.navigateBack('/home'); 
  }

  saveDetails() {

    console.log('Details saved');
  }
}
