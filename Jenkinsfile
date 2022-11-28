pipeline {
  agent any
  tools {
    maven 'maven-3.8.6'
  }
  stages {
    stage("Building the back end Image"){
      steps{
        script {
          git 'https://github.com/yang9501/SWE645HW3.git'
          sh 'pwd'
          //'mvn clean package' deposits the jar file into the surveySystem/target folder as 'surveySystem-0.0.1-SNAPSHOT.jar' 
          dir('surveySystem') {
            sh 'mvn clean package'
          }
          sh 'ls'
          sh 'echo ${BUILD_TIMESTAMP}'
          sh 'docker login -u yang9501 -p ${DOCKERHUB_PASS}'
          sh 'docker build -t yang9501/surveysystem:${BUILD_NUMBER} ./surveySystem'
        }
      }
    }
    stage("Pushing back end Image to Dockerhub"){
      steps{
        script {
          sh 'docker push yang9501/surveysystem:${BUILD_NUMBER}'
        }
      }
    }
    stage("Building the front end Image"){
      steps{
        script {
          git 'https://github.com/yang9501/SWE645HW3.git'
          sh 'pwd'
          sh 'ls'
          sh 'echo ${BUILD_TIMESTAMP}'
          sh 'docker login -u yang9501 -p ${DOCKERHUB_PASS}'
          sh 'docker build -t yang9501/frontend:${BUILD_NUMBER} ./frontEnd'
        }
      }
    }
    stage("Pushing front end Image to Dockerhub"){
      steps{
        script {
          sh 'docker push yang9501/frontend:${BUILD_NUMBER}'
        }
      }
    }
  }
}
