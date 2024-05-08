import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../services/formulario.service';
import { FormValidations } from '../form-validations';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cadastroForm!: FormGroup;

  @Input() perfilComponent = false;
  @Input() titulo:string = 'Crie sua conta';
  @Input() textoBotao:string = 'CADASTRAR';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()
  @Output() sair: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: 'Alex Ferreira',
      nascimento: '20/20/2020',
      cpf: '12312312123',
      cidade: 'Sergipe',
      email: [null, Validators.required, Validators.email],
      senha: [null, [Validators.required, Validators.minLength(4)]],
      genero: 'Masculino',
      telefone: ['12312312123', Validators.required],
      estado:['Aracaju'],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(4),FormValidations.equalTo('senha')]],
      aceitarTermos: [true]
    });

    // if(this.perfilComponent){
    //   this.cadastroForm.get('aceitarTermos')?.setValidators(null)
    // }else{
    //   this.cadastroForm.get('aceitarTermos')?.setValidators([Validators.requiredTrue])
    // }
    //this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();
    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
    console.log("Cadastro realizado com sucesso!");
    this.router.navigateByUrl('/login')
  }
  deslogar(){
    this.sair.emit();
    }

  }

