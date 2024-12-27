import {Component, inject} from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  userservice:UserService=inject(UserService);
}
