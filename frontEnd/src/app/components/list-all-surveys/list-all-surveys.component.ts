import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurveyServiceService } from '../../services/survey-service.service';
import { Survey } from '../../model/survey';

@Component({
  selector: 'app-list-all-surveys',
  templateUrl: './list-all-surveys.component.html',
  styleUrls: ['./list-all-surveys.component.css']
})

export class ListAllSurveysComponent implements OnInit {

  surveys: Survey[];

  constructor(private http: HttpClient, private surveyServiceService: SurveyServiceService) { }

  /*
    Upon initiation of the page, makes a call to surveyService to fetch survey data from the backend.  Binds data to the survey array object.
  */
  ngOnInit(): void {
     this.surveyServiceService.getAllSurveys().subscribe(data => {
       this.surveys = data;
     });
  }

}
