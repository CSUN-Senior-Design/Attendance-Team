import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfessorMainPageComponent } from './professor-main-page/professor-main-page.component';
import { ProfessorSettingsPageComponent } from './professor-settings-page/professor-settings-page.component';
import { ProfessorMessagesPageComponent } from './professor-messages-page/professor-messages-page.component';
import { ProfessorCourseViewPageComponent } from './professor-course-view-page/professor-course-view-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'profMain', component: ProfessorMainPageComponent},
  {path: 'profSettings', component: ProfessorSettingsPageComponent},
  {path: 'profMessages', component: ProfessorMessagesPageComponent},
  {path: 'profCourse', component:  ProfessorCourseViewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
