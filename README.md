# Node Java Interop Demo

This demo shows how node can interop with Java code.

It consists of 2 parts:

1) A Java command line application that will classify an image.

2) A node application that uses the Java code to classify the images in an image gallery


## Install Tensor Flow Java

Read the instructions on this page to get the correct setup for your OS:

https://www.tensorflow.org/install/lang_java

Within the repo are the linux Shared libraries, but if you have a Mac or
Windows you will need to add your own libraries and update the run
scripts below to make sure the correct library name is used.

## Props

This is derived from two demos that are freely available on the web:

1) https://dropbox.github.io/nodegallerytutorial/

2) https://raw.githubusercontent.com/tensorflow/tensorflow/master/tensorflow/java/src/main/java/org/tensorflow/examples/LabelImage.java

## Java Application

To Build:

``` shell
mvn clean package
```

To Run:

``` shell
./run.sh dbximgs/public/images/cat-01.jpeg
```

## Node App

You don't need to build anything, just make sure that the Java app is built first.

To run:

``` shell
cd dbximgs
./run-node.sh
```
