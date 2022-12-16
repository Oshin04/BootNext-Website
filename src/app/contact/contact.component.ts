import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
