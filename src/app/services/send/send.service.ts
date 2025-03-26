import { Injectable } from '@angular/core';
import { Notification } from 'src/app/models/Notification';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendService {
  constructor(private _http: HttpClient) { }

  sendOrder(notification: Notification) {
    console.log("Sending notification:", notification); // Debugging

    this._http.post<string>(
      `http://192.168.155.48:8080/api/notifications/send?token=${notification._token}&title=${notification._title}&message=${notification._body}`,
      {},
      { responseType: 'json' as const }
    )
      .subscribe({
        next: (data) => console.log("Success:", data),
        error: (error) => console.error("Error:", error), // Debugging
        complete: () => console.log("Request completed") // Optional
      });
  }
}