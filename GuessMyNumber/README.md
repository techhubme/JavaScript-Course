# Guess My Number

Welcome Guess My Number Game

# Nodejs Setup

## Update the System package

    $ sudo apt-get update

## Install Nodejs

    $ sudo apt install nodejs -y

## Verify the nodejs installations

    $ node -v

## Install NPM (Node Package Manager)

    $ sudo apt install npm -y

## Install live-server NPM Package as following

    $ sudo npm install live-server -g

    -g = means install globally

## Start Live server

    $ live-server --port=8080

## To Stop Live Server

    Prese CTRL + Z

## Uninstall Nodejs

    $ sudo apt remove nodejs -y

# Docker

## How to creat the docker image?

    $ docker image build -t ramniwash/guessmynumber:1.0.0 .

## How to create and run Docker Container?

    $ docker run -d -p 56000:80 --name=guessmynumber guessmynumber:1.0.0

## Push the Image

    $ docker push ramniwash/guessmynumber:1.0.0

## How to remove existing containre?

    $ docker container rm -f guessmynumber

## Enter into Container

    $ docker exec -it guessmynumber /bin/bash

## Access the Application

    http://localhost:56000
    http://[CONTAINER_IP]:56000

## Check the Logs

    $ docker logs guessmynumber
