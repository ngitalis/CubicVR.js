function renderCube(canvas, callback) {
    var gl = CubicVR.init(canvas.id);

    if (!gl) {
	alert("Sorry, no WebGL support.");
	return;
    };

    // Create a camera, position at 1,1,1 and target at 0,0,0
    var camera = new CubicVR.Camera(canvas.width,canvas.height,60);
    camera.position = [1,1,1];
    camera.lookat([0,0,0]);

    // Create a material for the mesh
    var boxMaterial = new CubicVR.Material({
	textures: {
            color: new CubicVR.Texture("../../samples/images/6583-diffuse.jpg")
	}
    });

    // Add a box to mesh, size 1.0, apply material and UV parameters
    var boxMesh = CubicVR.primitives.box({
	size: 1.0,
	material: boxMaterial,
	uvmapper: {
            projectionMode: CubicVR.enums.uv.projection.CUBIC,
            scale: [1, 1, 1]
	}
    });

    // triangulate and buffer object to GPU, remove unused data
    boxMesh.triangulateQuads().compile().clean();

    // Add our camera to the window resize list
    CubicVR.addResizeable(camera);

    CubicVR.MainLoop(function(timer, gl) {
	CubicVR.renderObject(boxMesh, camera, CubicVR.IdentityMatrix);
    });

    callback();
}
