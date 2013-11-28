#!/bin/bash

echo "Updating...";
harp compile _harp .;
git add .;
git commit -m "$1 updated site";
git push origin gh-pages;
echo "Updated!";