import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LigneCommande} from "../models/Lignecommande";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LignecommandeService {
  private apiServerUrl = 'http://localhost:8091/Panier';
  constructor(private http: HttpClient) {}

  public allpanier(): Observable<LigneCommande[]>{
    return this.http.get<LigneCommande[]>(`${this.apiServerUrl}/all`);
  }

  public panierParIdclient(idUser: number): Observable<LigneCommande[]>{
    return this.http.get<LigneCommande[]>(`${this.apiServerUrl}/panier/${idUser}`);
  }

  public deleteLigneCommande(idLigne: number): Observable<void> {
    return this.http.delete<void>(` ${this.apiServerUrl}/DeleteLigne/${idLigne}`);
  }

  public addLigneCommande(idprod: number, iduser: number , ligneCommande: number): Observable<LigneCommande> {
    return this.http.post<LigneCommande>(`${this.apiServerUrl}/ajouter/${iduser}/${idprod}`, ligneCommande);
  }
  public updateLigneCommande(ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.http.put<LigneCommande>(` ${this.apiServerUrl}/update2` , ligneCommande);
  }

  public updateLigne(idLigne: number, qty: number): Observable<LigneCommande> {
    return this.http.put<LigneCommande>(` ${this.apiServerUrl}/update/${idLigne}/${qty}` , qty);
  }

}
