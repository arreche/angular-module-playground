import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  componentActive = true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
