import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  user$ = this.userService.retornarUser();

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login'])
  }

}
