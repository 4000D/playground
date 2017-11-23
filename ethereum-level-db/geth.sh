#!/usr/bin/env bash

geth \
  --datadir=$(pwd)/.ethereum \
  --cache=1024 \
  --syncmode=full \
  --rpc
