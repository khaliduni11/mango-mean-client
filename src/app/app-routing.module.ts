import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { VerifyComponent } from './components/verify/verify.component';
import { VerifiedComponent } from './components/verified/verified.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangeForgetPasswordComponent } from './components/change-forget-password/change-forget-password.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent},
  { path: "signin", component: SigninComponent},
  { path: "verify", component: VerifyComponent },
  { path: ":userId/:randomNumber/verify", component: VerifiedComponent},
  { path: "change_password", component: ChangePasswordComponent},
  { path: "forget_password", component: ForgetPasswordComponent},
  { path: ":userId/:randomNumbers/updatePassword", component: ChangeForgetPasswordComponent},
  { path: "posts", component: PostsComponent},
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
