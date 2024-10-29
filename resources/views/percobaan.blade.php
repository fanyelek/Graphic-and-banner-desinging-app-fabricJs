<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percobaan Fabric.js</title>

    <link rel="stylesheet" href="/editor/css/left-editor.css">
    
  <!-- <link rel="stylesheet" href="/editor/css/editor.css"> -->
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
</head>
<body>
    <style>

        .editor-canvas {
            display: flex;
            /* background-color: #ffaaaa8d; */
            border: 1px solid #ddd;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100vh;
        }

        .canvas-toolbar {
            display: flex;
            /* background-color: white; */
            width: 500px;
            /* height: 32px;             */
            justify-content: center;
            box-sizing: border-box;
        }
        
        
        #graphic-editor, .editor-canvas canvas{
            /* background-color: white; */
            border: 1px solid #ddd;
            /* margin-top: 10px */
        }
        
        button{
            box-sizing: border-box;
            margin: 5px 5px 5px 5px;
        }

        #add-rectangle {
            position: fixed;
            top: 20px;
            left: 20px;
            padding: 10px;
            background-color: #4dace9;
            color: white;
            border: none;
            cursor: pointer;
            z-index: 1000; /* Pastikan tombol berada di atas elemen lainnya */
        }


    </style>

    <button id="add-rectangle">Add Rectangle</button>

    
    <div id="editor-content">
        <div class="editor-canvas">
            <div class="canvas-toolbar">
                <button onclick="addCanvas()">Add Canvas</button>
            </div>
            <canvas id="graphic-editor-0" width='500px' height='500px'></canvas>
        </div>
    </div>
    <script src="/assets/js/core/jquery.min.js"></script>
  <script src="/assets/js/core/bootstrap.min.js"></script>
  <script src="/editor/js/fabricjs.js"></script>
  
  <!-- <script src="/editor/js/left-editor.js"></script>
  <script src="/editor/js/left-editor-content.js"></script> -->





    <script>

        
    let canvasCount = 1; // Mulai dari 1 karena canvas pertama sudah ada
    let canvas;

    initializeCanvas('graphic-editor-0');

    function initializeCanvas(canvasId){
        canvas = new fabric.Canvas(canvasId, {
            width: 500,
            height: 500
        });

    }

    document.getElementById('add-rectangle').addEventListener('click', () => {
        const rect = new fabric.Rect({
            left: 10,
            top: 10,
            fill: 'blue',
            width: 100,
            height: 100
        });
        canvas.add(rect);
    });


    function addCanvas(){
        // Buat div wrapper baru untuk canvas kedua

            const newEditorCanvas = document.createElement("div");
            newEditorCanvas.className = "editor-canvas"

            // Buat toolbar baru
            const newToolbar = document.createElement("div");
            newToolbar.className = "canvas-toolbar";
            newToolbar.innerHTML = `
                <button onclick="addCanvas()">Add Canvas</button>
            `;

            // Buat elemen canvas baru
            const newCanvas = document.createElement("canvas");
            newCanvas.id = "graphic-editor-" + canvasCount;

            // Tambahkan toolbar dan canvas ke dalam container baru
            newEditorCanvas.appendChild(newToolbar);
            newEditorCanvas.appendChild(newCanvas);

            // Tambahkan container baru ke dalam editor-content
            document.getElementById("editor-content").appendChild(newEditorCanvas);
            initializeCanvas(newCanvas.id);
            canvasCount++;

            const upperCanvasElements = document.getElementsByClassName('upper-canvas');
    
            for (let i = 0; i < upperCanvasElements.length; i++) {
                upperCanvasElements[i].addEventListener('click', function(event) {
                    console.log('disini');
                });
            }

    }
// Event listener untuk tombol tambah canvas baru
// document.getElementById('add-canvas').addEventListener('click', () => {
//     const newCanvasId = `canvas-${canvasCount}`;
//     canvasCount++;

//     // Buat elemen canvas baru
//     const newCanvasElement = document.createElement('canvas');
//     newCanvasElement.id = newCanvasId;
//     newCanvasElement.width = 500;
//     newCanvasElement.height = 500;
//     newCanvasElement.classList.add('canvas-container');

//     // Tambahkan canvas baru ke container
//     document.getElementById('canvas-container').appendChild(newCanvasElement);

//     // Inisialisasi canvas baru dengan grid
//     initializeCanvas(newCanvasId);
// });
// });

        // let canvas
        // document.addEventListener("DOMContentLoaded", () => {

        // // Inisialisasi canvas pertama dengan Fabric.js
        //     canvas = new fabric.Canvas('graphic-editor');
        //     // const rect = new fabric.Rect({
        //     //         left: 10,
        //     //         top: 10,
        //     //         fill: 'blue',
        //     //         width: 100,
        //     //         height: 100
        //     //     });
        //     //     canvas.add(rect);
            
        // });

        // function addRectangle() {
        //     const rect = new fabric.Rect({
        //         left: 10,
        //         top: 10,
        //         fill: 'blue',
        //         width: 30,
        //         height: 30
        //     });
        //     canvas.add(rect);
        //     // fabricCanvas.requestAll();
        // }

        // function addCanvas() {
        //     // Buat div wrapper baru untuk canvas kedua
        //     const newCanvasContainer = document.createElement("div");
        //     newCanvasContainer.className = "canvas-container";

        //     const newEditorCanvas = document.createElement("div");
        //     newEditorCanvas.className = "editor-canvas"

        //     // Buat toolbar baru
        //     const newToolbar = document.createElement("div");
        //     newToolbar.className = "canvas-toolbar";
        //     newToolbar.innerHTML = `
        //         <button onclick="addCanvas()">Add Canvas</button>
        //         <button onclick="zoomIn()">Zoom In</button>
        //         <button onclick="zoomOut()">Zoom Out</button>
        //         <button onclick="deleteCanvas(this)">Delete Canvas</button>
        //     `;

        //     // Buat elemen canvas baru
        //     const newCanvas = document.createElement("canvas");
        //     newCanvas.width = 500;
        //     newCanvas.height = 500;
        //     newCanvas.style.backgroundColor = "white";
        //     newCanvas.style.border = "1px solid #ddd";
        //     newCanvas.style.marginTop = "10px";

        //     // Tambahkan toolbar dan canvas ke dalam container baru
        //     newCanvasContainer.appendChild(newEditorCanvas);
        //     newEditorCanvas.appendChild(newToolbar);
        //     newEditorCanvas.appendChild(newCanvas);

        //     // Tambahkan container baru ke dalam editor-content
        //     document.getElementById("editor-content").appendChild(newCanvasContainer);

        //     // Inisialisasi canvas baru dengan Fabric.js
        //     const newFabricCanvas = new fabric.Canvas(newCanvas);

        //     // Fungsi untuk delete hanya untuk canvas ini
        //     newToolbar.querySelector("button[onclick*='deleteCanvas']").onclick = function() {
        //         newFabricCanvas.clear();
        //         newCanvasContainer.remove();
        //     };
        // }

        // function zoomIn() {
        //     fabricCanvas.setZoom(fabricCanvas.getZoom() * 1.1);
        // }

        // function zoomOut() {
        //     fabricCanvas.setZoom(fabricCanvas.getZoom() / 1.1);
        // }

        // function deleteCanvas(button) {
        //     fabricCanvas.clear();
        //     button.closest('.canvas-container').remove();
        // }

        // document.addEventListener("DOMContentLoaded", () => {
        //     const upperCanvasElements = document.getElementsByClassName('upper-canvas');
    
        //     for (let i = 0; i < upperCanvasElements.length; i++) {
        //         upperCanvasElements[i].addEventListener('click', function(event) {
        //             console.log('disini');
        //         });
        //     }
        // });
    </script>
</body>
</html>