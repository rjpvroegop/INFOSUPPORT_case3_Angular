# This image will be based on the official nodejs docker image
FROM node:latest


RUN mkdir /myangularapp
ADD . /myangularapp
WORKDIR /myangularapp

# Install dependencies
RUN npm install -g angular-cli && npm install

# Tell Docker we are going to use this port
EXPOSE 9999

# The command to run our app when the container is run
CMD [ "npm", "start" ]
