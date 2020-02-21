import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProfessorNavBarComponent } from './professor-nav-bar/professor-nav-bar.component';
import { ProfessorCourseCardComponent } from './professor-course-card/professor-course-card.component';
import { ProfessorCardLayoutComponent } from './professor-card-layout/professor-card-layout.component';
import { ProfessorSettingsPageComponent } from './professor-settings-page/professor-settings-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessorUserMenuComponent } from './professor-user-menu/professor-user-menu.component';
import {
  MatMenuModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule,
  MatSlideToggleModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatDividerModule,
  MatGridListModule, MatToolbarModule, MatTabsModule, MatChipsModule, MatInputModule
} from '@angular/material';

import { ProfessorMainPageComponent } from './professor-main-page/professor-main-page.component';
import { ProfessorCourseExpansionPanelComponent } from './professor-course-expansion-panel/professor-course-expansion-panel.component';
import { FormsModule } from '@angular/forms';
import { ProfessorMessagesPageComponent } from './professor-messages-page/professor-messages-page.component';
import { MessagesTabComponent } from './messages-tab/messages-tab.component';
import { AbsentMessageComponent } from './absent-message/absent-message.component';
import { ExamMessageComponent } from './exam-message/exam-message.component';
import { ProfessorCourseViewPageComponent } from './professor-course-view-page/professor-course-view-page.component';
import { ProfessorCourseCardViewComponent } from './professor-course-card-view/professor-course-card-view.component';
import { ButtonCodeGeneratorComponent } from './button-code-generator/button-code-generator.component';
import { ButtonProfSaveAttendanceComponent } from './button-prof-save-attendance/button-prof-save-attendance.component';
import { ProfessorStudentCardComponent } from './professor-student-card/professor-student-card.component';
import { ProfessorStudentListComponent } from './professot-student-list/professor-student-list.component';
import { LoginComponent } from './login/login.component';
import { StudentMainPageComponent } from './student-main-page/student-main-page.component';
import { StudentUserMenuComponent } from './student-user-menu/student-user-menu.component';
import { StudentSettingsPageComponent } from './student-settings-page/student-settings-page.component';
import { StudentNavBarComponent } from './student-nav-bar/student-nav-bar.component';
import { StudentMessagesPageComponent } from './student-messages-page/student-messages-page.component';
import { StudentCourseExpansionPanelComponent } from './student-course-expansion-panel/student-course-expansion-panel.component';
import { StudentCourseCardComponent } from './student-course-card/student-course-card.component';
import { StudentCardLayoutComponent } from './student-card-layout/student-card-layout.component';
import { StudentCourseViewPageComponent } from './student-course-view-page/student-course-view-page.component';
import { StudentCourseViewCardComponent } from './student-course-view-card/student-course-view-card.component';
import { StudentConfirmAttendanceDialogComponent } from './student-confirm-attendance-dialog/student-confirm-attendance-dialog.component';
import {TestingDataService } from './services/testing-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfessorNavBarComponent,
    ProfessorCourseCardComponent,
    ProfessorCardLayoutComponent,
    ProfessorSettingsPageComponent,
    ProfessorUserMenuComponent,
    ProfessorMainPageComponent,
    ProfessorCourseExpansionPanelComponent,
    ProfessorMessagesPageComponent,
    MessagesTabComponent,
    AbsentMessageComponent,
    ExamMessageComponent,
    ProfessorCourseViewPageComponent,
    ProfessorCourseCardViewComponent,
    ButtonCodeGeneratorComponent,
    ButtonProfSaveAttendanceComponent,
    ProfessorStudentCardComponent,
    ProfessorStudentListComponent,
    LoginComponent,
    StudentMainPageComponent,
    StudentCardLayoutComponent,
    StudentCourseCardComponent,
    StudentCourseExpansionPanelComponent,
    StudentMessagesPageComponent,
    StudentNavBarComponent,
    StudentSettingsPageComponent,
    StudentUserMenuComponent,
    StudentCourseViewPageComponent,
    StudentCourseViewCardComponent,
    StudentConfirmAttendanceDialogComponent,
    UserMenuComponent,
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
    MatInputModule
  ],
  providers: [
    TestingDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
