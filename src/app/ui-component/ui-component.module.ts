import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MastheadComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,MastheadComponent,FooterComponent]
})
export class UiComponentModule { }
