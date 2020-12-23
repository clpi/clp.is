#!/bin/sh

run_dev() {
    wasm-pack build --target web --dev
}

wasm-pack build --debug -t web -d public/build/ --dev
