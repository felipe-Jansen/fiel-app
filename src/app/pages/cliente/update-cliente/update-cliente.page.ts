import { Component, OnInit } from '@angular/core';
import { ICLiente, Cliente } from '../../../shared/model/cliente.model';
import {FormBuilder} from "@angular/forms";
import {ClienteService} from "../../../services/cliente.service";
import moment from "moment";
import {Router} from "@angular/router";


@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.page.html',
  styleUrls: ['./update-cliente.page.scss'],
})
export class UpdateClientePage implements OnInit {

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
    telefone: []
  });

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
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
      dataNascimento: moment(this.editForm.get(['dataNascimento']).value).format('YYYY-MM-DD'),
      email: this.editForm.get(['email']).value,
      whatsapp: this.editForm.get(['whatsapp']).value,
      telefone: this.editForm.get(['telefone']).value,
    }
  }

  save() {
    let cliente = this.createFromForm();
    console.log(cliente);
    this.clienteService.create(cliente)
        .subscribe(res => {
          this.router.navigate(['detalhe-cliente', res.codigo])
        })
  }

}
