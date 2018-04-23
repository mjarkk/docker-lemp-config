# My docker lemp config
My full docker LEMP stack (Linux, Nginx, MySQL, PHP)  
This is a fully working lemp server with all the php extensions you might need  
This also has some other programs installed like [FFMPEG](https://www.ffmpeg.org/), [graphicsmagick](http://www.graphicsmagick.org/) and all a view others programs that a php server just needs  

- [x] Install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- [x] `mkdir /var/html` (this folder will contain all the webserver files)
- [x] Clone this repo
- [x] `docker network create -d bridge --subnet 192.168.0.0/24 --gateway 192.168.0.1 lempserver`
- [x] `docker-compose up -d` in the cloned repo (you might need to do `docker-compose build`)

## About
- MySql Password: **markdepro**, username: **root**
- Phpmyadmin: [localhost:81](http://localhost:81)
- Webserver root: `/var/html`
- If you want to use [h5ai](https://larsjung.de/h5ai/) just download the zip and place the files in the webserver root

## Tips
- Use `docker logs <container name>` to view log files get the container file via `docker ps`

## BUGS
- Can't access the SQL server via `localhost`
