import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KrishnaTravels';
  ngOnInit() {
    console.log("Width: "+screen.width+": Height: "+screen.height);
  }
}
