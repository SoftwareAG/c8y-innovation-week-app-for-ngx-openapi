import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hookNavigator, hookRoute, NavigatorNode, CoreModule } from '@c8y/ngx-components';
import { UserDetailComponent } from '../user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users/:id/user',
    component: UserDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CoreModule],
  exports: [],
  providers: [
    hookRoute({
      path: "users",
      loadComponent: () =>
        import("./users.component").then((m) => m.UsersComponent),
    }),
    hookNavigator(
      new NavigatorNode({
        path: "/users",
        label: "Users",
        icon: "users",
        priority: 80,
      })
    ),
  ],
})
export class UsersModule {}