import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CourseCardComponent } from './course-card/course-card.component';
import { FormsModule } from '@angular/forms';
import { MessageCardComponent } from './message-card/message-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfessorSettingsPageComponent } from './professor-settings-page/professor-settings-page.component';
import { ProfessorMainPageComponent } from './professor-main-page/professor-main-page.component';
import { ProfessorMessagesPageComponent } from './professor-messages-page/professor-messages-page.component';
import { TestingDataService } from './services/testing-data.service';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { CourseSettingsComponent } from './course-settings/course-settings.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseCardComponent,
    ProfessorSettingsPageComponent,
    UserMenuComponent,
    ProfessorMainPageComponent,
    ProfessorMessagesPageComponent,
    MessageCardComponent,
    CourseSettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatChipsModule,
    MatListModule
  ],
  providers: [
    TestingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
