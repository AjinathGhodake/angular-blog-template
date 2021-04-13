import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponentModule } from './ui-component/ui-component.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewPostsComponent } from './preview-posts/preview-posts.component';
import { PastPostComponent } from './past-post/past-post.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ViewPostComponent } from './view-post/view-post.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewPostsComponent,
    PastPostComponent,
    AboutComponent,
    ContactComponent,
    ViewPostComponent
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
