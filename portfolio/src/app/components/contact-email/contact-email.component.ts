import { ContactEmailService } from './../../services/contact-email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.css'],
})
export class ContactEmailComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: ContactEmailService
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: new FormControl(''),
      _subject: new FormControl(''),
      message: new FormControl(''),
    });
  }

  sendEmail(form: any) {
    console.log(form);
    this.emailService.sendEmail(form).subscribe({
      complete: () => {
        console.log(form, 'form dps de enviar');
        location.href = 'https://mailthis.to/confirm';
        console.log('FUNCIONOOUUUU');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
