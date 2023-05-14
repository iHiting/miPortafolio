import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationHomeService {

  constructor(private router: Router) { }

  vueltaHome(elementId: string) {
    this.router.navigate(['']).then(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      } else {
        console.log('Error');
      }
    });
  }
}
