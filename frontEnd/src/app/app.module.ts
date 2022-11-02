import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { FooterComponent } from './components/footer/footer.component';
import { SurveySubmittedComponent } from './components/survey-submitted/survey-submitted.component';
import { ListAllSurveysComponent } from './components/list-all-surveys/list-all-surveys.component';
import { ViewSurveyComponent } from './components/view-survey/view-survey.component';
import { SurveyServiceService } from './services/survey-service.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SurveyComponent,
    SurveySubmittedComponent,
    ListAllSurveysComponent,
    ViewSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [SurveyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
