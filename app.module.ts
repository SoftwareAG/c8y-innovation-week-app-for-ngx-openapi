import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import { UsersModule } from './users/users.module';
import { ApiModule } from 'c8y-ng-openapi-library';
import { UserDetailModule } from './user-detail/user-detail.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    UsersModule,
    UserDetailModule,
    ApiModule.forRoot({ rootUrl: 'http://localhost:9000' }),
  ],
  declarations: [],
  bootstrap: [BootstrapComponent],

})
export class AppModule {}
