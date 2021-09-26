#!/bin/sh

if [ ! -d "dist/element-plus" ]; then
  pnpm build
fi
