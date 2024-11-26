import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SignInComponent {
  credentials = signal<IUserCredentials>({ email: '', password: ''})
  signInError = signal<boolean>(false)
  private userService = inject(UserService)
  private router = inject(Router)

  constructor() { }

  signIn() {
    this.signInError.set(false)
    this.userService.signIn(this.credentials()).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => this.signInError.set(true)
    })
  }
}
