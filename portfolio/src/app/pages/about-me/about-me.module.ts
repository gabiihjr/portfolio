import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
