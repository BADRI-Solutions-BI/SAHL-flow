#!/bin/bash
# usage: fin.sh <type> <name>   (run from repo root)
D=.archify/system-sahl-full-20261005-083100
node ~/.claude/skills/archify/bin/archify.mjs finalize "$1" $D/$2.json $D/$2.html --quality showcase --json > $D/$2.out 2>&1
echo "$2 exit $?"
head -c 2500 $D/$2.out
echo
