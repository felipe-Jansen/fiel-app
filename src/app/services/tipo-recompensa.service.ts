import {Observable} from 'rxjs';
import {IRecompensa, Recompensa} from './../shared/model/recompensa.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL_V1} from '../app.constants';
// @ts-ignore
import {map} from "rxjs/operators";
import {createRequestOption} from "../shared/util/request-util";
import {EmpresaService} from "./empresa.service";
import {ITipoRecompensa} from "../shared/model/tipo-recompensa.model";

@Injectable({ providedIn: 'root' })
export class TipoRecompensaService {

    private NOME_ENTIDADE = 'tipoRecompensa';

    constructor(
        protected http: HttpClient,
        private empresaService: EmpresaService
    ) {}

    getAll(query?: any): Observable<Recompensa[]> {
        const option = createRequestOption(query);
        return this.http.get<Recompensa[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`,  { params: option, observe: 'response' })
            .pipe(map(res => {
                return res.body['content'];
            }));
    }

    create(recompensa: IRecompensa):Observable<IRecompensa> {
        return this.http.post<IRecompensa>(`${API_URL_V1}/${this.NOME_ENTIDADE}`, recompensa);
    }
    
    findAll(): Observable<ITipoRecompensa[]> {
        return this.http.get<ITipoRecompensa[]>(`${API_URL_V1}/${this.NOME_ENTIDADE}`);
    }


}
