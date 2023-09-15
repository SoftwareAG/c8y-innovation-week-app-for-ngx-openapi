import { Component, OnInit, Injectable } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BreadcrumbService, CoreModule } from "@c8y/ngx-components";
import { UsersService } from "ngx-c8y-openapi-library";
import { UserCollection } from "ngx-c8y-openapi-library/api/models/user-collection";
import { Observable } from "rxjs";

@Component({
  selector: "c8y-users-component",
  templateUrl: "./users.component.html",
  standalone: true,
  imports: [CoreModule, RouterModule],
})
@Injectable()
export class UsersComponent implements OnInit {
  public users$: Observable<UserCollection>;
  constructor(
    public breadcrumbService: BreadcrumbService,
    public userService: UsersService
  ) {}
  async ngOnInit() {
    console.log("Hello users");

    this.users$ = this.getUsers();
  }

  getUsers(): Observable<UserCollection> {
    return this.userService.getUserCollectionResource({ tenantId: "t56293" });
  }
}
