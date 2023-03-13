import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactEmailService {
  private url = 'https://mailthis.to/gabriela.hermenegildo.development';

  constructor(private http: HttpClient) {}

  sendEmail(input: any) {
    console.log('clicou em send email');
    return this.http
      .post(this.url,input, {responseType: 'text'})
      .pipe(
        map((response) => {
          console.log(response, 'FUNCIONOU');
          return response;
        }),
        catchError((error: any) => {
          console.log(error, 'DEU ERROOO');
          return error;
        })
      );
  }
}
