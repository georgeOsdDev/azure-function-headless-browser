#!/bin/bash
curl -L 'https://fonts.google.com/download?family=Noto%20Sans%20JP' -o font.zip
unzip font.zip -d ./fonts
rm -rf font.zip
