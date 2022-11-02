import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyServiceService } from '../../services/survey-service.service';
import { Survey } from '../../model/survey';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {
  survey: Survey;
  form: FormGroup;

  //Data to display in checkboxes
  likedData = [
  { name: 'Students', selected: false },
  { name: 'Location', selected: false },
  { name: 'Campus', selected: false },
  { name: 'Atmosphere', selected: false },
  { name: 'Dorm Rooms', selected: false },
  { name: 'Sports', selected: false },
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private surveyService: SurveyServiceService) {

    this.survey = new Survey();
  }

  //Processes form data and persists in backend through API call in surveyService.  Displays confirmation page after submitting.
  onSubmit() {
    //TODO:
    //4. Additional validation?

    //handle checkboxes
    let resultArray: string[] = [];
    const selected = this.likedData.filter(c => c.selected);
    selected.forEach(e => resultArray.push(e.name));
    this.survey.liked = resultArray.join(",");

    this.surveyService.save(this.survey);
    this.router.navigate(['components/survey-submitted']);
  }

}
