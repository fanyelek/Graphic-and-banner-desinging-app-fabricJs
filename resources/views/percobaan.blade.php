<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Percobaan Fabric.js</title>

    <link rel="stylesheet" href="/editor/css/left-editor.css">
    <link rel="stylesheet" href="/editor/css/editor.css">
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.6.0/fabric.min.js"></script>
</head>
<body>
    <style>
        /* Pastikan semua elemen tertata di tengah layar */
        body, html {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>

    
    @include('editor.layouts.editor-left')

    <!-- Canvas -->
    <canvas id="fabricCanvas" width="500" height="500" style="border:1px solid #ccc;"></canvas>

    
  <script src="/editor/js/fabricjs.js"></script>
  <script src="/editor/js/editor.js"></script>
  <script src="/editor/js/left-editor.js"></script>
  <script src="/editor/js/left-editor-content.js"></script>

    <script>
        // Inisialisasi kanvas dengan Fabric.js
        var canvas = new fabric.Canvas('fabricCanvas');

        // Membuat objek persegi panjang (rect) dan menambahkannya ke kanvas
        var rect = new fabric.Rect({
            left: 50,
            top: 50,
            fill: 'red',
            width: 100,
            height: 100
        });
        canvas.add(rect); // Menambahkan persegi panjang ke dalam kanvas
        
    </script>
</body>
</html>