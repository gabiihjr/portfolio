import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactModule } from '../contact/contact.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { ProjectsModule } from '../projects/projects.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ContactModule,
    AboutMeModule,
    ProjectsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
