#/!bin/bash

# Change the port here if needed. Ports in scripts at package.json must match
# this one.

# Runs a Node dev environment in Docker

mlkdcknoderun \
  -u 1000:1000 \
  -p 3000:3000 \
  -i react_exp_node_dev \
  -v $(pwd)/../:$(pwd)/../ \
  -w $(pwd)/../ \
  16.13.2
