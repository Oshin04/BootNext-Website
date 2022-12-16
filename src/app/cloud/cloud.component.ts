import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent {

  constructor(private router:Router) { }
  gotToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  options: AnimationOptions = {
    path: '../../assets/lottie/cloud.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
