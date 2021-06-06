import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog/blog.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './cart/cart.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OpollComponent } from './opoll/opoll.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  
  {
    path :  'home', component : IndexComponent ,
    children:[
       

      {
        path :  '', component : HomepageComponent ,     
      },

      {
        path :  'account', component : AccountpageComponent ,     
      },
      {
        path :  'catalog', component : CatalogpageComponent ,     
      },
      {
        path :  'music', component : MusicpageComponent ,     
      },

    
      {
        path :  'editprofile', component : EditprofileComponent ,     
      },

        {
          path :  'login', component : LoginComponent ,     
        },


        {
          path :  'cart', component : CartComponent ,
        },

        {
          path :  'checkout', component : CheckoutComponent ,
        },
        {
          path :  'product-details', component : ProductDetailsComponent ,     
        },


        {
          path :  'blog-single', component : BlogSingleComponent ,
        },

        {
          path :  'blog', component : BlogComponent ,
        },
        {
          path :  'contact-us', component : ContactUsComponent ,     
        },

        {
          path:'cart0',
          component:CartPageComponent
      },

        {
          path :  'myprofile', component : MyprofileComponent ,
        },

        {
          path :  'wishlist', component : WishlistComponent ,
        },
        {
          path : 'productdet/:id' , component :  ProductDetailsComponent
        },
  { path: 'welcome', component: WelcomeComponent },
 
  { path: 'poll/:id', component: OpollComponent },

       
    ]


     

      
  },


  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path :  '**', component : NotFoundComponent ,
  }


   
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingproductRoutingModule { }
