import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/shopping-store/services/auth.service';
import { User } from 'src/shopping-store/models/user.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  user: User | undefined;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  async ngOnInit() {
    // Fetch user data from your service
    await this.authService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
        console.log('Ye kb hua');
        console.log('isAdmin before setting : ', this.isAdmin);
        if (data.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        } // Assign the user data to the user object
        console.log('isAdmin after setting : ', this.isAdmin);
      },
    });

    
  }
}
