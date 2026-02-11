import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = "http://localhost:8080/item"
  private http = inject(HttpClient);

  constructor(){}

  saveItem(itemData: any): Observable<ItemService>{
    return this.http.post<ItemService>(this.url, itemData)
  }

  getItems(): Observable<any> {
    return this.http.get(`${this.url}/get-all`)
  }
}
