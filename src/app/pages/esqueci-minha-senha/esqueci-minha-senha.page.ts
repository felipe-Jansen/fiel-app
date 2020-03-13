import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../services/user.service";

@Component({
  selector: 'app-esqueci-minha-senha',
  templateUrl: './esqueci-minha-senha.page.html',
  styleUrls: ['./esqueci-minha-senha.page.scss'],
})
export class EsqueciMinhaSenhaPage implements OnInit {

  email: string;

  constructor(
      private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  enviarEmail(email: string) {
    this.usuarioService.recoverPassword(email).subscribe(res => {
      console.log(res);
    })
  }
}
