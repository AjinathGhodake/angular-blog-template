import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MastheadComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,MastheadComponent,FooterComponent,LoadingComponent]
})
export class UiComponentModule { }
