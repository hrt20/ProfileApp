import { Component } from '@angular/core';

@Component({
    selector: 'landing-page',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.css']
  })
export class landingPage{
  ngOnInit(){
    console.log("landing page Width: "+screen.width+": Height: "+screen.height);
    document.getElementById('homeScreen').style.height = screen.height.toString()+'px';
    document.getElementById('homeScreen').style.width = screen.width.toString()+'px';
    // document.getElementById('backgroundImage').style.height = screen.height.toString()+'px';
    // document.getElementById('backgroundImage').style.backgroundSize = screen.width+'px'+' '+screen.height.toString()+'px';
    //document.getElementById('backgroundImage').style.backgroundSize = '412px'+' '+screen.height.toString()+'px';

  }
}