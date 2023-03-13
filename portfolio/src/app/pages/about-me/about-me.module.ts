import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule
  ],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
