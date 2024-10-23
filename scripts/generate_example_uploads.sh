#!/bin/sh

set -e

working_dir=$(pwd)
project_dir=$(dirname $(dirname $(realpath $0)))

cd $project_dir/examples/data

rm -rf uploads/*.zip

zip -r -j uploads/theory.zip theory/*
zip -r -j uploads/eln.zip eln/*
zip -r -j uploads/tabular.zip tabular/*

cd cow_tutorial
zip -r ../uploads/cow_tutorial.zip *
cd ..

cd rdm_tutorial
zip -r ../uploads/rdm_tutorial.zip *
cd ..
