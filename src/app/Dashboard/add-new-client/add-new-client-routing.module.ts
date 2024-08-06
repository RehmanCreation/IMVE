import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewClientPage } from './add-new-client.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewClientPageRoutingModule {}
