import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Cliente, ICLiente} from "../../../shared/model/cliente.model";
import moment from "moment";
import {IRecompensa, Recompensa} from "../../../shared/model/recompensa.model";

@Component({
  selector: 'app-update-recompensa',
  templateUrl: './update-recompensa.page.html',
  styleUrls: ['./update-recompensa.page.scss'],
})
export class UpdateRecompensaPage implements OnInit {

  editForm = this.fb.group({
    codigo: [],
    totalPontos: [],
    dataCadastro: [],
    idEmpresa: [],
    qtdEstoque: [],
    idTipoRecompensa: [],
    descricao: []
  });

  constructor(
      private fb: FormBuilder
  ) { }

  private createFromForm(): IRecompensa {
    return {
      ...new Recompensa(),
      codigo: this.editForm.get(['codigo']).value,
      totalPontos: this.editForm.get(['totalPontos']).value,
      dataCadastro: this.editForm.get(['dataCadastro']).value,
      idEmpresa: this.editForm.get(['idEmpresa']).value,
      idTipoRecompensa: this.editForm.get(['idTipoRecompensa']).value,
      descricao: this.editForm.get(['descricao']).value,
      qtdEstoque: this.editForm.get(['qtdEstoque']).value,
    }
  }

  ngOnInit() {
  }

  save() {
    let recompensa = this.createFromForm();
    console.log(recompensa);
  }

}
