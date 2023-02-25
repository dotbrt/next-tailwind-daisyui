#!/bin/bash

#get the current date and time
datetime=$(date '+%Y-%m-%d %H:%M:%S')

#commit the changes with the current date and time as the comment
git add .
git commit -m "$datetime"

#push the changes to the master branch
git push origin main

echo "Changes committed and pushed to master branch at $datetime."