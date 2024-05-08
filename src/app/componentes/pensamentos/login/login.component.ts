import { AutenticacaoService } from './../services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private autenticacaoService:AutenticacaoService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      senha:[null,Validators.required]
    });
  }

  login() {
    const email = this.loginForm!.value.email;
    const senha = this.loginForm!.value.senha;
    
    this.autenticacaoService.autenticar(email, senha).subscribe({
      next:(value) => {
        console.log('Login realizado com sucesso', value)
        this.route.navigateByUrl('/perfil'),
        this.loginForm.reset();
      },
      error: (err) => {
        console.log('Erro no Login', err)
      }
    })
  }
}
