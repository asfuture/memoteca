import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { FormularioService } from './../services/formulario.service';
import { CadastroService } from './../services/cadastro.service';
import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from '../pensamento';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  titulo='Olá!';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;
  token = '';
  nome = '';
  cadastro!:PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService:TokenService,
    private cadastroService:CadastroService,
    private formularioService:FormularioService,
    private router: Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe(cadastro =>{
    this.cadastro = cadastro;
    this.nome = this.cadastro.nome;
    this.carregarFormulario();
    })
  }

  carregarFormulario(){
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      email: this.cadastro.email,
      senha: this.cadastro.senha,

    })
  }

  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next:()=>{
        alert('Cadastro editado com sucesso!')
        this.router.navigate(['/'])
      },
      error:(err) =>{
        console.log("Error ap atualizar cadastro.", err)
      }
    })
  }

  deslogar() {
  console.log('Logout realizado com sucesso!')
  this.userService.logout();
  this.router.navigate(['/login']);
  }

  
}
