import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {LigneCommande} from "../../models/LigneCommande";
import {Commande} from "../../models/Commande";
import {LignecommandeService} from "../../services/ligne-commande.service";
import {ActivatedRoute} from "@angular/router";
import {CommandeService} from "../../services/commande.service";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  user: User;
  iduser: number;
  listCommande: LigneCommande[];
  commande: Commande;
  i: number;
  constructor( private ligneCommandeService: LignecommandeService , private route: ActivatedRoute, private commandeservice: CommandeService , private authservice: AuthService ) { }

  ngOnInit(): void {
    this.authservice.getCuurentUser().subscribe(res=>{
      this.user=res;
      this.iduser = this.user.id;
      this.getCommandeEnCoursbyiduser(this.iduser);
      this.getlistCommandebyiduser(this.iduser);
    });
  }
  public getCommandeEnCoursbyiduser(iduser: number): void {
    this.commandeservice.getCommandeBystatusEncours(iduser).subscribe(
      (response: Commande) => {
        this.commande = response;
        console.log(this.commande);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //get list des commande
  public getlistCommandebyiduser(iduser: number): void {
    this.ligneCommandeService.panierParIdclient(iduser).subscribe(
      (response: LigneCommande[]) => {
        this.listCommande = response;
        console.log(this.listCommande);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public UpdatelistCommande(id: number, qty: number): void {
    this.ligneCommandeService.updateLigne(id, qty).subscribe(
      (response: LigneCommande) => {
        console.log(response);
        this.getlistCommandebyiduser(this.iduser);
        this.getCommandeEnCoursbyiduser(this.iduser);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //delete list des commandes
  public deletelistCommande(idLigne: number): void {
    this.ligneCommandeService.deleteLigneCommande(idLigne).subscribe(
      (response: void) => {
        console.log(response);
        this.getlistCommandebyiduser(this.iduser);
        this.getCommandeEnCoursbyiduser(this.iduser);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //*****************************************************************************
  public quantityplus(lc: LigneCommande){
    lc.quantity++;
    this.UpdatelistCommande(lc.id, lc.quantity);
  }
  public quantitymoins(lc: LigneCommande){

    if (lc.quantity > 1)
      lc.quantity--;
    this.UpdatelistCommande(lc.id, lc.quantity);
  }

}
