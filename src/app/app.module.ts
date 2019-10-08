import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BindingComponent } from './binding/binding.component';
import { TableauComponentComponent  } from './tableau-component/tableau-component.component';
import { Ex2bindingComponent } from './ex2binding/ex2binding.component';
import { CalculComponent } from './calcul/calcul.component';
import {FormsModule} from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import { Binding2wayComponent } from './binding2way/binding2way.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TableauComponentComponent,
    Ex2bindingComponent,
    CalculComponent,
    ProduitComponent,
    CandidatViewComponent,
    Binding2wayComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
