#!/bin/bash

sudo systemctl start docker
docker-composer up
sudo systemctl stop docker