import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-aiml',
  templateUrl: './aiml.component.html',
  styleUrls: ['./aiml.component.scss']
})
export class AimlComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  options: AnimationOptions = {
    path: '../../assets/lottie/AIML.json',
  };
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
