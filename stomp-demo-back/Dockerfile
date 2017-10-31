FROM openjdk:8-jdk-alpine
LABEL maintainer="York Wang <anyone.1984@gmail.com>"
VOLUME /tmp
ADD target/stomp-demo-back-0.0.1-SNAPSHOT.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar