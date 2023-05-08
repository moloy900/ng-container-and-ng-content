import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IphoneComponent } from './products/iphone/iphone.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';

const routes: Routes = [
  {path:'',redirectTo:'login' , pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component:ProductsComponent, children:[
    {path:'laptop', component:LaptopComponent},
    {path:'tv', component:TvComponent},
    {path:'iphone', component:IphoneComponent},
    {path:'washing-machine', component:WashingMachineComponent}
  ]},
  {path:'parent', component:ParentComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
