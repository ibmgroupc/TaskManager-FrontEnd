import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from'./task-form/task-form.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
const appRoutes: Routes= [
  {path:'create',component: TaskFormComponent},
  { path: 'view', component: ViewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update/:name', component: UpdateComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    TaskFormComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    {enableTracing:true}),
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
