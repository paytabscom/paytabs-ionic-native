#!/bin/bash
set -e

echo "Publishing to npm..."
# Removed --access public as it might default to restricted for scoped packages, but this is a normal package.
# Keeping it simple or adding access if needed. 
# The reference had --access public. This package 'paytabs-ionic-native' is not scoped.
# Standard publish is fine.
npm publish
echo "✓ Successfully published to npm"
