import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Notification {
    _token: String = "";
    _title: String = "";
    _body: String = "";
}