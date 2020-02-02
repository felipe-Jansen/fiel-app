import { Component, OnInit } from '@angular/core';
import {IRecompensa} from "../../../shared/model/recompensa.model";
import {RecompensaService} from "../../../services/recompensa.service";
import {EmpresaService} from "../../../services/empresa.service";

@Component({
  selector: 'app-grid-recompensa',
  templateUrl: './grid-recompensa.page.html',
  styleUrls: ['./grid-recompensa.page.scss'],
})
export class GridRecompensaPage implements OnInit {

  recompensas: IRecompensa[] = [];

  constructor(
      private recompensaService: RecompensaService,
      private empresaService: EmpresaService
  ) { }

  ionViewWillEnter() {
    this.getRecompensas()
  }

  getRecompensas() {
    this.empresaService.getEmpresaLogada()
        .then(res => {
          this.recompensaService.getAll({
            'idEmpresa': res.codigo
          }).subscribe(recompensas => {
            this.recompensas = recompensas;
          });
        });
  }

  ngOnInit() {
  }

}
