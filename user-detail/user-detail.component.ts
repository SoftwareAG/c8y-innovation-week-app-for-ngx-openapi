import { Component, OnInit, Injectable } from "@angular/core";
import { CoreModule } from "@c8y/ngx-components";
import { UsersService } from "c8y-ng-openapi-library";
import { Router } from "@angular/router";
import { User } from "c8y-ng-openapi-library/api/models/user";

@Component({
  selector: "c8y-user-detail",
  templateUrl: "./user-detail.component.html",
  standalone: true,
  imports: [CoreModule],
})
@Injectable()
export class UserDetailComponent implements OnInit {
  public href: string = "";
  user: User;
  userId: string;
  usersString: string = "/users/";
  userString: string = "/user";
  phoneNumber: number;
  constructor(public userService: UsersService, private router: Router) {}

  async ngOnInit() {
    this.userId = this.getUserIdFromUrl(this.router.url);

    console.log("Hello user detail view");
    this.user = await this.getUserDetail(this.userId).toPromise();
  }

  getUserDetail(userId: string) {
    return this.userService.getUserResource({
      userId: userId,
      tenantId: "t56293",
    });
  }

  getUserIdFromUrl(path) {
    return path.replace("/users/", "").replace("/user", "");
  }

  updateUser() {
    this.userService.putUserResource({
      userId: this.user.id,
      tenantId: "t56293",
      body: {email: this.user.email}
    }).subscribe(updatedUser => {
      this.user = updatedUser;
    });
  }
}
