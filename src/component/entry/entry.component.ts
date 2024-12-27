import {Component, inject} from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-entry',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {
  userservice:UserService=inject(UserService);

  formgroup:FormGroup=new FormGroup({
    "name": new FormControl('', Validators.required),
    "gender": new FormControl('', Validators.required),
    "city": new FormControl('', Validators.required)
  })


  add() {
    this.userservice.add(this.formgroup.value);
    this.formgroup.reset();
  }
}
