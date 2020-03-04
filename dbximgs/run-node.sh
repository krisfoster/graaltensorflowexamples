#!/usr/bin/env bash


# This allows you to run the node app without the Java
# IMPORTANT : You need to update the controller in the node
# app to comment out the calls to the Java code
#node  ./bin/www

# If we want to make use of the Java code we need to:
# * Tell the node binary that we want JVM interop
# * Add our classes to the path - note the classpath params
# * We can do things like pass JNI paths
#
# We are not using npm, but all `npm start` does is call the run script from the package.json
#
echo "Running node with my custom Java!"
# --jvm : make java interop available
# --vm.cp : add to the classpath
# --vm.Djava.library.path : Set JNI "plugins"
node --jvm --inspect --vm.cp=../jars/libtensorflow-1.14.0.jar:../target/classes --vm.Djava.library.path=../jni ./bin/www
