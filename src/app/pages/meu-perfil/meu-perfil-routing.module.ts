import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuPerfilPage } from './meu-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: MeuPerfilPage
  },
  {
    path: 'alterar-senha',
    loadChildren: () => import('./alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuPerfilPageRoutingModule {}
