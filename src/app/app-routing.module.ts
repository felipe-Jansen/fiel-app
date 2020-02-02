import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detalhe-cliente/:idCliente',
    loadChildren: () => import('./pages/cliente/detalhe-cliente/detalhe-cliente.module').then( m => m.DetalheClientePageModule)
  },
  {
    path: 'ponto-update',
    loadChildren: () => import('./pages/recompensa/update-recompensa/update-recompensa.module').then(m => m.UpdateRecompensaPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'update-cliente',
    loadChildren: () => import('./pages/cliente/update-cliente/update-cliente.module').then( m => m.UpdateClientePageModule)
  },
  {
    path: 'grid-recompensa',
    loadChildren: () => import('./pages/recompensa/grid-recompensa/grid-recompensa.module').then( m => m.GridRecompensaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
