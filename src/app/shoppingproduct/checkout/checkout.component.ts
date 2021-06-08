import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user";
import {Commande} from "../../models/Commande";
import {LigneCommande} from "../../models/LigneCommande";
import {LignecommandeService} from "../../services/ligne-commande.service";
import {ActivatedRoute} from "@angular/router";
import {CommandeService} from "../../services/commande.service";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {render} from 'creditcardpayments/creditCardPayments';
import {FactureService} from "../../services/facture.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  user: User;
  iduser: number;
  listCommande: LigneCommande[];
  commande: Commande;
  Username: string;
  Useremail: string;
  codePostale: number = 1122;
  i: number;
  paidFor: boolean = false;
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;
  constructor( private ligneCommandeService: LignecommandeService , private route: ActivatedRoute, private commandeservice: CommandeService , private authservice: AuthService , private servicefact: FactureService) { }

  ngOnInit(): void {
    this.authservice.getCuurentUser().subscribe(res=>{
      this.user=res;
      this.iduser = this.user.id;
      this.Username = this.user.username;
      this.Useremail = this.user.email;
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

  public quantityplus(lc: LigneCommande){
    lc.quantity++;
    this.UpdatelistCommande(lc.id, lc.quantity);
  }
  public quantitymoins(lc: LigneCommande){

    if (lc.quantity > 1)
      lc.quantity--;
    this.UpdatelistCommande(lc.id, lc.quantity);
  }


  public UpdateCommandeStatusEnLigne(): void {
    this.commandeservice.EnligneState(this.commande.id).subscribe(
      (response: Commande) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public UpdateCommandeStatusDelivery(): void {
    this.commandeservice.deliveryState(this.commande.id).subscribe(
      (response: Commande) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public paypalfunction(){
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: this.commande.montant,
                        }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  public getpdf(): void {
    this.commandeservice.getCommandeBystatusEncours(this.commande.id).subscribe(
      (response: Commande) => {
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
