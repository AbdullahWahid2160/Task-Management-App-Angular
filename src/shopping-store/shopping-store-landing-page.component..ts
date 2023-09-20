import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './shopping-store-landing-page.component.html',
})
export class StoreLandingpageComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/shopping-store/login']);
  }
}
