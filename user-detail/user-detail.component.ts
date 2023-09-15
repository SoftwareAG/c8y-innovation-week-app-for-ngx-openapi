import { Component, OnInit, Injectable } from "@angular/core";
import {
  CoreModule,
} from "@c8y/ngx-components";
import { UsersService } from "c8y-ng-openapi-library";
import { Router } from "@angular/router";

@Component({
  selector: "c8y-user-detail",
  templateUrl: "./user-detail.component.html",
  standalone: true,
  imports: [CoreModule],
})
@Injectable()
export class UserDetailComponent implements OnInit {
  public href: string = "";
  user;
  userId: string;
  usersString: string = "/users/";
  userString: string = "/user";
  constructor(public userService: UsersService, private router: Router) {}

  async ngOnInit() {
    this.userId = this.getUserIdFromUrl(this.router.url);

    console.log("Hello user detail view");
    this.user = await this.getUserDetail(this.userId).toPromise();
  }

  getUserDetail(userId:string) {
    return this.userService.getUserResource({
      userId: userId,
      tenantId: "t56293"
    });
  }

  getUserIdFromUrl(path) {
    return path.replace("/users/", "").replace("/user", "");
  }
}
