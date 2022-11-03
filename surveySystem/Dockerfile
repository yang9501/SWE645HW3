FROM tomcat:9.0-jdk11
COPY target/surveySystem-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/
EXPOSE 8080
CMD ["./mvnw", "spring-boot:run"]
