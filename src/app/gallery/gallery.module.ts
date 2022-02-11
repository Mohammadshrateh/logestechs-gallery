import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {FlexModule} from "@angular/flex-layout";
import { GalleryComponent } from './components/gallery/gallery.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { GalleryPaginationComponent } from './components/gallery-pagination/gallery-pagination.component';
import { ImageComponent } from './components/image/image.component';


@NgModule({
  declarations: [
    GalleryFilterComponent,
    GalleryComponent,
    GalleryPaginationComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    SharedModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatBadgeModule,
    FlexModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class GalleryModule { }
