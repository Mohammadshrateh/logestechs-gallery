import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryFilterComponent} from "./components/gallery-filter/gallery-filter.component";
import {GalleryComponent} from "./components/gallery/gallery.component";

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
