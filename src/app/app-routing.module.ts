import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListusersComponent } from './listusers/listusers.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';
import { PostuserComponent } from './postuser/postuser.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { ViewComponent } from './view/view.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"welcome",canActivate:[AuthGuard],component:WelcomeComponent},
  {path:"welcomeuser",component:WelcomeUserComponent},
  {path:"listofusers",component:ListusersComponent},
  {path:"viewuser",component:ViewuserComponent},
  {path:"postuser",component:PostuserComponent},
  {path:"view",component:ViewComponent},
  {path:"post",component:PostComponent},
  {path:"updatecars/:id",component:UpdatecarComponent},
  {path:"buy/:id",component:BuyComponent},
  {path:"contact",component:ContactComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:'**',component:NotfoundComponent}
  
  

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
