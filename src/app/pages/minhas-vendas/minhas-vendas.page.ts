import { Component, OnInit } from '@angular/core';
import {IPonto} from "../../shared/model/ponto.model";
import {ActivatedRoute} from "@angular/router";
import {PontoService} from "../../services/ponto.service";
import {EmpresaService} from "../../services/empresa.service";

@Component({
  selector: 'app-minhas-vendas',
  templateUrl: './minhas-vendas.page.html',
  styleUrls: ['./minhas-vendas.page.scss'],
})
export class MinhasVendasPage implements OnInit {

  idCliente = this.route.snapshot.params['idCliente'];
  pontos: IPonto[] = [];

  constructor(
      private route: ActivatedRoute,
      private pontoService: PontoService,
      private empresaService: EmpresaService
  ) { }

  ionViewWillEnter() {
    this.empresaService.getEmpresaLogada().then(empresa => {
      this.pontoService.getAll({'idEmpresa': empresa.codigo})
          .subscribe(res => {
            this.pontos = res;
          })
    })
  }

  ngOnInit() {
  }

}
