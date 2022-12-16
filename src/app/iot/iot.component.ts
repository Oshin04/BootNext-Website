import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  panelOpenState1 = false;
  panelOpenState2 = false;

  gotToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  options: AnimationOptions = {
    path: '../../assets/lottie/iot.json',
  };

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
