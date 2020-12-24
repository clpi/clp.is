#!/usr/bin/env bash
wget https://files.stork-search.net/releases/latest/stork-x86_64-unknown-linux-gnu
chmod +x stork-x86_64-unknown-linux-gnu
./stork-x86_64-unknown-linux-gnu --build _site/stork-posts.toml
