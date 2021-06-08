import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Commande} from "../models/Commande";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiServerUrl = 'http://localhost:8091/Facture';
  constructor(private http: HttpClient) {}

  public getPDF(idCommande: number): Observable<Commande>
  {
    return this.http.get<Commande>(`${this.apiServerUrl}/afficherPDF/${idCommande}`);
  }
}
