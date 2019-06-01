import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {RouterModule, Routes} from '@angular/router';
import {PostService} from './post.service';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: SinglePostComponent },
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent
  ],

  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
