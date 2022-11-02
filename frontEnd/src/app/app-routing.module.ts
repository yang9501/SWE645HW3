import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { HomeComponent } from './components/home/home.component';
import { SurveySubmittedComponent } from './components/survey-submitted/survey-submitted.component';
import { ListAllSurveysComponent } from './components/list-all-surveys/list-all-surveys.component';
import { ViewSurveyComponent } from './components/view-survey/view-survey.component';

const routes: Routes = [

  { //Default route
   path: '',
   redirectTo: 'components/home',
   pathMatch: 'full'
  },
  {
   path: 'components/home',
   component: HomeComponent
  },
  {
   path: 'components/survey',
   component: SurveyComponent
  },
  {
   path: 'components/survey-submitted',
   component: SurveySubmittedComponent
  },
  {
   path: 'components/list-all-surveys',
   component: ListAllSurveysComponent
  },
  {
   path: 'components/view-survey',
   component: ViewSurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
