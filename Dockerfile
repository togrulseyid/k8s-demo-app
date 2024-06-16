ARG NODE_VERSION=20
ARG GRADLE_VERSION=8.7.0

#
# Node
#
FROM node:${NODE_VERSION}-alpine AS node
RUN apk add --no-cache bash
RUN node --version
RUN npm --version
CMD ["bash"]


#FROM node:${NODE_VERSION}-alpine AS node
##WORKDIR /app
#COPY . .
#RUN npm install && \
#    npm run build
#FROM nginx:alpine
#COPY --from=builder /app/dist/* /usr/share/nginx/html/


#
# Build
#
FROM gradle:${GRADLE_VERSION}-jdk-21-and-22-alpine AS build
COPY --chown=gradle:gradle . /home/app/src
WORKDIR /home/app/src
CMD ["./gradlew", "build", "--no-daemon"]


#
# Package stage
#
FROM eclipse-temurin:21-alpine
COPY --from=build /home/app/src/build/libs/*.jar /app/k8s-app.jar
EXPOSE 8080
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/k8s-test
CMD ["java", "-jar", "/app/k8s-app.jar"]
#ENTRYPOINT ["java", "-jar","/app/k8s-app.jar"]

# docker build -t my-app:1.0 .
# docker rmi image_id   #docker images
# docker run -p 8085:8085 -d  --name my-app --network k8s-demo-app_k8s-spring-network my-app:1.0

