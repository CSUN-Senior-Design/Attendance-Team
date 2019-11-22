import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorSettingsPageComponent } from './professor-settings-page/professor-settings-page.component';
import { AppComponent } from './app.component';
import { ProfessorMainPageComponent } from './professor-main-page/professor-main-page.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'profMain', component: ProfessorMainPageComponent},
  {path: 'profSettings', component: ProfessorSettingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
