import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {
  userdata:any={};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getdata(data: NgForm){
    console.warn(data);
    this.userdata=data;
  }
}
