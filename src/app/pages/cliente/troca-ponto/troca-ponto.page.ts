import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecompensaService} from "../../../services/recompensa.service";
import {IRecompensa, Recompensa} from "../../../shared/model/recompensa.model";
import {EmpresaService} from "../../../services/empresa.service";
import {ClienteService} from "../../../services/cliente.service";
import {Cliente} from "../../../shared/model/cliente.model";
import {RecompensaCliente} from "../../../shared/model/recompensa_cliente.model";
import {ClienteRecompensaService} from "../../../services/clienteRecompensa.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {IMovimentacaoEstoqueCliente, MovimentacaoEstoqueCliente} from "../../../shared/model/MovimentacaoEstoque.model";
import {MovimentacaoEstoqueClienteService} from "../../../services/movimentacao-estoque-cliente.service";

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
    movimentacoesCliente: IMovimentacaoEstoqueCliente[] = [];

    constructor(
        private route: ActivatedRoute,
        private recompensaService: RecompensaService,
        private empresaService: EmpresaService,
        private clienteService: ClienteService,
        private clienteRecompensaService: ClienteRecompensaService,
        public alertController: AlertController,
        private router: Router,
        public loadingController: LoadingController,
        public movimentacaoEstoqueClienteService: MovimentacaoEstoqueClienteService

    ) { }

    ngOnInit(): void {
    }

    async ionViewWillEnter() {
        const loading = await this.loadingController.create({
            message: 'Aguarde alguns instantes...estamos procurando suas recompensas!'
        });
        await loading.present();
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
        this.recompensas = [];
        this.empresaService.getEmpresaLogada()
            .then(res => {
                this.recompensaService.getAll({
                    'idEmpresa': res.codigo
                }).subscribe(recompensas => {
                    this.recompensas = recompensas;
                    this.geraMovimentacoes(recompensas);
                    this.loadingController.dismiss();
                }, err => {
                    this.loadingController.dismiss();
                });
            });
    }

    private geraMovimentacoes(recompensas: Recompensa[]) {
        this.movimentacoesCliente = [];
        recompensas.forEach(recompensa => {
            const movimentacaoEstoqueCliente = new MovimentacaoEstoqueCliente();
            movimentacaoEstoqueCliente.quantidade = 0;
            movimentacaoEstoqueCliente.idRecompensa = recompensa.codigo;
            movimentacaoEstoqueCliente.tipoMovimentacao = 'ENTRADA';
            movimentacaoEstoqueCliente.idCliente = this.idCliente;
            movimentacaoEstoqueCliente.nomeRecompensa = recompensa.descricao;
            movimentacaoEstoqueCliente.estoqueRecompensa = recompensa.qtdEstoque;
            movimentacaoEstoqueCliente.pontosRecompensa = recompensa.totalPontos;
            movimentacaoEstoqueCliente.tipoRecompensa = recompensa.tipoRecompensa;
            this.movimentacoesCliente.push(movimentacaoEstoqueCliente);
        });
    }

    movimentaEstoqueRecompensa(movimentacaoEstoqueCliente: IMovimentacaoEstoqueCliente) {
        movimentacaoEstoqueCliente.quantidade++;
        this.cliente.totalPontos -= movimentacaoEstoqueCliente.pontosRecompensa;
    }

    decrementarRecompensa(movimentacaoEstoqueCliente: IMovimentacaoEstoqueCliente) {

        movimentacaoEstoqueCliente.quantidade--;
        this.cliente.totalPontos += movimentacaoEstoqueCliente.pontosRecompensa;
    }

    realizarTroca() {
        this.movimentacoesCliente.forEach(movimentacao => {
            movimentacao.quantidade > 0 ? this.geraMovimentacao(movimentacao) : null;
        });
        this.mostraModal();
    }

    geraMovimentacao(movimentacao: IMovimentacaoEstoqueCliente) {
        this.movimentacaoEstoqueClienteService.create(movimentacao).subscribe(res => {
            console.log('Movimentacao criada', res);
        }, error => {
            this.mostraModalErro();
        });
    }

    async mostraModal() {
        const alert = await this.alertController.create({
            header: 'Sucesso!',
            message: 'As recompensas foram trocadas com sucesso :) !',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        this.router.navigate(['/detalhe-cliente', this.idCliente])
                    }
                }
            ]
        });
        await alert.present();
    }

    async mostraModalErro() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Message <strong>text</strong>!!!',
            buttons: [
                {
                    text: 'Fechar',
                    handler: () => {
                    }
                }
            ]
        });
        await alert.present();
    }

}
