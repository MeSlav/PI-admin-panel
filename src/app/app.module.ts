// app modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

// app components
import { AppComponent } from './app.component';
import { UserAppLayoutComponent } from './modules/user-app/components/user-app-layout/user-app-layout.component';
import { HomeComponent } from './modules/user-app/components/home/home.component';
import { EmployeesComponent } from './modules/user-app/components/employees/employees.component';
import { EquipmentComponent } from './modules/user-app/components/equipment/equipment.component';
import { ServicesComponent } from './modules/user-app/components/services/services.component';
import { ProjectsComponent } from './modules/user-app/components/projects/projects.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { AuthLayoutComponent } from './modules/auth/components/auth-layout/auth-layout.component';
import { TokenInterceptor } from './modules/auth/interceptors/token.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { JobsComponent } from './modules/user-app/components/jobs/jobs.component';
import { ApplicationsComponent } from './modules/user-app/components/applications/applications.component';
import { EmployeeDetailsComponent } from './modules/user-app/components/employee-details/employee-details.component';
import { AddEmployeeModalComponent } from './modules/user-app/components/add-employee-modal/add-employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAppLayoutComponent,
    HomeComponent,
    EmployeesComponent,
    EquipmentComponent,
    ServicesComponent,
    ProjectsComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    JobsComponent,
    ApplicationsComponent,
    EmployeeDetailsComponent,
    AddEmployeeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // angular material
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
