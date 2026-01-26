#!/bin/bash
set -e

echo "Publishing to npm..."

if [ -z "$NPM_TOKEN" ]; then
  echo "Error: NPM_TOKEN is not set or empty."
  exit 1
fi
# Removed --access public as it might default to restricted for scoped packages, but this is a normal package.
# Keeping it simple or adding access if needed. 
# The reference had --access public. This package 'paytabs-ionic-native' is not scoped.
# Standard publish is fine.
npm publish
echo "✓ Successfully published to npm"
