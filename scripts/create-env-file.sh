#!/bin/bash

if [ ! -f .env ]; then
  echo "... copying .env file ..."
  cp -v sample.env .env
else
  echo "file already exists"
fi
