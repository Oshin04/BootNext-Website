import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  x: Number = 0;
  divWhat: boolean = true;
  divWhy: boolean = false;
  divHow: boolean = false;
  first: string = "the-what-1.png";
  second: string = "the-how-3.png";
  third: string = "the-why-2.png";
  counter: number = 0;
  overallincrement: number = 0;
  overalldecrement: number = 0;

  @ViewChild('middle') middle!: ElementRef;
  @ViewChild('one') one!: ElementRef;
  @ViewChild('two') two!: ElementRef;
  @ViewChild('three') three!: ElementRef;
  @ViewChild('overall') overall!: ElementRef;
  @ViewChild('image1') image1!: ElementRef;
  @ViewChild('image2') image2!: ElementRef;
  @ViewChild('image3') image3!: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private route: ActivatedRoute,
  ) { }

  gotToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
  options: AnimationOptions = {
    path: '../../assets/lottie/AIML.json',
  };
  options1: AnimationOptions = {
    path: '../../assets/lottie/bigdata.json',
  };
  options2: AnimationOptions = {
    path: '../../assets/lottie/iot.json',
  };
  options3: AnimationOptions = {
    path: '../../assets/lottie/cloud.json',
  };

  onAnimate(animationItem: AnimationItem): void {
  }



  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.spinFunction();
  }

  spinFunction() {

    let tl_master = gsap.timeline({
      scrollTrigger: {
        trigger: 'section#two',
        start: "top top",
        pin: '.video-wrap',
        scrub: true,
        end: '+=2250',

      }
    });

    let tl_master2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#divWhat',
        scrub: true,
      }
    });

    let tl_master3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#divHow',
        scrub: true,

      }
    });

    tl_master2.to("#divWhat", { duration: 5 });
    tl_master3.to("#divHow", { duration: 5, onStart: () => { this.onAny(1) }, onReverseComplete: () => { this.onAny(0) } });
    tl_master3.to("#divWhy", {
      duration: 1, onStart: () => { this.onAny(2) }, onReverseComplete: () => { this.onAny(1) },

    });

    tl_master.from('section#two', {

      onComplete: () => {
        //  if(tl_master.scrollTrigger) tl_master.scrollTrigger.kill(true)
      }
    })

  }


  onAny(counternumber: Number) {
    this.counter++;
    if (counternumber == 1) {

      if (this.x == 2) {
        this.overallincrement -= 120;
        this.overalldecrement += 120;
        this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
        this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);
        this.x = 0;
      }
      else {
        this.overallincrement += 120;
        this.overalldecrement -= 120;
        this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
        this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);
      }

      this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_what.png`);
      this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_how.png`);
      this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_why.png`);
      this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_HOW.png`);

      this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(240deg)`);
      this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(240deg)`);
      this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(239deg)`);


    } else if (counternumber == 2) {

      this.overallincrement += 120;
      this.overalldecrement -= 120;
      this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
      this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);

      this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_how.png`);
      this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_what.png`);
      this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_why.png`);
      this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_WHY.png`);

      this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(120deg)`);
      this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(120deg)`);
      this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(120deg)`);
      this.x = 2;

    }
    else {

      this.overallincrement -= 120;
      this.overalldecrement += 120;
      this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
      this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);

      this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_what.png`);
      this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_how.png`);
      this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_why.png`);
      this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_WHAT.png`);

      this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(0deg)`);
      this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(360deg)`);
      this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(360deg)`);

    }
  }
}
