#!/bin/bash

npm run build
zip -r bible-web.zip .
scp bible-web.zip berinaniesh.xyz:/home/berinaniesh/tmp/
ssh berinaniesh.xyz deploy-bible-web.sh
