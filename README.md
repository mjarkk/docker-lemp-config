# My docker lemp config
My full docker LEMP stack (Linux, Nginx, MySQL, PHP)  
This is a fully working lemp server with all the PHP extensions you might need  
This also has some other programs installed like [FFMPEG](https://www.ffmpeg.org/), [graphicsmagick](http://www.graphicsmagick.org/), [MailDev](https://github.com/djfarrelly/MailDev) and a view others programs that a PHP server just needs  

## Install
- Install [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- Clone this repo and open a terminal inside the cloned folder
- `docker-compose build && docker-compose up -d && chmod 775 html -R && chown $USER -R html`

## About Config
- MySql Password: **markdepro**, username: **root**, hostname: **db**
- Webserver: [localhost](http://localhost/)
- Phpmyadmin: [localhost:81](http://localhost:81/)
- MailDev: [localhost:82](http://localhost:82/)
- Webserver root: [html](html)

## BUGS
- This config will not work on windows
- PHP scripts sometimes doesn't have the write to execute, create, remove, to fix it run: `chmod 777 html -R`
