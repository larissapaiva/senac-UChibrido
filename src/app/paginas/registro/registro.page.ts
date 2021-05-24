
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService} from '../../servicos/autenticacao.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nome: string;
  email: string;
  senha: string;

  constructor(
    private servico: AutenticacaoService, private nav:NavController) { }

  ngOnInit() {
  }

  registrar(){
    let usuario = {};
    usuario['nome'] = this.nome;
    usuario['email'] = this.email;
    usuario['senha'] = this.senha;

    
    this.servico.registrar(usuario).then(
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
