FROM eclipse-temurin:20-jdk-alpine
EXPOSE 8080
ARG JAR_FILE=target/Backend-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} .
ENTRYPOINT ["java", "-jar", "/Backend-0.0.1-SNAPSHOT.jar"]