import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SendService } from '../services/send/send.service';
import { StorageService } from '../services/storage/storage.service';
import { Notification } from '../models/Notification';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {

  _sendService: SendService = inject(SendService);
  _storageService: StorageService = inject(StorageService);
  _notificationObject = new Notification();

  _token: String = "";
  _title: String = "";
  _body: String = "Ordering";

  constructor() { }

  orderText: string = ''; // This will store the input value

  clearInput() {
    console.log(this.orderText);

    this._title = this.orderText;

    this._storageService.getToken().subscribe(token => {
      console.log("Token from method : ", token);

      this._token = token; // Ensure token is set first

      // Ensure notification object is properly structured
      this._notificationObject = {
        _token: this._token,
        _title: this._title,
        _body: this._body
      };

      console.log("Sending notification:", this._notificationObject); // Debugging

      this._sendService.sendOrder(this._notificationObject);

      this.orderText = ''; // Clears the input field
    });
  }
}
