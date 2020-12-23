#! /usr/bin/bash

# Do not run this file without setting the environment variables, you will end up fatal error
# If you wish to run this locally, please change the env variable before running this.

WORKING_PATH="../$(dirname $0)"
cd ..

cat package.json | grep -v '"private":' | grep -v '"version":' | sed "s/\(\"name\": \"@element-plus\/icons\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > package.json

npm publish --registry ${REGISTRY} --access public