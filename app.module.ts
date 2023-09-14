import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import { UsersComponent } from './users-component/users.component';
import { UsersModule } from './users-component/users.module';
import { ApiModule } from 'ngx-c8y-openapi-library';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    UsersModule,
    ApiModule.forRoot({ rootUrl: 'http://localhost:9000' }),
  ],
  declarations: [],
  bootstrap: [BootstrapComponent],

})
export class AppModule {}
