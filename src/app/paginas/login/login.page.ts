import { Component, OnInit } from '@angular/core';
import { AutenticacaoService} from '../../servicos/autenticacao.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;
  constructor(private servico: AutenticacaoService, private nav:NavController) { }

  ngOnInit() {
  }

  logar(){
    let usuario = {};
    usuario['email'] = this.email;
    usuario['senha'] = this.senha;

    this.servico.logar(usuario).then(
      resolve => {
        this.nav.navigateForward('dashboard');
      },
      error => {
        console.log("Deu erro!");
      }
    )



    console.log(this.email);
    console.log(this.senha);
  }

}
