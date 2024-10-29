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
<!-- 
    <button id="add-rectangle" onclick="addRectangle()">Add Rectangle</button> -->

    
    <div id="editor-content">
        <div class="editor-canvas">
            <div class="canvas-toolbar">
                <button onclick="addCanvas()">Add Canvas</button>
                <button onclick="zoomIn()">Zoom In</button>
                <button onclick="zoomOut()">Zoom Out</button>
                <button onclick="deleteCanvas()">Delete Canvas</button>
            </div>
            <canvas id="graphic-editor" width='500px' height='500px'></canvas>
        </div>
    </div>
    <script src="/assets/js/core/jquery.min.js"></script>
  <script src="/assets/js/core/bootstrap.min.js"></script>
  <script src="/editor/js/fabricjs.js"></script>
  
  <!-- <script src="/editor/js/left-editor.js"></script>
  <script src="/editor/js/left-editor-content.js"></script> -->





    <script>

        let canvas
        document.addEventListener("DOMContentLoaded", () => {

        // Inisialisasi canvas pertama dengan Fabric.js
            canvas = new fabric.Canvas('graphic-editor');
            // const rect = new fabric.Rect({
            //         left: 10,
            //         top: 10,
            //         fill: 'blue',
            //         width: 100,
            //         height: 100
            //     });
            //     canvas.add(rect);
            
        });

        function addRectangle() {
            const rect = new fabric.Rect({
                left: 10,
                top: 10,
                fill: 'blue',
                width: 30,
                height: 30
            });
            canvas.add(rect);
            // fabricCanvas.requestAll();
        }

        function addCanvas() {
            // Buat div wrapper baru untuk canvas kedua
            const newCanvasContainer = document.createElement("div");
            newCanvasContainer.className = "canvas-container";

            const newEditorCanvas = document.createElement("div");
            newEditorCanvas.className = "editor-canvas"

            // Buat toolbar baru
            const newToolbar = document.createElement("div");
            newToolbar.className = "canvas-toolbar";
            newToolbar.innerHTML = `
                <button onclick="addCanvas()">Add Canvas</button>
                <button onclick="zoomIn()">Zoom In</button>
                <button onclick="zoomOut()">Zoom Out</button>
                <button onclick="deleteCanvas(this)">Delete Canvas</button>
            `;

            // Buat elemen canvas baru
            const newCanvas = document.createElement("canvas");
            newCanvas.width = 500;
            newCanvas.height = 500;
            newCanvas.style.backgroundColor = "white";
            newCanvas.style.border = "1px solid #ddd";
            newCanvas.style.marginTop = "10px";

            // Tambahkan toolbar dan canvas ke dalam container baru
            newCanvasContainer.appendChild(newEditorCanvas);
            newEditorCanvas.appendChild(newToolbar);
            newEditorCanvas.appendChild(newCanvas);

            // Tambahkan container baru ke dalam editor-content
            document.getElementById("editor-content").appendChild(newCanvasContainer);

            // Inisialisasi canvas baru dengan Fabric.js
            const newFabricCanvas = new fabric.Canvas(newCanvas);

            // Fungsi untuk delete hanya untuk canvas ini
            newToolbar.querySelector("button[onclick*='deleteCanvas']").onclick = function() {
                newFabricCanvas.clear();
                newCanvasContainer.remove();
            };
        }

        function zoomIn() {
            fabricCanvas.setZoom(fabricCanvas.getZoom() * 1.1);
        }

        function zoomOut() {
            fabricCanvas.setZoom(fabricCanvas.getZoom() / 1.1);
        }

        function deleteCanvas(button) {
            fabricCanvas.clear();
            button.closest('.canvas-container').remove();
        }

        document.addEventListener("DOMContentLoaded", () => {
            const upperCanvasElements = document.getElementsByClassName('upper-canvas');
    
            for (let i = 0; i < upperCanvasElements.length; i++) {
                upperCanvasElements[i].addEventListener('click', function(event) {
                    console.log('disini');
                });
            }
        });
    </script>
</body>
</html>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fabric.js Multi-Canvas</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.6.0/fabric.min.js"></script>
    <style>
        .canvas-container {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div id="canvas-container">
        <canvas id="canvas-0" width="500" height="500"></canvas>
    </div>
    <button id="add-canvas">Add New Canvas</button>

    <script src="script.js"></script>
</body>
</html>













document.addEventListener('DOMContentLoaded', () => {
    let canvasCount = 1; // Mulai dari 1 karena canvas pertama sudah ada

    // Inisialisasi canvas pertama
    initializeCanvas('canvas-0');

    // Fungsi untuk inisialisasi canvas baru dengan grid kotak otomatis
    function initializeCanvas(canvasId) {
        const canvas = new fabric.Canvas(canvasId, {
            width: 500,
            height: 500,
        });

        // Tambahkan kotak secara otomatis
        addGrid(canvas);
    }

    // Fungsi untuk menambahkan grid kotak 30x30px ke canvas
    function addGrid(canvas) {
        const boxSize = 30;
        const rows = Math.floor(canvas.width / boxSize);
        const cols = Math.floor(canvas.height / boxSize);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const rect = new fabric.Rect({
                    left: i * boxSize,
                    top: j * boxSize,
                    width: boxSize,
                    height: boxSize,
                    fill: 'rgba(200, 200, 200, 0.5)', // Warna kotak
                    selectable: false, // Kotak tidak dapat dipilih
                });
                canvas.add(rect);
            }
        }
    }

    // Event listener untuk tombol tambah canvas baru
    document.getElementById('add-canvas').addEventListener('click', () => {
        const newCanvasId = `canvas-${canvasCount}`;
        canvasCount++;

        // Buat elemen canvas baru
        const newCanvasElement = document.createElement('canvas');
        newCanvasElement.id = newCanvasId;
        newCanvasElement.width = 500;
        newCanvasElement.height = 500;
        newCanvasElement.classList.add('canvas-container');

        // Tambahkan canvas baru ke container
        document.getElementById('canvas-container').appendChild(newCanvasElement);

        // Inisialisasi canvas baru dengan grid
        initializeCanvas(newCanvasId);
    });
});