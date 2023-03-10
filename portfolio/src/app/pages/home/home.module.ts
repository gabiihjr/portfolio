import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
