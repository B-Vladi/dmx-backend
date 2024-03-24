#!/bin/bash
container_name="some-mongo"
echo "Starting container $container_name if it exists, otherwise creating it"
docker start $container_name || docker run -p 27017:27017 --name $container_name -v ~/datadir:/data/db -d mongo
