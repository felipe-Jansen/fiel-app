import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciMinhaSenhaPage } from './esqueci-minha-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciMinhaSenhaPage
  },
  {
    path: 'digitar-codigo-recuperacao',
    loadChildren: () => import('./digitar-codigo-recuperacao/digitar-codigo-recuperacao.module').then( m => m.DigitarCodigoRecuperacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciMinhaSenhaPageRoutingModule {}
