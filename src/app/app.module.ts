import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewComponent } from './view/view.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { AppService } from './shared/app.service';
import { NewCarComponent } from './new-car/new-car.component';
import { BuyComponent } from './buy/buy.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewuserchildComponent } from './viewuserchild/viewuserchild.component';
import { PostuserComponent } from './postuser/postuser.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewComponent,
    PostComponent,
    UpdatecarComponent,
    NewCarComponent,
    BuyComponent,
    LoginComponent,
    WelcomeUserComponent,
    ViewuserComponent,
    ViewuserchildComponent,
    PostuserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AppService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
