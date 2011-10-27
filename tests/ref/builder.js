function runBuilder () {
   var canvasFrame = document.getElementById('render-frame'),
       pngFrame = document.getElementById('png-frame'),
       code = document.getElementById('code');

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

   // run code.
   eval(code.value);	
   test(r, function(){});

   alert("IT WORKS");
   pCtx.drawImage(r, 0, 0);
   // get data url and display/draw.
   //var data = r.toDataURL("image/png");
   //var img = new Image();
   //img.src = data;
   //pCtx.drawImage(img, 0, 0);

}
