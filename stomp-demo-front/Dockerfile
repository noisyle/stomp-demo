FROM nginx:stable-alpine
LABEL maintainer="York Wang <anyone.1984@gmail.com>"
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/
