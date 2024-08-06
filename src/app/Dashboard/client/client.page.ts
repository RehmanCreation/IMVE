import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  isChecked = false;
  isHomeActive = true;
  isDropdownOpen = false; 

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  view() {
    console.log('View clicked');
    this.isDropdownOpen = false;
  
  }

  edit() {
    console.log('Edit clicked');
    this.isDropdownOpen = false;
 
  }

  delete() {
    console.log('Delete clicked');
    this.isDropdownOpen = false;
  
  }

  navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}
