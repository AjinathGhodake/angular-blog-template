import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentModule } from './ui-component/ui-component.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewPostsComponent } from './preview-posts/preview-posts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
