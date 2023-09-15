import { Component, OnInit, Injectable } from "@angular/core";
import {
  CoreModule,
} from "@c8y/ngx-components";
import { UserApiService } from "ngx-c8y-openapi-library";
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
  user$;
  user;
  userId: string;
  usersString: string = "/users/";
  userString: string = "/user";
  constructor(public userService: UserApiService, private router: Router) {}

  async ngOnInit() {
    this.userId = this.getUserIdFromUrl(this.router.url);

    console.log("Hello user detail view");
    this.user$ = await this.getUserDetail(this.userId);
  }

  getUserDetail(userId) {
    return this.userService.getUserApiResource(userId);
  }

  getUserIdFromUrl(path) {
    return path.replace("/users/", "").replace("/user", "");
  }
}
