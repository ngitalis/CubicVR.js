function createCanvas () {
   var canvasFrame = document.getElementById('render-frame'),
       pngFrame = document.getElementById('png-frame');

   // get rendering canvas and context
   var r = window.document.createElement('canvas');
   var rCtx = r.getContext("experimental-webgl", {preserveDrawingBuffer: true});
   r.id = "render";
   r.width = 300;
   r.height = 300;
   canvasFrame.appendChild(r);

   // get the png canvas and context
   var p = window.document.createElement('canvas');
   var pCtx = p.getContext("2d");
   p.id = "pngImage";
   p.width = 300;
   p.height = 300;
   pngFrame.appendChild(p);
}

function makeScreen () {
   var render = document.getElementById('render'),
   png = document.getElementById('pngImage'),
   pCtx = png.getContext("2d");

   pCtx.drawImage(render, 0, 0);
}

function runBuilder () {
   var render = document.getElementById('render'),
       png = document.getElementById('pngImage'),
       code = document.getElementById('code');

   // run code.
   eval(code.value);	
   test(render, function () {});

   setTimeout("makeScreen()", 500);
}
