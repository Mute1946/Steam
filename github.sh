#!/bin/bash
git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:Mute1946/steam.git
git push -u origin master