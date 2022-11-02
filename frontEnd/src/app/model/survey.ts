/*
  Data structure for a survey.
*/
export class Survey {
  id: string;
  firstName: string = "";
  lastName: string = "";
  streetAddress: string = "";
  city: string = "";
  state: string = "";
  zipCode: string = "";
  phoneNumber: string = "";
  emailAddress: string = "";
  dateOfSurvey: Date;
  liked: string = "";
  interest: string = "";
  recommend: string = "";
  comments: string = "";
}
