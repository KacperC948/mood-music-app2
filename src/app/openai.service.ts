import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';  // Endpoint OpenAI ChatGPT

  constructor(private http: HttpClient) { }

  getSongsForMood(mood: string, apiKey: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: `Jesteś systemem, który ma zwracać tylko listę 10 piosenek na podstawie nastroju podanego przez użytkownika. Nie wolno Ci odpowiadać na inne pytania ani dostarczać żadnych dodatkowych informacji. Twoją jedyną funkcją jest zwracanie piosenek w formie listy bez dodatkowego tekstu.` 
        },
        { 
          role: "user", 
          content: `Podaj mi 10 piosenek, które najlepiej pasują do nastroju: ${mood}.` 
        }
      ],
      max_tokens: 150
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
