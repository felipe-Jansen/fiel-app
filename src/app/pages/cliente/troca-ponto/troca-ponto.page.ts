import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecompensaService} from "../../../services/recompensa.service";
import {IRecompensa} from "../../../shared/model/recompensa.model";
import {EmpresaService} from "../../../services/empresa.service";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";
import {RecompensaCliente} from "../../../shared/model/recompensa_cliente.model";
import {ClienteRecompensaService} from "../../../services/clienteRecompensa.service";

@Component({
  selector: 'app-troca-ponto',
  templateUrl: './troca-ponto.page.html',
  styleUrls: ['./troca-ponto.page.scss'],
})
export class TrocaPontoPage implements OnInit {

  idCliente = this.route.snapshot.params['idCliente'];
  recompensas: IRecompensa[] = [];
  cliente: Cliente;
  recompensasCliente: RecompensaCliente[] = [];

  constructor(
      private route: ActivatedRoute,
      private recompensaService: RecompensaService,
      private empresaService: EmpresaService,
      private clienteService: ClienteService,
      private clienteRecompensaService: ClienteRecompensaService
  ) { }

  ionViewWillEnter() {
    this.getRecompensas();
    this.getCliente();
  }

  getCliente() {
    this.clienteService.find(this.idCliente)
        .subscribe(res => {
          this.cliente = res;
        });
  }

  getRecompensas() {
    this.empresaService.getEmpresaLogada()
        .then(res => {
          this.recompensaService.getAll({
            'idEmpresa': res.codigo
          }).subscribe(recompensas => {
            this.recompensas = recompensas;
            this.recompensas.forEach(recompensa => {
                this.recompensasCliente.push(new RecompensaCliente(
                    null,
                    recompensa.codigo,
                    this.idCliente,
                    0,
                    recompensa.totalPontos,
                    recompensa.descricao,
                    false
                ))
            });
          });
        });
  }

  ngOnInit() {
  }


    incrementarRecompensa(recompensaCliente: RecompensaCliente) {
        if (this.cliente.totalPontos > 0) {
            this.recompensasCliente[this.recompensasCliente.indexOf(recompensaCliente)].quantidade += 1;
            this.cliente.totalPontos -= recompensaCliente.recompensaPontos;
        }
    }

    decrementarRecompensa(recompensaCliente: RecompensaCliente) {
        this.recompensasCliente[this.recompensasCliente.indexOf(recompensaCliente)].quantidade -= 1;
        this.cliente.totalPontos += recompensaCliente.recompensaPontos;
    }

    realizarTroca() {
        this.recompensasCliente.forEach(recompensa => {
           if (recompensa.quantidade !== 0) {
               console.log(recompensa);
               recompensa.idCliente = this.idCliente;
               this.clienteRecompensaService.create(recompensa)
                   .subscribe(res => {
                      console.log(res);
                   });
           }
        });
    }

    liberaIncrementoRecompensa(recompensaCliente: RecompensaCliente) {
      return this.cliente.totalPontos >= recompensaCliente.recompensaPontos ? true : false;
    }
}
