import {Observable} from 'rxjs';
import {IRecompensa} from './../shared/model/recompensa.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
import {ISuporte} from "../shared/model/suporte.model";

// @ts-ignore

@Injectable({ providedIn: 'root' })
export class SuporteService {

    private NOME_ENTIDADE = 'suportes';

    constructor(
        protected http: HttpClient
    ) {}


    create(suporte: ISuporte):Observable<ISuporte> {
        return this.http.post<ISuporte>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, suporte);
    }


}
