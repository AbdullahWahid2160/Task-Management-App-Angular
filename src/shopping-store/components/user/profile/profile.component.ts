import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/shopping-store/models/user.model';
// Import your auth service
import { AuthenticationService } from 'src/shopping-store/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {} // Inject your user service

  ngOnInit() {
    // Fetch user data from your service
    this.authService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data; // Assign the user data to the user object
      },
    });
  }
}
