# Base Imaage Ubuntu 22.04
FROM ubuntu:22.04

# Given the name of Maintainer
LABEL Ram Niwash

# Updating the System Package
RUN apt-get update -y

# Installing curl and apache2 Server
RUN apt install curl -y
RUN apt install apache2 -y

# Copying the Project
COPY css /var/www/html/css
COPY js /var/www/html/js
COPY icon /var/www/html/icon
COPY index.html /var/www/html

# Moving to Working Directory
WORKDIR /var/www/html

# Exposing The Port Number of server
EXPOSE 80

# Running the Application
ENTRYPOINT [ "/usr/sbin/apache2ctl" ]
CMD ["-D","FOREGROUND"]
