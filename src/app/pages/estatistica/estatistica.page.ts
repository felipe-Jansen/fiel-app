import {Component, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {PontoService} from "../../services/ponto.service";
import {EmpresaService} from "../../services/empresa.service";


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

  constructor(
      public pontoService: PontoService,
      public empresaSerice: EmpresaService
  ) { }

  ionViewDidEnter() {
    this.getChartInfo();
    this.getReceitaTotal();
    this.getTotalClientes();
    this.getTotalPontos();
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
