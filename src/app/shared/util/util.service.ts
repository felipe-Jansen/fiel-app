import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Cliente, ICLiente} from "../model/cliente.model";
import {API_URL_V1} from "../../app.constants";
import {createRequestOption} from "./request-util";
import {EmpresaService} from "../../services/empresa.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UtilService {

    private NOME_ENTIDADE = 'clientes';

    constructor(
        private http: HttpClient,
        protected alertController: AlertController,
        protected router: Router
    ) {}

    getEnderecoCepWidenet(cep) {
        return this.http.get(
            'https://cep.widenet.host/busca-cep/api/cep/' + cep + '.json'
        );
    }

    async showAlertErro() {
        const alert = await this.alertController.create({
            header: 'Ocorreu um erro!',
            message: 'Ocorreu um erro ao tentar realizar o processo! Tente novamente ou contate o administrador do sistema',
            buttons: [
                {
                    text: 'Fechar',
                }
            ]
        });
        await alert.present();
    }

    static isValidoCpf(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000" || strCPF == "000000000000") return false;

        for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

}
