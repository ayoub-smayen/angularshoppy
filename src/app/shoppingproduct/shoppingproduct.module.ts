import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingproductRoutingModule } from './shoppingproduct-routing.module';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PollsmallComponent } from './pollsmall/pollsmall.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OpollComponent } from './opoll/opoll.component';
import { CompareproductComponent } from './compareproduct/compareproduct.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { QuantityControlComponent } from './quantity-control/quantity-control.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { CartBaseComponent } from './cart-base/cart-base.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartService } from '../services/cart.service';
import { ChatshopComponent } from './chatshop/chatshop.component';
import { PublicationComponent } from './publication/publication.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [LoginComponent, CartComponent, WishlistComponent, BlogComponent, BlogSingleComponent, CheckoutComponent, ContactUsComponent, IndexComponent, ProductDetailsComponent, ShopComponent, NotFoundComponent, NavBarComponent, FooterComponent, HomepageComponent, MusicpageComponent, EditprofileComponent, MyprofileComponent, PollsmallComponent, WelcomeComponent, OpollComponent, CompareproductComponent,
    
    
   AccountpageComponent, CatalogpageComponent, QuantityControlComponent, TopbarComponent, CartPopupComponent, CartBaseComponent, CartPageComponent, ChatshopComponent, PublicationComponent
  
  ],
  imports: [
    CommonModule,
    ShoppingproductRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxAudioPlayerModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgxDatatableModule,
    FlashMessagesModule.forRoot(),
    MomentModule
  ],
  providers: [CartService]
})
export class ShoppingproductModule { }
