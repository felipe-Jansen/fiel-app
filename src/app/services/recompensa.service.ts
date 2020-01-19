import { Observable } from 'rxjs';
import { Recompensa } from './../shared/model/recompensa.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import moment from "moment";

@Injectable({ providedIn: 'root' })
export class RecompensaService {

    private NOME_ENTIDADE = 'recompensas';

    constructor(protected http: HttpClient) {}

    getByEmpresa(idEmpresa: number): Observable<Recompensa[]> {
        return this.http.get<Recompensa[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}?idEmpresa=${idEmpresa}`);
    }


}
