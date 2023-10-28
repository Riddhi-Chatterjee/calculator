#!/usr/bin/env sh

echo 'This script obtains the PID of the "npm start" process and kills it,'
echo 'thereby shutting down our calculator application running on localhost:3000'
set -x
lsof -i :3000 >> temp.txt
pid_3000=$(awk 'NR == 2 {print $2}' temp.txt)
kill $pid_3000
rm temp.txt