import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private direction: 'ltr' | 'rtl' = 'ltr';

  getDirection(): 'ltr' | 'rtl' {
    return this.direction;
  }

  setDirection(direction: 'ltr' | 'rtl') {
    this.direction = direction;
  }

}