import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class SiteHeaderComponent implements OnInit {

  showSignOutMenu = signal<boolean>(false)
  user = signal<IUser | null>(null)
  private userService = inject(UserService)

  constructor() { }

  ngOnInit(): void {
      this.userService.getUser().subscribe({
        next: (user) => { this.user.set(user)}
      })
  }

  toggleSignOutMenu() {
    this.showSignOutMenu.update((prev) => !prev)
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu.set(false)
  }
 
}
