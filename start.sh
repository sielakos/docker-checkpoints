#!/bin/bash
docker kill host
docker rm host
docker run -it -p 4080:4080 --name host process