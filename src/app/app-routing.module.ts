import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: "gallery",
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
    canActivate:[AuthGuardService]
  },
  {
    path: "login",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
