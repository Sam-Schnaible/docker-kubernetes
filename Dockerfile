# Specify base image
FROM node:alpine

WORKDIR /usr/app

# COPY ./ ./ currently this command will run every time we make a change to the source code,
# which means install dependencies everytime.
# In a big project with lots of dependencies, it could take several minutes to install all the dependencies.
# This can be annoying and waste time if we had to install all dependencies every time
# Instead COPY only the package.json first so it doesn't install all dependencies everytime there's a change to source code:
COPY ./package.json ./
RUN npm install
# Now copy everything else from current working directory (or directory specified by the build context arg of docker build )
# and then copy that to the current working directory of the container
COPY ./ ./
# Default command
CMD ["npm", "start"]