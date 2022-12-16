import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { AimlComponent } from './aiml/aiml.component';
import { BigdataComponent } from './bigdata/bigdata.component';
import { CloudComponent } from './cloud/cloud.component';
import { IotComponent } from './iot/iot.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FounderComponent } from './founder/founder.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Page1Component } from './page1/page1.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CareerComponent,
    AboutComponent,
    AimlComponent,
    BigdataComponent,
    CloudComponent,
    IotComponent,
    routingComponents,
    FooterComponent,
    NotfoundComponent,
    FounderComponent,
    Page1Component,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatDividerModule,
    MatExpansionModule,
    GoogleMapsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
