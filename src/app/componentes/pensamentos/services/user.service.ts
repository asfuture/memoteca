import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../pensamento';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null)

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
   }

   decodificarJWT(){
  const token = this.tokenService.retornarToken();
  const user = jwt_decode(token) as PessoaUsuaria;
  this.userSubject.next(user);
   }
   retornarUser(){
    return this.userSubject.asObservable();
   }

   salvarToken(token:string){
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
   }
   logout(){
    this.tokenService.excluirToken();
   }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
