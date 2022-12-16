import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.scss']
})
export class BigdataComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  options: AnimationOptions = {
    path: '../../assets/lottie/bigdata.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
