import { Component, OnInit } from '@angular/core';
import { ICLiente, Cliente } from '../../../shared/model/cliente.model';
import {FormBuilder} from "@angular/forms";
import {ClienteService} from "../../../services/cliente.service";
import moment from "moment";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";


@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {

  idCliente = this.route.snapshot.params['idCliente'];

  editForm = this.fb.group({
    codigo: [],
    nome: [],
    sobrenome: [],
    cpf: [],
    cep: [],
    rua: [],
    bairro: [],
    cidade: [],
    estado: [],
    dataCadastro: [],
    dataNascimento: [],
    email: [],
    whatsapp: [],
    telefone: [],
    totalPontos: [],
    empresaId: []
  });

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    public loadingController: LoadingController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.idCliente) {
      this.clienteService.find(this.idCliente)
          .subscribe(res => {
            this.updateForm(res);
          })
    }
  }

  updateForm(cliente: ICLiente) {
    this.editForm.patchValue({
      codigo: cliente.codigo,
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      cpf: cliente.cpf,
      cep: cliente.cep,
      rua: cliente.rua,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      estado: cliente.estado,
      dataCadastro: cliente.dataCadastro,
      dataNascimento: cliente.dataNascimento,
      email: cliente.email,
      whatsapp: cliente.whatsapp,
      telefone: cliente.telefone,
      totalPontos: cliente.totalPontos,
      empresaId: cliente.empresaId
    });
  }

  private createFromForm(): ICLiente {
    return {
      ...new Cliente(),
      codigo: this.editForm.get(['codigo']).value,
      nome: this.editForm.get(['nome']).value,
      sobrenome: this.editForm.get(['sobrenome']).value,
      cpf: this.editForm.get(['cpf']).value,
      cep: this.editForm.get(['cep']).value,
      rua: this.editForm.get(['rua']).value,
      bairro: this.editForm.get(['bairro']).value,
      cidade: this.editForm.get(['cidade']).value,
      estado: this.editForm.get(['estado']).value,
      dataCadastro: moment().format('YYYY-MM-DD'),
      dataNascimento: null,
      email: this.editForm.get(['email']).value,
      whatsapp: this.editForm.get(['whatsapp']).value,
      telefone: this.editForm.get(['telefone']).value,
      totalPontos: this.editForm.get(['totalPontos']).value,
      empresaId: this.editForm.get(['empresaId']).value
    }
  }

  async save() {
    const loading = await this.loadingController.create({
      message: 'Aguarde alguns instantes...estamos salvando seu novo cliente ! :)'
    });
    await loading.present();
    let cliente = this.createFromForm();
    if (cliente.codigo) {
      this.clienteService.update(cliente)
          .subscribe(res => {
            this.router.navigate(['detalhe-cliente', res.codigo]);
            this.loadingController.dismiss();
          })
    } else {
      this.clienteService.create(cliente)
          .subscribe(res => {
            this.router.navigate(['detalhe-cliente', res.codigo]);
            this.loadingController.dismiss();
          })
    }

  }

}
