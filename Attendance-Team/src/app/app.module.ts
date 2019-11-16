import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseInfoComponent,
    NavBarComponent,
    CourseCardComponent,
    CardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
