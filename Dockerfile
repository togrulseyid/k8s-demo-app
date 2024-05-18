#FROM ubuntu:latest
#LABEL authors="togru"
#
#ENTRYPOINT ["top", "-b"]

FROM openjdk:17
ENV POSTGRES_DB_USERNAME=x \
        POSTGRES_DB_PWD=x
#VOLUME /tmp
#EXPOSE 8085
#ARG JAR_FILE=target/spring-demo-0.0.1-SNAPSHOT.jar
#ADD ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

RUN mkdir -p /home/app

COPY * /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

RUN 

# NANA
#FROM node:13-alpine
#
#COPY package*.json /usr/app/
#COPY app/* /usr/app/
#
#WORKDIR /usr/app
#
#RUN npm install
#CMD ["node", "server.js"]
#
