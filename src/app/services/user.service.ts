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
import {Empresa} from "../shared/model/empresa.model";

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    private NOME_ENTIDADE = 'usuarios';

    constructor(
        protected http: HttpClient
    ) {}

    recoverPassword(email: string): Observable<any> {
        return this.http.get<any>(`${API_URL_V1}/${this.NOME_ENTIDADE}/recover_password?email=${email}`);
    }

    getByCodigoRecuperacao(codigoRecuperacao: string): Observable<any> {
        return this.http.get<any>(`${API_URL_V1}/${this.NOME_ENTIDADE}/get_by_codigo-recuperacao?codigoRecuperacao=${codigoRecuperacao}`);
    }

}
