import { Component } from '@angular/core';
import { DirectionService } from './services/direction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'sortech';
  direction: 'ltr' | 'rtl' = 'ltr';  // Define the direction property
  constructor(private directionService: DirectionService) { }

  toggleDirection() {
  
        this.directionService.setDirection(this.directionService.getDirection() === 'ltr' ? 'rtl' : 'ltr');
        this.direction = this.directionService.getDirection(); // Update the component's direction property
        document.body.dir = this.direction; // Update the body element's dir attribute
        document.documentElement.dir = this.direction; // Update the html element's dir attribute
      
  }
}
