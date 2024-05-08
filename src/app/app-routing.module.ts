import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { LoginComponent } from './componentes/pensamentos/login/login.component';
import { CadastroComponent } from './componentes/pensamentos/cadastro/cadastro.component';
import { PerfilComponent } from './componentes/pensamentos/perfil/perfil.component';
import { authGuard } from './componentes/guards/auth.guard';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'cadastro',component: CadastroComponent},
  {path:'perfil',component: PerfilComponent, canActivate:[authGuard]},
  {path:'criarPensamento',component:CriarPensamentoComponent },
  {path:'listarPensamento',component:ListarPensamentoComponent },
  {path:'pensamentos/excluirPensamento/:id',component:ExcluirPensamentoComponent },
  {path:'pensamentos/editarPensamento/:id',component:EditarPensamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
