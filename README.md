# My docker lemp config
My full docker LEMP stack (Linux, Nginx, MySQL, PHP)  
This is a fully working lemp server with all the php extensions you might need  
This also has some other programs installed like [FFMPEG](https://www.ffmpeg.org/), [graphicsmagick](http://www.graphicsmagick.org/) and a view others programs that a php server just needs  

- [x] Install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- [x] Clone this repo
- [x] `docker-compose up -d` in the cloned repo (you might need to do `docker-compose build`)

## About Config
- MySql Password: **markdepro**, username: **root**, hostname: **db**
- Phpmyadmin: [localhost:81](http://localhost:81)
- Webserver root: [html](html)

## Tips
- If you don't like [_h5ai](https://larsjung.de/h5ai/) remove the [_h5ai](html/_h5ai/) folder

## BUGS
- On windows mariadb fails to launch