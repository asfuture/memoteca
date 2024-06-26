import { Router } from '@angular/router';
import { PensamentoService } from '../services/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
[x: string]: any;
pensamento: Pensamento =  {
  conteudo:'',
  autoria:'',
  modelo:''
}
  constructor( 
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
