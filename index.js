 var jsQR = require("jsqr");
 var fs = require("fs");
 var jpeg = require("jpeg-js");
 var jpegData = fs.readFileSync('pic.jpg');
 var rawImageData = jpeg.decode(jpegData); 
 var decode = jsQR.decodeQRFromImage(rawImageData.data, rawImageData.width, rawImageData.height);
 console.log("QR code is found "+ decode);