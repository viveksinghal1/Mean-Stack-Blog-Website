import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { WildCardComponent } from './wild-card/wild-card.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/articles', pathMatch: 'full'
  },
  {
    path: 'articles', component: HomePageComponent
  },
  {
    path: 'articles/new',
    component: BlogEditorComponent,
    canActivate: [AuthUserGuard]
  },
  {
    path: 'articles/:slug',
     component: ShowArticleComponent,
     canActivate: [AuthUserGuard]
  },
  {
    path: 'login', component: LoginUserComponent
  },
  {
    path: 'register', component: RegisterUserComponent
  },
  {
    path: '**', component: WildCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlogEditorComponent, ShowArticleComponent, HomePageComponent,
   LoginUserComponent, RegisterUserComponent, WildCardComponent]