package com.surveySystem.repositories;

import org.springframework.data.repository.CrudRepository;
import com.surveySystem.entities.Survey;

/*
    Survey Repository that persists the data to the MySQL Database
 */
public interface SurveyRepository extends CrudRepository<Survey, Integer> {

}