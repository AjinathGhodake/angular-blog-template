import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, //default route
  { path: "home", component: HomeComponent },
  // { path: "about", component: AboutComponent },
  // { path: "contact", component: ContactComponent },
  // { path: "posts", component: PastPostsComponent },
  // { path: "post/:id", component: ViewPostComponent },
  // { path: "author-post", component: AuthorPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
