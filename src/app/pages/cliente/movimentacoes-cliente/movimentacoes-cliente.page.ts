import { Component, OnInit } from '@angular/core';
import {MovimentacaoEstoqueClienteService} from "../../../services/movimentacao-estoque-cliente.service";
import {ActivatedRoute} from "@angular/router";
import {IMovimentacaoEstoqueCliente} from "../../../shared/model/movimentacaoEstoque.modelCliente";

@Component({
  selector: 'app-movimentacoes-cliente',
  templateUrl: './movimentacoes-cliente.page.html',
  styleUrls: ['./movimentacoes-cliente.page.scss'],
})
export class MovimentacoesClientePage implements OnInit {

    idCliente = this.route.snapshot.params['idCliente'];
    movimentacoes: IMovimentacaoEstoqueCliente[] = [];

  constructor(
      private movimentacoesEStoqueClienteService: MovimentacaoEstoqueClienteService,
        private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.movimentacoesEStoqueClienteService.getAll({'idCliente': this.idCliente})
        .subscribe(res => {
          this.movimentacoes = res;
        })
  }

}
