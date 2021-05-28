import { sceneAdder, THREE, LiteGraph } from "global";


function Cube() {
    this.addInput("width", "number");
    this.addInput("height", "number");
    this.addInput("depth", "number");

    this.addOutput("mesh", "object");
}

Cube.prototype.onExecute = function () {
    const width = this.getInputData(0);
    const height = this.getInputData(1);
    const depth = this.getInputData(2);




    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    console.log(cube)

    sceneAdder({
        layer:0,
        mesh: cube,
    });


    // sceneAdder({ name: "cube", layer: 0, mesh: cube, meta: { part: "cube" } });
    this.setOutputData(0, cube);

    
};



LiteGraph.registerNodeType("Tutorial/Cube", Cube );