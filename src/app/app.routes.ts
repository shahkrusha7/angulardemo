import { Routes } from '@angular/router';
import {StudentComponent} from '../student/student.component';
import {EntryComponent} from '../component/entry/entry.component';
import {ViewComponent} from '../component/view/view.component';

export const routes: Routes = [
  {path:"student", component : StudentComponent},
  {path:"entry", component : EntryComponent},
  {path:"view", component : ViewComponent},
]
