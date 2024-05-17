import { Component } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'empresarial';

  constructor(private router:Router){
  }
  list (){
    this.router.navigate(["list"]);
  }
  add(){
    this.router.navigate(["add"]);
  }
} 
