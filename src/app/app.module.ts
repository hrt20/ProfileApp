import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {landingPage} from './components/homeComponent/landingPageComp/landingPage.component'
import { sidePage } from './components/homeComponent/sidePageComp/sidePage.component'
import {MatIconModule} from '@angular/material/icon'
import { NgxSocialButtonModule, SocialServiceConfig} from "ngx-social-button";
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { LinkedIn } from '@material-ui/icons';

@NgModule({
  declarations: [
    AppComponent,
    landingPage,
    sidePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ShareIconsModule,
    ShareButtonsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
