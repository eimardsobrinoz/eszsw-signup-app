import { Component, OnInit } from '@angular/core';
import { User } from 'projects/eszsw-signup-app/src/app/core/interfaces/user-interface';
import { AccountService } from 'projects/eszsw-signup-app/src/app/core/services/account-service/account.service';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'eszsw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User | null;
  constructor(private accountService:AccountService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.accountService.getActiveUser as User;
  }

  public logout(): void {
    this.authService.logout();
  }
}
