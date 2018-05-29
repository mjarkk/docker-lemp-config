# My docker lemp config
My full docker LEMP stack (Linux, Nginx, MySQL, PHP)  
This is a fully working lemp server with all the php extensions you might need  
This also has some other programs installed like [FFMPEG](https://www.ffmpeg.org/), [graphicsmagick](http://www.graphicsmagick.org/) and a view others programs that a php server just needs  

## Install
- Install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- Clone this repo and open a terminal inside the cloned folder
- `docker-compose build && docker-compose up -d && chmod 777 html -R`

## About Config
- MySql Password: **markdepro**, username: **root**, hostname: **db**
- Phpmyadmin: [localhost:81](http://localhost:81)
- Webserver root: [html](html)

## BUGS
- On windows mariadb fails to launch
- PHP scripts do sometimes not have the write to exsecute, create, remove. **Fix**: `chmod 777 html -R`
