import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:4000/invitados'; // Reemplaza con la URL correcta

  
  constructor(private http: HttpClient) { }

  saveRecord(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }

  getInvitados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
