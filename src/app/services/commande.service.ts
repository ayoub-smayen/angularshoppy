import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commande} from "../models/Commande";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiServerUrl = 'http://localhost:8091/Commande';
  constructor(private http: HttpClient) {}

  public getAllCommande(): Observable<Commande[]>{
    return this.http.get<Commande[]>(`${this.apiServerUrl}/afficher`);
  }
  public getCommandeBystatusEncours(idClient: number): Observable<Commande>{
    return this.http.get<Commande>(`${this.apiServerUrl}/rechercheparclientencours/${idClient}`);
  }
  public EnligneState(idCommande: number): Observable<Commande> {
    return this.http.put<Commande>(` ${this.apiServerUrl}/statusEnligne/${idCommande}` , idCommande);
  }
  public deliveryState(idCommande: number): Observable<Commande> {
    return this.http.put<Commande>(` ${this.apiServerUrl}/statusDelivery/${idCommande}` , idCommande);
  }
  public PayerEnLigne(idCommande: number, idClient: number): Observable<Commande> {
    return this.http.put<Commande>(` ${this.apiServerUrl}/payerenligne/${idCommande}/${idClient}` , idCommande);
  }
}
