#!/bin/bash

PROFILE="$1";

if [ "$PROFILE" == "production" ]; then
	nohup ./iojs ./app.js 80 2>&1;
else
	./iojs ./app.js 3000;
fi;

