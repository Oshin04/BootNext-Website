import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent{

  all:boolean=true;
  developers:boolean=false;
  desginers:boolean=false;
  operations:boolean=false;

  constructor(private router:Router) { }
  allFunction(){
      this.all=true;
      this.developers=false;
      this.desginers=false;
      this.operations=false;
  }

  developersFunction(){
    this.all=false;
    this.developers=true;
    this.desginers=false;
    this.operations=false;
  }

  desginersFunction(){
    this.all=false;
    this.developers=false;
    this.desginers=true;
    this.operations=false;
  }
  operationsFunction(){
    this.all=false;
    this.developers=false;
    this.desginers=false;
    this.operations=true;
}
gotToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}


}

