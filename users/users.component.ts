import { Component, OnInit, Injectable } from "@angular/core";
import { RouterModule } from "@angular/router";
import {AppStateService, CoreModule} from "@c8y/ngx-components";
import { UsersService } from "c8y-ng-openapi-library";
import { Observable } from "rxjs";
import { User } from "c8y-ng-openapi-library/api/models/user";
import { map } from "rxjs/operators";

@Component({
  selector: "c8y-users-component",
  templateUrl: "./users.component.html",
  standalone: true,
  imports: [CoreModule, RouterModule],
})
@Injectable()
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;
  private tenantId: string;
  constructor(
      public stateService: AppStateService,
      public userService: UsersService
  ) {}
  async ngOnInit() {
    console.log("Hello users");
    this.tenantId = this.stateService.currentTenant.value.name;
    this.users$ = this.getUsers();
  }

  getUsers(): Observable<User[]> {
    return this.userService.getUserCollectionResource({ tenantId: this.tenantId }).pipe(map(users => users.users));
  }
}
