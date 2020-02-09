import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Cliente, ICLiente} from "../../../shared/model/cliente.model";
import moment from "moment";
import {IRecompensa, Recompensa} from "../../../shared/model/recompensa.model";
import {RecompensaService} from "../../../services/recompensa.service";
import {Router} from "@angular/router";
import {TipoRecompensaService} from "../../../services/tipo-recompensa.service";
import {ITipoRecompensa} from "../../../shared/model/tipo-recompensa.model";

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

  tipoRecompensas: ITipoRecompensa[] = [];

  constructor(
      private fb: FormBuilder,
      private recompensaService: RecompensaService,
      private router: Router,
      private tipoRecompensaService: TipoRecompensaService
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

  ionViewWillEnter() {
    this.getTiposRecompensas();
  }

  getTiposRecompensas() {
    this.tipoRecompensaService.findAll()
        .subscribe(res => {
          console.log(res);
          this.tipoRecompensas = res;
        });
  }

  ngOnInit() {
  }

  save() {
    let recompensa = this.createFromForm();
    console.log(recompensa);
    this.recompensaService.create(recompensa)
        .subscribe(res => {
          this.router.navigate(['grid-recompensa'])
        })
  }

}