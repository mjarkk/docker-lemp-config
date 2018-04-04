# docker-lemp-config

This folder contains my docker lemp config for a faster webserver setup on linux distros
- [x] Install `docker` and `docker-compose`
- [x] run `mkdir /var/html`
- [x] Clone this repo
- [x] run `sudo ./start.sh` in the cloned repo

## About
- MySql Password: **rootpassword**, username: **root**
- Phpmyadmin: [localhost:81](http://localhost:81)
- Webserver root: `/var/html`

## Tips
- Use `docker logs <container name>` to view log files get the container file via `docker ps`
