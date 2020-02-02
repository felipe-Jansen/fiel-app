import { Observable } from 'rxjs';
import { Recompensa } from './../shared/model/recompensa.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import moment from "moment";
import {map} from "rxjs/operators";
import {createRequestOption} from "../shared/util/request-util";

@Injectable({ providedIn: 'root' })
export class RecompensaService {

    private NOME_ENTIDADE = 'recompensas';

    constructor(protected http: HttpClient) {}

    getAll(query?: any): Observable<Recompensa[]> {
        const option = createRequestOption(query);
        return this.http.get<Recompensa[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }


}
