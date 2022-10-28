#!/bin/bash

basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case $(uname) in
*CYGWIN*) basedir=$(cygpath -w "$basedir") ;;
esac

if [ "$EP_BUILD" = "dev" ]; then
  pnpm tsx -C dev "$basedir/../src/index.ts" "$@"
else
  /usr/bin/env node "$basedir/../scripts/run-bundle.js" "$@"
fi
