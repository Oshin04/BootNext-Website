import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})


export class Page1Component implements OnInit {


  lastcounter:number=0;
  last:boolean=false;
  divWhat:boolean=true;
  divWhy:boolean=false;
  divHow:boolean=false;
  first:string="the-what-1.png";
  second:string="the-how-3.png";
  third:string="the-why-2.png";
  counter:number=0;
  overallincrement:number=0;
  overalldecrement:number=0;
  spinnerstate:boolean=false;
  showtechnology:boolean =false;


  @ViewChild('middle') middle!: ElementRef;
  @ViewChild('one') one!: ElementRef;
  @ViewChild('two') two!: ElementRef;
  @ViewChild('three') three!: ElementRef;
  @ViewChild('overall') overall!: ElementRef;
  @ViewChild('image1') image1!: ElementRef;
  @ViewChild('image2') image2!: ElementRef;
  @ViewChild('image3') image3!: ElementRef;
  @ViewChild('containerwhat') containerwhat!: ElementRef;
  @ViewChild('containerhow') containerhow!: ElementRef;
  @ViewChild('containerwhy') containerwhy!: ElementRef;
  @ViewChild('technology') technology!: ElementRef;
  @ViewChild('spinnerdiv') spinnerdiv!: ElementRef;
  @ViewChild('lastcontent') lastcontent!: ElementRef;
  @ViewChild('fourcards') fourcards!: ElementRef;
  @ViewChild('venturenames') venturenames!: ElementRef;

  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    this.testFunction();
  }

  constructor(
     private router:Router,
     private renderer: Renderer2,
     private route: ActivatedRoute,
     ) { }

  gotToPage(pageName:string){
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

    ngAfterViewInit(): void {}



          @HostListener('window:scroll', ['$event'])
            onScroll(e: any): void {
          }




        onFirstScroll(e: any){

            let firstscrollHeight = Math.max(this.containerwhat.nativeElement.scrollHeight);
            let firstoffsetHeight = Math.max(this.containerwhat.nativeElement.offsetHeight);
            let firstscrollTop = this.containerwhat.nativeElement.scrollTop;
            let firstdifference = firstscrollHeight - firstoffsetHeight;

            if(firstdifference > firstscrollTop){
              firstscrollTop = Math.ceil(firstscrollTop);
            }else{
              firstscrollTop = Math.floor(firstscrollTop);
            }

            if(firstscrollTop == firstdifference){
                this.spinnerstate = true;
                if(this.spinnerstate){
                  // this.onAny();
                  this.containerwhat.nativeElement.scrollTop = 0;
                }
            }
        }

        testfunction1(){
          console.log("onLeave")
        }

        testfunction2(){
          console.log("onEnter")
        }

        testfunction3(){
          console.log("onEnterBack")
        }

        testfunction4(){
          console.log("onLeaveBack")
        }

        testFunction(){

          let tl_master = gsap.timeline({
              scrollTrigger: {
                trigger: 'section#two',
                start: "top top",
                end:'100%',
                pin: '.video-wrap',
                scrub: true,
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
          tl_master3.to("#divHow", { duration: 5, onStart: () => {this.onAny(1)},onReverseComplete:() => {this.onAny(0)}});
          tl_master3.to("#divWhy", { duration: 1, onStart: () => {this.onAny(2)},onReverseComplete:() => {this.onAny(1)}});
          const fadeInElements = gsap.timeline({ paused: true })

          fadeInElements
          .to('h1', { duration: 1, autoAlpha: 1 }, 1)
          .to('p', { duration: 1, autoAlpha: 1 }, 3)
          .to('body', { duration: 1 }, 5)
          ;

          ScrollTrigger.create({
            trigger: 'section.three',
            pin: true,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
            animation: fadeInElements
          })
        }


        onAny(counternumber:Number){
          console.log("Working")
          this.counter++;
          this.overallincrement += 120;
          this.overalldecrement-=120;
          this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
          this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);

          if(counternumber == 1){

            this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_what.png`);
            this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_how.png`);
            this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_why.png`);
            this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_HOW.png`);

            this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(240deg)`);
            this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(240deg)`);
            this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(239deg)`);

            this.divWhat=false;
            this.divHow=true;
            this.divWhy=false;
            counternumber=0;

          }else if(counternumber == 2){

            this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_how.png`);
            this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_what.png`);
            this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/ATWhy_why.png`);
            this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_WHY.png`);

            this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(120deg)`);
            this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(120deg)`);
            this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(120deg)`);

            this.divWhat=false;
            this.divHow= false;
            this.divWhy=true;
            counternumber=0;
            this.containerwhat.nativeElement.classList.add('spin');
          }
          else{

            this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_what.png`);
            this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_how.png`);
            this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_why.png`);
            this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_WHAT.png`);

            this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(0deg)`);
            this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(360deg)`);
            this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(360deg)`);

            this.counter = 0;
            this.divWhat=true;
            this.divHow=false;
            this.divWhy=false;


          }
        }

        scrollback(counterNumberforReverse:Number){

          if(counterNumberforReverse == 1){

            this.counter = 0;
            this.overallincrement = 0;
            this.overalldecrement = 0;

            this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
            this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);

            this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_how.png`);
            this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_why.png`);
            this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtHow_what.png`);
            this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_HOW.png`);

            this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(0deg)`);
            this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(0deg)`);
            this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(0deg)`);

            this.divWhat=true;
            this.divHow=false;
            this.divWhy=false;
          }
          if(counterNumberforReverse == 0){

            this.counter = 0;
            this.overallincrement += 0;
            this.overalldecrement -= 0;

            this.renderer.setAttribute(this.overall.nativeElement, 'style', `transform: rotate(${this.overallincrement}deg)`);
            this.renderer.setAttribute(this.middle.nativeElement, 'style', `transform: rotate(${this.overalldecrement}deg)`);

            this.renderer.setAttribute(this.image2.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_what.png`);
            this.renderer.setAttribute(this.image1.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_how.png`);
            this.renderer.setAttribute(this.image3.nativeElement, 'src', `../../assets/Images/Spinner/AtWhat_why.png`);
            this.renderer.setAttribute(this.middle.nativeElement, 'src', `../../assets/Images/Spinner/Center_WHAT.png`);

            this.renderer.setAttribute(this.image1.nativeElement, 'style', `transform: rotate(0deg)`);
            this.renderer.setAttribute(this.image2.nativeElement, 'style', `transform: rotate(0deg)`);
            this.renderer.setAttribute(this.image3.nativeElement, 'style', `transform: rotate(0deg)`);

            this.divWhat=true;
            this.divHow=false;
            this.divWhy=false;
          }
        }
}
