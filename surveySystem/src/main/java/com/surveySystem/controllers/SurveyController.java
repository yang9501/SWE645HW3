package com.surveySystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.surveySystem.entities.Survey;
import com.surveySystem.repositories.SurveyRepository;
import java.util.Date;
import java.text.SimpleDateFormat;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Optional;
import java.io.File;
import com.fasterxml.jackson.databind.JsonNode;
import java.io.IOException;
import com.fasterxml.jackson.core.type.TypeReference;
import java.util.List;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/surveyController")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    /*
        API Endpoint that takes a json string as input.  Processes the json and persists a Survey.
    */
    @PostMapping(path="/submit")
    public @ResponseBody void submitNewSurvey(@RequestBody String json) {

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(json);
            //Parse Json and build object
            Survey s = new Survey();
            s.setFirstName(jsonNode.get("firstName").asText());
            s.setLastName(jsonNode.get("lastName").asText());
            s.setStreetAddress(jsonNode.get("streetAddress").asText());
            s.setCity(jsonNode.get("city").asText());
            s.setState(jsonNode.get("state").asText());
            s.setZipCode(jsonNode.get("zipCode").asText());
            s.setPhoneNumber(jsonNode.get("phoneNumber").asText());
            s.setEmailAddress(jsonNode.get("emailAddress").asText());

            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date date = formatter.parse(jsonNode.get("dateOfSurvey").asText());
            s.setDateOfSurvey(date);

            s.setLiked(jsonNode.get("liked").asText());
            s.setInterest(jsonNode.get("interest").asText());
            s.setRecommend(jsonNode.get("recommend").asText());
            s.setComments(jsonNode.get("comments").asText());

            surveyRepository.save(s);
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }

    @GetMapping(path="/getAllSurveys")
    public @ResponseBody Iterable<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    @GetMapping(path="/getSurvey")
    public @ResponseBody String getSurvey(@RequestParam int id) throws IOException{
        Optional<Survey> surveyOptional = surveyRepository.findById(Integer.valueOf(id));
        if(surveyOptional.isPresent()) {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(surveyOptional.get());
        }
        else {
            return "Survey not found.";
        }
    }
}