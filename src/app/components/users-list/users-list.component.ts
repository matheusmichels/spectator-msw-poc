import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users = [];

  constructor(private usersService: UsersService) {}

  fetchUsers() {
    this.usersService.get().subscribe(users => {
      this.users = users;
    });
  }
}
