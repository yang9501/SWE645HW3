FROM eclipse-temurin:11
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
CMD ["sudo ./mvnw", "spring-boot:run"]
