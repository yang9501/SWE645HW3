pipeline {
  agent any
  stages {
    stage("Building the back end Image"){
      agent {
        any {
          image 'maven:3.8.1-adoptopenjdk-11'
        }
      }
      steps{
        script {
          git 'https://github.com/yang9501/SWE645HW2.git'
          sh 'pwd'
          //'mvn clean package' deposits the war file into the surveySystem/target folder as 'surveySystem-0.0.1-SNAPSHOT.war'
          sh 'mvn clean package'
          sh 'ls'
          sh 'echo ${BUILD_TIMESTAMP}'
          sh 'docker login -u yang9501 -p ${DOCKERHUB_PASS}'
          sh 'docker build -t yang9501/studentsurvey:latest ./surveySystem'
        }
      }
    }
    stage("Pushing back end Image to Dockerhub"){
      steps{
        script {
          sh 'docker push yang9501/studentsurvey:latest'
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
          sh 'docker build -t yang9501/frontend:latest ./frontEnd'
        }
      }
    }
    stage("Pushing front end Image to Dockerhub"){
      steps{
        script {
          sh 'docker push yang9501/frontend:latest'
        }
      }
    }
    //stage("Deploying on cluster through Rancher"){
    //  steps{
    //    script {
    //      //Jenkins uses the 'jenkins' user on the host to perform actions on the host.  .kube/config is a folder that grants access to perform kubectl actions on the cluster using the Rancher management host as a proxy, using the Rancher credentials.  I had to put the config file into a folder in the jenkins user directory, otherwise the jenkins user wouldn't have the permission to view and use the config file.
    //      sh 'kubectl --kubeconfig /var/lib/jenkins/.kube/config version'
    //      sh 'kubectl --kubeconfig /var/lib/jenkins/.kube/config set image deployment/swe645hw2 container-0=yang9501/swe645hw2:latest'
    //      //After the cluster receives the image, you have to redeploy the pods in order for the new image to take effect
    //      sh 'kubectl --kubeconfig /var/lib/jenkins/.kube/config rollout restart deployment/swe645hw2'
    //    }
    //  }
    //}
  }
}
