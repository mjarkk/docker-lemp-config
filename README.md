# docker-lemp-config

This folder contains my docker lemp config for a faster webserver setup on linux distros
- [x] Install `docker` and `docker-compose`
- [x] run `mkdir /var/html` (this folder will contain all the webserver files)
- [x] Clone this repo
- [x] run `docker network create -d bridge --subnet 192.168.0.0/24 --gateway 192.168.0.1 lempserver`
- [x] run `docker-compose up -d` in the cloned repo

## About
- MySql Password: **markdepro**, username: **root**
- Phpmyadmin: [localhost:81](http://localhost:81)
- Webserver root: `/var/html`

## Tips
- Use `docker logs <container name>` to view log files get the container file via `docker ps`
