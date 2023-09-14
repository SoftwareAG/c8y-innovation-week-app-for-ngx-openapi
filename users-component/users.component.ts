import { Component, OnInit, Injectable } from '@angular/core';
import { BreadcrumbService, CoreModule } from '@c8y/ngx-components';
import { UsersService } from 'ngx-c8y-openapi-library';
import { User } from 'ngx-c8y-openapi-library/api/models/user';
import { UserCollection } from 'ngx-c8y-openapi-library/api/models/user-collection';
import { Observable } from 'rxjs';

@Component({
  selector: 'c8y-users-component',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [CoreModule]
})
@Injectable()
export class UsersComponent implements OnInit {
 public users$: Observable<UserCollection>;
  constructor(public breadcrumbService: BreadcrumbService,
    public userService: UsersService) { }

  async ngOnInit() {
    console.log('Hello users');

    this.users$ = this.userService.getUserCollectionResource({
      tenantId: 't56293'
    });
  }
}
