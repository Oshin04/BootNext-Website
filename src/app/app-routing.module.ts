import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AimlComponent } from './aiml/aiml.component';
import { BigdataComponent } from './bigdata/bigdata.component';
import { CareerComponent } from './career/career.component';
import { CloudComponent } from './cloud/cloud.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FounderComponent } from './founder/founder.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from './iot/iot.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
      {path :'',component:HomeComponent},
      {path :'home',component:HomeComponent},
      {path:'contact', component:ContactComponent},
      {path :'career',component:CareerComponent},
      {path :'about',component:AboutComponent},
      {path :'aiml',component:AimlComponent},
      {path : 'bigdata', component:BigdataComponent},
      {path :'iot',component:IotComponent,},
      {path :'cloud',component:CloudComponent},
      {path :'footer',component:FooterComponent},
      {path :'notfound',component:NotfoundComponent},
      {path :'founder',component:FounderComponent},
      {path :'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', // Add options right here
  })
],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents= [
  Page1Component,
  AboutComponent,
  AimlComponent,
  BigdataComponent,
  IotComponent,
  CloudComponent,
  ContactComponent,
  CareerComponent,
  HomeComponent,
  AboutComponent,
  AimlComponent,
  FooterComponent,
  NotfoundComponent,
  FounderComponent

 ]
