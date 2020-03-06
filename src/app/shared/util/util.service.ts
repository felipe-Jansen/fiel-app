import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Cliente, ICLiente} from "../model/cliente.model";
import {API_URL_V1} from "../../app.constants";
import {createRequestOption} from "./request-util";

@Injectable({ providedIn: 'root' })
export class UtilService {

    private NOME_ENTIDADE = 'clientes';

    constructor(
        private http: HttpClient
    ) {}

    getEnderecoCepWidenet(cep) {
        return this.http.get(
            'https://cep.widenet.host/busca-cep/api/cep/' + cep + '.json'
        );
    }


}
