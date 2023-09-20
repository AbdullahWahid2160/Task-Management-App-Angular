import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(modulePath: string) {
    this.router.navigate([modulePath]);
  }
}
