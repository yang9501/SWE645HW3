import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../model/survey';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
  Service containing REST calls to API endpoints in backend.
*/
export class SurveyServiceService {
  private surveyUrl: string;

  constructor(private http: HttpClient) {
    //base URL
    this.surveyUrl = '35.231.191.171:8080/surveyController/';
  };

  //Retrieves list of all surveys submitted
  public getAllSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveyUrl + 'getAllSurveys');
  };

  //Saves a survey object to the backend
  public save(survey: Survey) {
    //console.log(JSON.stringify(survey));
    const options = {headers: {'Content-Type': 'application/json'}};
    this.http.post<any>(this.surveyUrl + 'submit', JSON.stringify(survey), options).subscribe();
  };
}
