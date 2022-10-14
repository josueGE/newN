import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionePage } from './notificacione.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionePageRoutingModule {}
