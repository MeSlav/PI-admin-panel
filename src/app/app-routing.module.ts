import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { LoginGuard } from './modules/auth/guards/login.guard';
import { EmployeesComponent } from './modules/user-app/components/employees/employees.component';
import { EquipmentComponent } from './modules/user-app/components/equipment/equipment.component';
import { HomeComponent } from './modules/user-app/components/home/home.component';
import { ProjectsComponent } from './modules/user-app/components/projects/projects.component';
import { ServicesComponent } from './modules/user-app/components/services/services.component';
import { UserAppLayoutComponent } from './modules/user-app/components/user-app-layout/user-app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [ LoginGuard ],

    children : [
      {
        path: '',
        component: LoginComponent,
      }
    ]
  },
  {
    path: 'app',
    component: UserAppLayoutComponent,
    canActivate: [ AuthGuard ],

    children: [
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/app/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
