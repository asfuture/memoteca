import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { CadastroService } from '../services/cadastro.service';
import { PessoaUsuaria } from '../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  cadastrar(){
    const formCadastro =  this.formularioService.getCadastro()
    console.log('Cadastro realizado com sucesso!',formCadastro);

    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next:(value) =>{
          console.log("Cadastro realizado com sucesso!", value)
          this.router.navigate(['/login']);
        },
        error:(err) =>{
          console.log("Erro ao realizado cadastro!", err)
        }
      })
    }
  }
 

  ngOnInit(): void {
  }


}
