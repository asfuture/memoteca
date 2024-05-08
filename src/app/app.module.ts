import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { LoginComponent } from './componentes/pensamentos/login/login.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormularioComponent } from './componentes/pensamentos/formulario/formulario.component';
import { CadastroComponent } from './componentes/pensamentos/cadastro/cadastro.component';
import { PerfilComponent } from './componentes/pensamentos/perfil/perfil.component';
import { AutenticacaoInterceptor } from './componentes/pensamentos/autenticacao.interceptor';
import { HeaderComponent } from './componentes/pensamentos/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent,
    LoginComponent,
    FormularioComponent,
    CadastroComponent,
    PerfilComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AutenticacaoInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
