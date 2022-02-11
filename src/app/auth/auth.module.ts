import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    ExtendedModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AuthModule { }
