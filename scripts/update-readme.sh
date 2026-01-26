#!/bin/bash
set -e

echo "Updating README.md with new version..."

NEW_VERSION=$NEW_VERSION
echo "Updating README.md to version $NEW_VERSION"

# Update the version badge (line 3)
# Replace v1.0.4 with v$NEW_VERSION in the badge
sed -i.bak "s/PayTabs%20Ionic%20Native-v[0-9][0-9.]*-green/PayTabs%20Ionic%20Native-v${NEW_VERSION}-green/g" README.md

# Clean up backup file
rm -f README.md.bak

echo "✓ README.md updated successfully with version $NEW_VERSION"
echo "Updated sections:"
echo "1. Version badge: v$NEW_VERSION"
