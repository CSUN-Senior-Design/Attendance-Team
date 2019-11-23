import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { ProfessorSettingsPageComponent } from './professor-settings-page/professor-settings-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserMenuComponent } from './user-menu/user-menu.component';
import {
  MatMenuModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatSlideToggleModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatDividerModule,
  MatGridListModule, MatToolbarModule, MatTabsModule
} from '@angular/material';

import { Course } from 'src/app/models/course.model';
import { ProfessorMainPageComponent } from './professor-main-page/professor-main-page.component';
import { CourseExpansionPanelComponent } from './course-expansion-panel/course-expansion-panel.component';
import { FormsModule } from '@angular/forms';
import { ProfessorMessagesPageComponent } from './professor-messages-page/professor-messages-page.component';
import { MessagesTabComponent } from './messages-tab/messages-tab.component';
import { AbsentMessageComponent } from './absent-message/absent-message.component';
import { ExamMessageComponent } from './exam-message/exam-message.component';

@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    CourseCardComponent,
    CardLayoutComponent,
    ProfessorSettingsPageComponent,
    UserMenuComponent,
    ProfessorMainPageComponent,
    CourseExpansionPanelComponent,
    ProfessorMessagesPageComponent,
    MessagesTabComponent,
    AbsentMessageComponent,
    ExamMessageComponent
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
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
