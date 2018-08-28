#!/bin/bash

sudo systemctl start docker
docker-compose up
sudo systemctl stop docker