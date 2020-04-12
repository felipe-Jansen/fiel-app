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
    path: 'recompensa-update',
    loadChildren: () => import('./pages/recompensa/update-recompensa/update-recompensa.module').then(m => m.UpdateRecompensaPageModule)
  },{
    path: 'recompensa-update/:idRecompensa',
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
    path: 'update-cliente/:idCliente/edit',
    loadChildren: () => import('./pages/cliente/update-cliente/update-cliente.module').then( m => m.UpdateClientePageModule)
  },
  {
    path: 'grid-recompensa',
    loadChildren: () => import('./pages/recompensa/grid-recompensa/grid-recompensa.module').then( m => m.GridRecompensaPageModule)
  },
  {
    path: 'historico-cliente/:idCliente',
    loadChildren: () => import('./pages/cliente/historico-cliente/historico-cliente.module').then( m => m.HistoricoClientePageModule)
  },
  {
    path: 'detalhe-ponto/:idPonto',
    loadChildren: () => import('./pages/ponto/detalhe-ponto/detalhe-ponto.module').then( m => m.DetalhePontoPageModule)
  },
  {
    path: 'troca-ponto/:idCliente',
    loadChildren: () => import('./pages/cliente/troca-ponto/troca-ponto.module').then(m => m.TrocaPontoPageModule)
  },
  {
    path: 'estatistica',
    loadChildren: () => import('./pages/estatistica/estatistica.module').then( m => m.EstatisticaPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./pages/empresa/update-empresa/empresa.module').then(m => m.EmpresaPageModule)
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./pages/meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'esqueci-minha-senha',
    loadChildren: () => import('./pages/esqueci-minha-senha/esqueci-minha-senha.module').then(m => m.EsqueciMinhaSenhaPageModule)
  },
  {
    path: 'politicas-de-privacidade',
    loadChildren: () => import('./pages/politicas-de-privacidade/politicas-de-privacidade.module').then( m => m.PoliticasDePrivacidadePageModule)
  },
  {
    path: 'suporte-tecnico',
    loadChildren: () => import('./pages/suporte-tecnico/suporte-tecnico.module').then( m => m.SuporteTecnicoPageModule)
  },
  {
    path: 'introduced-slides',
    loadChildren: () => import('./pages/introduced-slides/introduced-slides.module').then( m => m.IntroducedSlidesPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./pages/financeiro/financeiro.module').then(m => m.FinanceiroPageModule)
  },
  {
    path: 'minhas-vendas',
    loadChildren: () => import('./pages/minhas-vendas/minhas-vendas.module').then( m => m.MinhasVendasPageModule)
  },
  {
    path: 'movimentacoes-cliente/:idCliente',
    loadChildren: () => import('./pages/cliente/movimentacoes-cliente/movimentacoes-cliente.module').then( m => m.MovimentacoesClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
