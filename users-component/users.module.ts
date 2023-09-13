import { NgModule } from '@angular/core';
import { UsersComponent } from "./users.component";
import { hookNavigator, hookRoute, NavigatorNode } from '@c8y/ngx-components';

@NgModule({
  imports: [],
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