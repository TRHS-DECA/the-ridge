#!/bin/bash

echo "Updating...";
harp compile _harp .;
git add .;
git commit -m "$1";
git push origin gh-pages;
echo "Updated!";