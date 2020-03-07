import {Component, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {PontoService} from "../../services/ponto.service";
import {EmpresaService} from "../../services/empresa.service";
import {Cliente} from "../../shared/model/cliente.model";
import {ClienteService} from "../../services/cliente.service";


const viewChild = ViewChild;

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.page.html',
  styleUrls: ['./estatistica.page.scss'],
})
export class EstatisticaPage {

  // @ts-ignore
  @viewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  totalClientes: number;
  receitaTotal: number;
  totalPontos: number;
  clienteMaisPontos: Cliente = new Cliente;
  clienteMenosPontos: Cliente = new Cliente;

  constructor(
      public pontoService: PontoService,
      public empresaSerice: EmpresaService,
      public clienteService: ClienteService
  ) { }

  ionViewDidEnter() {
    this.getChartInfo();
    this.getReceitaTotal();
    this.getTotalClientes();
    this.getTotalPontos();
    this.getClienteMaisPontos();
    this.getClienteMenosPontos();
  }

  getClienteMaisPontos() {
    this.empresaSerice.getEmpresaLogada().then(empresa => {
      this.clienteService.getClienteMaisPontos(empresa.codigo).subscribe(cliente => this.clienteMaisPontos = cliente)
    });
  }

  getClienteMenosPontos() {
    this.empresaSerice.getEmpresaLogada().then(empresa => {
      this.clienteService.getClienteMenosPontos(empresa.codigo).subscribe(cliente => this.clienteMenosPontos = cliente)
    });
  }

  getChartInfo() {
    this.pontoService.getDataChart(2020).then(res => {
      this.createBarChart(res);
    });
  }

  getTotalClientes() {
    this.empresaSerice.getTotalClientes().then(totalClientes => {
      this.totalClientes = totalClientes;
    });
  }

  private getTotalPontos() {
    this.empresaSerice.getTotalPontos().then(totalPontos => {
      this.totalPontos = totalPontos;
    });
  }

  getReceitaTotal() {
    this.empresaSerice.getReceitaTotal().then(receitaTotal => {
      this.receitaTotal = receitaTotal;
    });
  }

  createBarChart(res: any) {
    var ctx = this.barChart.nativeElement;
    this.bars = new Chart(ctx, {
      type: 'line',
      data: {
        labels: res.map(a => a.mes),
        datasets: [{
          label: 'Lucro por mês',
          data: res.map(a => a.total),
          backgroundColor: 'green', // array should have same number of elements as number of dataset
          borderColor: 'green',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return 'R$ ' + value;
              }
            }
          }]
        }
      },
    });
  }


}
