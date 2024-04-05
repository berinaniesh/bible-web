#!/bin/bash

npm i
npm run build
rm bible-web.zip 2> /dev/null
zip -r bible-web.zip .
scp bible-web.zip berinaniesh.xyz:/home/berinaniesh/tmp/
ssh berinaniesh.xyz deploy-bible-web.sh
