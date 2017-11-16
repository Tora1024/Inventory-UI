import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string;
  title = 'Inventory Dashboard';

  constructor(private router: Router ) {
    this.router.events.subscribe((res) => { 
      this.currentRoute = this.router.url;
    })
  }
}
