import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewClientPageRoutingModule } from './add-new-client-routing.module';

import { AddNewClientPage } from './add-new-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewClientPageRoutingModule
  ],
  declarations: [AddNewClientPage]
})
export class AddNewClientPageModule {}
