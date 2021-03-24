### 1. docker command

#### 1.1 show version
docker --version

#### 1.2 show containers
docker ps *list running containers*
docker ps -a *list all containers*
docker ps -aq *list all containers IDs*
docker container ls
*only valid in bash, formatting ps output*
docker ps --format=$FORMAT

#### 1.3 show images
docker images
*remove image*
docker image rm nodejs_dockerised_app
docker rmi [imageName:tagName]
*remove <none>:<none> images*
docker image prune 

#### 1.4 download image
 

*small size alpine*
docker pull node:lts-alpine

#### 1.5 docker run 
docker run ImageName:TagName

*in attached mode*
docker run -d ImageName:TagName 

*mapping localhost:8080 to nginx tcp port 80*
docker run -d -p 8080:80 ImageName:TagName

*mapping multiple localhost:8080 and localhost:3000 to nginx tcp port 80*
docker run -d -p 8080:80 -p 3000:80 ImageName:TagName

*naming your container*
docker run --name my_website -d -p 8080:80 -p 3000:80 ImageName:TagName

#### 1.6 docker stop 
docker stop [container ID] or [container Name]
docker stop $(docker ps -a -q)

#### 1.7 docker start 
docker start [container ID] or [container Name]

#### 1.8 docker remove container
docker rm [container ID] or [container Name]

*only valid in bash, remove all containers*
docker rm $(docker ps -aq)

*remove all containers (included running containers)*
docker rm -f [container ID] or [container Name]

*remove <none>:<none> containers*
docker container prune

### 2 docker mount volumn to container
*mount static html file, do not use $(pwd) to point to a directory*
docker run --name my_website -v C:/[directory]:/usr/share/nginx/html -d -p 8080:80 -p 3000:80 nginx

*use double quote when you have space in your directory*
docker run --name my_website -v "C:/[directory]":/usr/share/nginx/html:ro  -d -p 8080:80 nginx 

### 3 docker container open shell
docker exec --help
docker exec -it [container Name] or [container ID] bash

#### 3.1 exit container shell
exit

### 4 docker build
docker build --tag [imageName]:[tagName] [directory]
*docker build in current directory*
docker build --tag mobile_landing_website:latest .

### 5 tagging image version
docker tag [imageName]:[tagName] [imageName]:[newTagName]
*create new image with different tag*
docker tag mobile_landing_web:latest mobile_landing_web:v2

### 6 docker push
docker tag local-image:tagname new-repo:tagname
docker push lewisccx/mobile_website:tagname

### 7 docker inspect
docker inspect [container ID] or [container Name]

### 8 docker logs
docker logs --help
docker logs [container ID] or [container Name]
*monitor mode*
docker logs -f [container ID] or [container Name]
### 10 misc
*list all with permissions*
ls -ld
ls -al
*show current directory*
pwd

docker package


