import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'selenium-webdriver';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor( private auth: AngularFireAuth) { }

  registrar(usr){
    console.log("cheguei, cadastrar!");
    console.log(usr);

    return new Promise<any>((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(usr.email, usr.senha)
      .then(
        res => resolve(res),
        err => rejects(err))
    });
  }
  logar(usr){
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(usr.email, usr.senha)
      .then(
        res => resolve(res),
        err => rejects(err))
    });
  }
  logout(){


  }
}
