import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/invitados'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) { }

  saveRecord(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }

  
}
