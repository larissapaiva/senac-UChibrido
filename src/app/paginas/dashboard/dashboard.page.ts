
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../servicos/produtos.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  infos: any;
  constructor( private servico: ProdutosService) { }
  
  ngOnInit() {
    this.servico.listar().subscribe(data => {
      this.infos=data.map(e=> {
        return { 
          id:e.payload.doc.id,
          nome:e.payload.doc.data()['pnome'],
          valor:e.payload.doc.data()['pvalor'],
          caminho:e.payload.doc.data()['caminho'],
          descricao:e.payload.doc.data()['pdescricao']
        }
       
      })
      console.log(this.infos);
    });
  }

}
