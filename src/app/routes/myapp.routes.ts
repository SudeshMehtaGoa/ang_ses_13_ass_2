/* Router file */
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from 'app/component/student-component/student.component';
import { StudentListComponent } from "app/component/student-list/student-list.component";
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';
import { StudentDetailComponent } from 'app/component/student-detail/student-detail.component';
import { LoginComponent } from 'app/component/login/login.component';
import { AuthGuardComponent } from 'app/routes/auth-guard';

import {PleaseLoginComponent } from 'app/component/please-login/please-login.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pleaseLogin', component: PleaseLoginComponent },
  { path: 'student', component: StudentComponent , canActivate: [AuthGuardComponent]},
  { path: 'studentList', component: StudentListComponent , canActivate: [AuthGuardComponent]},
  { path: 'studentDetail/:studentName', component: StudentDetailComponent , canActivate: [AuthGuardComponent]},
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);