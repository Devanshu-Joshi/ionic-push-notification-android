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

    this._http.post<string>('http://192.168.12.243:3080/fcm/send-notification', notification, { responseType: "text" as 'json' })
      .subscribe({
        next: (data) => console.log("Success:", data),
        error: (error) => console.error("Error:", error), // Debugging
        complete: () => console.log("Request completed") // Optional
      });
  }

}
