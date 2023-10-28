#!/usr/bin/env sh

echo 'The following "npm" command builds our calculator application for'
echo 'production in the local "build" directory, correctly bundles React'
echo 'in production mode and optimizes the build for the best performance.'
set -x
npm run build
set +x

echo 'The following "npm" command runs our calculator application in'
echo 'development mode and makes the application available for web browsing.'
echo 'The "npm start" command has a trailing ampersand so that the command runs'
echo 'as a background process (i.e. asynchronously). Otherwise, this command'
echo 'can pause running builds of CI/CD applications indefinitely.'
set -x
npm start &
sleep 1
set +x

echo 'Now...'
echo 'Visit http://localhost:3000 to see our calculator application in action.'