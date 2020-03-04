# Polyglot Apps on GraalVM EE

## Introduction

This demo / workshop will demonstrate how GraalVM let's you easily combine different
programming languages into a single applicaiton. It will highlight the integration between
Java, JS and R.

It's built form a number of parts, that we will stick together durring the course of this workshop.

The first part is a Java command line application that classifies images, admittidley not very well,
using a tensor flow model. I've extended the command line app classes so that it can also be called
as a Java library.

The seocnd part is a simple Express JS node web application. This loads a directory of
images and renders them as a gallery. Nothing too special there.

The third part is where we combine these two separare applications. We will add the Java classifier
functionality to the Express node app - with suprising ease.

## Props

Before we begin I need to include links to the repos that this has been built from:

1) https://dropbox.github.io/nodegallerytutorial/

2) https://raw.githubusercontent.com/tensorflow/tensorflow/master/tensorflow/java/src/main/java/org/tensorflow/examples/LabelImage.java

## Install Tensor Flow Java

Tensorflow is a machine learning library. We will be using it, along with a pre-trained model, to
clasify our images.

Read the instructions on this page to get the correct setup for your OS:

https://www.tensorflow.org/install/lang_java

When you have downloaded the tar file for your OS, extract it into the `/jni`
folder.

## Java Application

The steps to build and run the classifier command line app are pretty easy, once the
install of the tensorflow libs is done.

To Build:

``` shell
mvn clean package
```

When running it is worth taking a quick look at the run script. Note thet we have to
tell Java abou tthe shared libs:

`-Djava.library.path=./jni`

To Run:

``` shell
./run.sh dbximgs/public/images/cat-01.jpeg
```

If all goes well, and tensorflow is correctly ihstalled, then you will now have a, possibly
poor!, classification of the image we passed to the app. Maybe take a look at the image and see if
the classification was any good?

## Node App

The node / Express app is fairly straight-forward.

You don't need to build anything, just make sure that the Java app is built first. It consists of
a main server js, some routes, a controller and some templates. The main logic of interest to us
will be in the `controller.js`.

But first, let's run the app.

To run:

```
$ cd dbximgs
$ ./run-node.sh
```


