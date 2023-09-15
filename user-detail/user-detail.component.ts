import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { AppStateService, CoreModule } from "@c8y/ngx-components";
import { UsersService } from "c8y-ng-openapi-library";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { User } from "c8y-ng-openapi-library/api/models/user";
import { takeUntil } from "rxjs/operators";
import {Subject} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "c8y-user-detail",
  templateUrl: "./user-detail.component.html",
  standalone: true,
  imports: [CoreModule],
})
@Injectable()
export class UserDetailComponent implements OnInit, OnDestroy {
  public tenantId: string;
  user: User;
  userId: string;

  form = new FormGroup({
    id: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    lastName:new FormControl(''),
  })

  destroyed$ = new Subject()
  constructor(
      public userService: UsersService,
      private route: ActivatedRoute,
      private router: Router,
      public stateService: AppStateService
  ) {}

  async ngOnInit() {
    this.tenantId = this.stateService.currentTenant.value.name

    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe((params: ParamMap) => {
      this.userId = params.get('id');
    });

    this.user =  await this.userService.getUserResource({ userId: this.userId, tenantId: this.tenantId}).toPromise();
    this.form.patchValue(this.user)
    this.form.get('id').disable()
  }

  ngOnDestroy() {
    this.destroyed$.next(true)
  }

  updateUser() {
    this.userService.putUserResource({
      userId: this.user.id,
      tenantId: this.tenantId,
      body: this.form.value
    }).subscribe(updatedUser => {
      this.user = updatedUser;
      this.router.navigate(['/', 'users'])
    });
  }
}
