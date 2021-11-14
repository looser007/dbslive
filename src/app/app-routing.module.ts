import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  { 
    path: 'users',
    loadChildren:() => import('./users/users.module').then((m)=>m.UsersModule),
  },
  { 
    path:'dashboard', 
    loadChildren:()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
  },
  { 
    path:'edu',
    loadChildren:()=> import('./edu/edu.module').then((m)=>m.EduModule),
  },
  { 
    path:'exp',
    loadChildren:()=> import('./exp/exp.module').then((m)=>m.ExpModule),
  },
  /*{ 
    path:'posts',
    loadChildren:()=> import('./posts/posts.module').then((m)=>m.PostsModule),
  },*/
  {
    path:'profiles',
    loadChildren:()=> import('./profiles/profiles.module').then((m)=>m.ProfilesModule),
  },
  {
    path:'**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
