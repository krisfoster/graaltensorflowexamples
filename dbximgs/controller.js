module.exports.home = (req,res,next)=>{
  var fs = require('fs');

  var path = './public/images';
  var files = [];
  //console.log(Polyglot.eval('R', 'runif(100)')[0]);
  var classifier = null;

  // Now for the magic...
  // This calls out to the java classes we compiled earlier
  // These are the classes that call to the TensorFlow lib and make use of the
  // linux shared libs
  //var ClassiferClass = Java.type('org.tensorflow.examples.LabelImage');
  //var classifier = ClassiferClass.getClassifier('../models');

  fs.readdir(path, function(err, items) {
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        var path = 'images/' + items[i];
        var javaImgPath = 'public/' + path;

        // The Java code returns a String description - which is turned automatically
        // into a JS string
        //var clazz = classifier == null ? path : classifier.classify(javaImgPath);
        var clazz = "A Thing";

        files.push({path: path, title: clazz});
    }
    console.log(files);
  });

  res.render('gallery', { imgs: files, layout:false});
};
