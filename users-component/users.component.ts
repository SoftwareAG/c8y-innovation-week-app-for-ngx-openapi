import { Component, OnInit, Injectable } from '@angular/core';
import { BreadcrumbService, CoreModule } from '@c8y/ngx-components';

@Component({
  selector: 'c8y-users-component',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [CoreModule]
})
@Injectable()
export class UsersComponent implements OnInit {
 
  constructor(public breadcrumbService: BreadcrumbService) { }
  ngOnInit() {
    console.log('Hello users');
  }

}
