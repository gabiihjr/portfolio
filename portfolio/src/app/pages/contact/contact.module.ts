import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactEmailComponent } from 'src/app/components/contact-email/contact-email.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    ContactComponent,
    ContactEmailComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
