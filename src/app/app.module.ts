// app modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
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
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
