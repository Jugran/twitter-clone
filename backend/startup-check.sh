#!/bin/bash


# # check if .env file is set up
# if [ ! -f ".env" ]; then
# 	echo "Please create .env file with respect to env.example"
# 	exit 1;
# fi

cd src && echo "Changing directory" || exit 1;

# Check node_modules is setup
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies"
    npm install

	RESULT=$?
	if [ $RESULT -ne 0 ]; then
		echo "Cannot npm install"
		exit 1;
	fi
fi

echo "running migrations"
npx knex migrate:latest
npx knex seed:run
