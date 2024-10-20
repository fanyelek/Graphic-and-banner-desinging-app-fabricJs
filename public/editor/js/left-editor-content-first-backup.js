



  //=================  Add Text  =======================
  $('#add-paragraph').click(function() {
    let font = 'Arial'
    if (font === '') {
      font = 'Arial'
    }
    let textcolor = '#000'
    let text = new fabric.IText('Click to Edit', {
      fontFamily: font,
      lineHeight: '1',
      charSpacing: '0',
      textAlign: 'center',
      fontWeight: '400',
      fontSize: '12',
      underline: false,
      overline: false,
      linethrough: false,
      fill: textcolor,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true // Ensure uniform scaling
    })
    canvas.add(text)
  })



  $('#add-subtitle').click(function() {
    let font = 'Arial'
    if (font === '') {
      font = 'Arial'
    }
    let textcolor = '#000'
    let text = new fabric.IText('Click to Edit', {
      fontFamily: font,
      lineHeight: '1',
      charSpacing: '0',
      textAlign: 'center',
      fontWeight: 'normal',
      fontSize: '24',
      underline: false,
      overline: false,
      linethrough: false,
      fill: textcolor,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true // Ensure uniform scaling
    })
    canvas.add(text)
  })



  $('#add-title').click(function() {
    let font = 'Arial'
    if (font === '') {
      font = 'Arial'
    }
    let textcolor = '#000'
    let text = new fabric.IText('Click to Edit', {
      fontFamily: font,
      lineHeight: '1',
      charSpacing: '0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '36',
      underline: false,
      overline: false,
      linethrough: false,
      fill: textcolor,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true // Ensure uniform scaling
    })
    canvas.add(text)
  })




   //=================  Add Shape  =======================
// Add Rectangle
$('#add-rectangle').click(function() {
    let rectangle = new fabric.Rect({
        left: 100,
        top: 50,
        width: 200,
        height: 100,
        fill: 'green',
        padding: 10,
        rx: 10,
        ry: 10
    })
    canvas.add(rectangle)
    })

// Add Circle
$('#add-circle').click(function() {
    let circle = new fabric.Circle({
        left: 30,
        top: 30,
        radius: 50,
        strokeWidth: 3,
        stroke: 'black',
        fill: 'grey',
        selectable: true
    });
    canvas.add(circle)
})

$('#add-triangle').click(function() {
    let ecl = new fabric.Triangle({
        left: 30,
        top: 30,
        fill: 'grey',
        selectable: true
    });
    canvas.add(ecl)
})

// Add Ellipse
$('#add-ellipse').click(function() {
    let ellipse = new fabric.Ellipse({
        left: 150,
        top: 50,
        rx: 100, // Horizontal radius
        ry: 50,  // Vertical radius
        fill: 'blue'
    });
    canvas.add(ellipse);
});

// Add Star
$('#add-star').click(function() {
    let starPoints = [
        { x: 100, y: 0 },
        { x: 120, y: 50 },
        { x: 170, y: 50 },
        { x: 130, y: 80 },
        { x: 150, y: 130 },
        { x: 100, y: 100 },
        { x: 50, y: 130 },
        { x: 70, y: 80 },
        { x: 30, y: 50 },
        { x: 80, y: 50 }
    ];

    let star = new fabric.Polygon(starPoints, {
        left: 200,
        top: 100,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 2
    });
    canvas.add(star);
});

// Add Polygon (Triangle in this case)
$('#add-polygon').click(function() {
    // Definisikan titik-titik segilima
    let pentagonPoints = [
        { x: 200, y: 0 },  // Titik atas
        { x: 250, y: 50 }, // Kanan atas
        { x: 225, y: 100 }, // Kanan bawah
        { x: 175, y: 100 }, // Kiri bawah
        { x: 150, y: 50 }   // Kiri atas
    ];

    let pentagon = new fabric.Polygon(pentagonPoints, {
        left: 200,        // Posisi horisontal
        top: 100,         // Posisi vertikal
        fill: 'blue',     // Warna isi
        stroke: 'black',  // Warna garis
        strokeWidth: 2    // Lebar garis
    });
    canvas.add(pentagon);
});



// solid-line

let isDraggingStart; // Flag untuk mengetahui apakah pangkal sedang diseret

$('#solid-line').click(function() {
    
    const canvasWidth = canvas.getWidth();
    const canvasHeight = canvas.getHeight();
    
    // Menghitung titik tengah
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    // console.log("Titik tengah canvas: ", centerX, centerY);
    // Variabel untuk ketebalan garis
    const lineStroke = 2;

    // Membuat garis
    const solidLine = new fabric.Line([centerX - 100, centerY, centerX + 100, centerY], {
        stroke: 'black',
        strokeWidth: lineStroke,
        selectable: true, // Membuat garis bisa dipilih
        hasControls: false,
        lockMovementY: true, // Mengunci pergerakan vertikal
        lockMovementX: true, // Mengunci pergerakan 
    });

    // Membuat marker (lingkaran) di ujung-ujung garis tetapi disembunyikan terlebih dahulu
    const startMarker = new fabric.Circle({
        left: centerX - 100, // Posisi ujung kiri garis
        top: centerY + (lineStroke / 2), // Disesuaikan dengan stroke
        radius: 6,
        fill: null,
        stroke: 'blue',
        strokeWidth: 1,
        originX: 'center',
        originY: 'center',
        visible: false, // Marker tidak terlihat awalnya
        hasControls: false,
        hasBorders: false,
        // selectable: false,
    });

    const endMarker = new fabric.Circle({
        left: centerX + 100, // Posisi ujung kanan garis
        top: centerY + (lineStroke / 2), // Disesuaikan dengan stroke
        radius: 6,
        fill: null,
        stroke: 'blue',
        strokeWidth: 1,
        originX: 'center',
        originY: 'center',
        visible: false, // Marker tidak terlihat awalnya
        hasControls: false,
        hasBorders: false,
        // selectable: false,
    });

    // Menambahkan garis dan marker ke canvas
    canvas.add(solidLine, startMarker, endMarker);

        // Nonaktifkan kontrol sudut, hanya memungkinkan kontrol di sisi-sisinya
        solidLine.controls = fabric.Object.prototype.controls;
        solidLine.setControlVisible('mt', false); // Nonaktifkan kontrol tengah atas
        solidLine.setControlVisible('mb', false); // Nonaktifkan kontrol tengah bawah
        solidLine.setControlVisible('tl', false); // Nonaktifkan kontrol sudut kiri atas
        solidLine.setControlVisible('tr', false); // Nonaktifkan kontrol sudut kanan atas
        solidLine.setControlVisible('bl', false); // Nonaktifkan kontrol sudut kiri bawah
        solidLine.setControlVisible('br', false); // Nonaktifkan kontrol sudut kanan bawah
        solidLine.setControlVisible('mtr', false); // Nonaktifkan kontrol sudut kanan bawah

        // Render ulang canvas untuk memastikan perubahan diterapkan
        canvas.renderAll();
        // Event listener untuk menampilkan marker ketika garis dipilih
    canvas.on('object:selected', function(event) {
        if (event.target === solidLine) { // Memastikan bahwa garis yang dipilih
            // startMarker.set({ visible: true }); // Tampilkan marker
            // endMarker.set({ visible: true });
        }
        canvas.renderAll(); // Render ulang canvas untuk menampilkan perubahan
    });


    // Variabel untuk menyimpan koordinat sebelumnya
    let previousLineCoords = solidLine.calcLinePoints();

    let isThrottled = false; // Flag for throttling


    function updateMarkers() {

        // Ambil posisi baru dari titik awal dan akhir garis
        const currentLineCoords = solidLine.calcLinePoints();
        
        // Hitung selisih antara koordinat x1 sebelum dan sesudah pergeseran
        const deltaX1 = currentLineCoords.x1 - previousLineCoords.x1;
        const deltaX2 = currentLineCoords.x2 + previousLineCoords.x2;
        const deltaY1 = currentLineCoords.y1 - previousLineCoords.y1;

        // Update posisi startMarker berdasarkan pergeseran horizontal dan vertikal
        startMarker.set({
            left: solidLine.left + deltaX1, // Sesuaikan dengan posisi absolute solidLine.left
            top: solidLine.top + deltaY1   // Update posisi vertikal
        });

        // Update endMarker juga
        endMarker.set({
            left: solidLine.left + deltaX2, // Sesuaikan dengan posisi absolute solidLine.left
            top: solidLine.top + currentLineCoords.y2    // Update posisi vertikal
        });

        // Simpan koordinat saat ini sebagai koordinat sebelumnya untuk langkah selanjutnya
        previousLineCoords = currentLineCoords;

        // Render ulang canvas untuk menampilkan perubahan
        canvas.renderAll();

    }
    // Event listener ketika garis dipindahkan
    solidLine.on('moving', function() {
    
        if (!isThrottled) {
            updateMarkers();  // Panggil fungsi update marker
            isThrottled = true;

            // Set timeout untuk throttle, misalnya 30ms
            setTimeout(function() {
                isThrottled = false;
            }, 0); // Frekuensi update bisa disesuaikan (30ms adalah contoh)
        }

    });


    

    // Event listener untuk mendeteksi klik dekat x1, y1
    canvas.on('mouse:down', function(event) {
        if (canvas.getActiveObject() === solidLine) {
            // console.log('disini');
            // Ambil posisi mouse
            const pointer = canvas.getPointer(event.e);
            const distanceToStart = Math.sqrt(Math.pow(pointer.x - solidLine.left + solidLine.calcLinePoints().x1, 2) + Math.pow(pointer.y - solidLine.top + solidLine.calcLinePoints().y1, 2));
            console.log('klik ' + isDraggingStart);
            console.log(distanceToStart);

            // Jika klik dekat pangkal garis (x1, y1)
            // if (distanceToStart < 10) { // 10 adalah jarak toleransi
                isDraggingStart = true; // Set flag untuk menyeret pangkal
            // }
        }
    });

// Event listener untuk mengupdate posisi garis saat mouse bergerak
canvas.on('mouse:move', function(event) {
    // console.log(isDraggingStart);
    if (isDraggingStart) {
        // console.log('disini');
        // Ambil posisi mouse
        const pointer = canvas.getPointer(event.e);

        // Update posisi pangkal garis (x1, y1)
        solidLine.set({
            x1: pointer.x - solidLine.left, // Ubah x1 sesuai posisi mouse
            y1: pointer.y - solidLine.top   // Ubah y1 sesuai posisi mouse
        });

        // Update marker pangkal
        startMarker.set({
            left: pointer.x,
            top: pointer.y
        });

        // Render ulang canvas
        canvas.renderAll();
    }
});

// Event listener untuk menetapkan posisi baru pangkal garis saat mouse dilepas
canvas.on('mouse:up', function() {
    if (isDraggingStart) {
        isDraggingStart = false; // Reset flag saat mouse dilepas
        // Koordinat baru x1, y1 sudah tersimpan pada solidLine
    }
});




});






//Dash Line
let isDrawingDashLine;
let DashLineMode;

$('#dashed-line').click(function() {
    DashLineMode = true;
    let isEditing = false;
    let activePoint = null;
    let activeLine = null;
    isDrawingDashLine = true;
    let lineId = 0;
    let dashedLines = [];
    let isMoving = false; // Status apakah garis sedang dipindahkan
    let offsetX, offsetY; // Untuk menyimpan offset pergerakan saat garis dipindahkan

    // Mode edit garis (ubah kursor saat berada di mode edit)
    function enterEditMode() {
        document.body.style.cursor = 'crosshair'; // Ubah kursor saat mode edit
    }

    function exitEditMode() {
        document.body.style.cursor = 'default'; // Kembalikan kursor normal
    }

    // Fungsi untuk menghitung jarak antara titik dan garis
    function distanceToLine(x, y, line) {
        const A = line.y2 - line.y1;
        const B = line.x1 - line.x2;
        const C = line.x2 * line.y1 - line.x1 * line.y2;
        return Math.abs(A * x + B * y + C) / Math.sqrt(A * A + B * B);
    }

    // Event listener untuk memulai gambar garis manual atau memilih garis yang ada
    
        canvas.on('mouse:down', function(opt) {
            let pointer = canvas.getPointer(opt.e);
    
            // Jika sedang tidak menggambar, periksa apakah pengguna mengklik garis yang ada
            if (!isDrawingDashLine) {

                for (let i = 0; i < dashedLines.length; i++) {
                    let line = dashedLines[i];
                    let distanceToStart = Math.sqrt(Math.pow(pointer.x - line.x1, 2) + Math.pow(pointer.y - line.y1, 2));
                    let distanceToEnd = Math.sqrt(Math.pow(pointer.x - line.x2, 2) + Math.pow(pointer.y - line.y2, 2));
                    let distanceToLineBody = distanceToLine(pointer.x, pointer.y, line);
    
                    // Jika klik dekat salah satu ujung garis, masuk ke mode edit
                    if (distanceToStart < 10) {
                        isEditing = true;
                        activePoint = 'start';
                        activeLine = line;
                        enterEditMode();
                        return;

                    } else if (distanceToEnd < 10) {
                        isEditing = true;
                        activePoint = 'end';
                        activeLine = line;
                        enterEditMode();
                        return;

                    } else if (distanceToLineBody < 10) { 
                        // Jika klik dekat badan garis (tetapi tidak dekat dengan ujung)
                        isMoving = true;
                        activeLine = line;
                        offsetX = pointer.x - line.left; // Hitung offset dari posisi garis ke klik
                        offsetY = pointer.y - line.top;
                        canvas.setActiveObject(line);
                        enterEditMode();
                        return;

                    }
                }
            }

            if(DashLineMode == true){
        
                // Jika tidak ada garis yang dipilih, mulai gambar garis baru
                // isDrawingDashLine = true;
        
                // Buat objek garis baru
                let dashedLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
                    id: `line_${lineId++}`,
                    stroke: 'black',
                    strokeWidth: 2,
                    strokeDashArray: [10, 5], // Dash pattern
                    // selectable: false,
                    // evented: false,
                    lockScalingX: true, // Nonaktifkan scaling pada sumbu X
                    lockScalingY: true, // Nonaktifkan scaling pada sumbu Y
                    hasBorders: true, // Nonaktifkan border
                });
        
                dashedLines.push(dashedLine);
                dashedLine.setControlVisible('tl', false);
                dashedLine.setControlVisible('bl', false);
                dashedLine.setControlVisible('tr', false);
                dashedLine.setControlVisible('br', false);
                dashedLine.setControlVisible('mt', false);
                dashedLine.setControlVisible('mb', false);
                dashedLine.setControlVisible('mtr', false);
                // dashedLine.setControlVisible('ml', false);
                // dashedLine.setControlVisible('mr', false);
                canvas.add(dashedLine);
                
            }
        });

    // Event listener untuk memperbarui posisi garis selama proses menggambar, mengedit, atau memindahkan
    canvas.on('mouse:move', function(opt) {
        // console.log(DashLineMode);
        let pointer = canvas.getPointer(opt.e);

        if (isDrawingDashLine && dashedLines.length > 0) {
            // Update titik akhir dari garis saat mouse bergerak
            let lastLine = dashedLines[dashedLines.length - 1];
            lastLine.set({ x2: pointer.x, y2: pointer.y });
            canvas.renderAll();
        } else if (isEditing && activeLine) {
            // Jika sedang mengedit titik awal atau akhir
            if (activePoint === 'start') {
                activeLine.set({ x1: pointer.x, y1: pointer.y });
            } else if (activePoint === 'end') {
                activeLine.set({ x2: pointer.x, y2: pointer.y });
            }
            canvas.renderAll();
        } else if (isMoving && activeLine) {
            // Jika sedang memindahkan garis
            let newLeft = pointer.x - offsetX;
            let newTop = pointer.y - offsetY;

            // Pindahkan garis tanpa mengubah skala
            let deltaX = newLeft - activeLine.left;
            let deltaY = newTop - activeLine.top;
            activeLine.set({
                x1: activeLine.x1 + deltaX,
                y1: activeLine.y1 + deltaY,
                x2: activeLine.x2 + deltaX,
                y2: activeLine.y2 + deltaY
            });
            activeLine.setCoords(); // Perbarui koordinat
            canvas.renderAll();
        }
    });

    // Event listener untuk menyelesaikan gambar garis, edit, atau pindah
    canvas.on('mouse:up', function() {
        isDrawingDashLine = false;
        isEditing = false;
        isMoving = false;
        activeLine = null;
        activePoint = null;
        exitEditMode();
        canvas.renderAll();
    });
});


 
//Dotted Line
let isDrawingDottedLine;
let DottedLineMode;

$('#dotted-line').click(function() {
    DottedLineMode = true;
    let isEditing = false;
    let activePoint = null;
    let activeLine = null;
    isDrawingDottedLine = true;
    let lineId = 0;
    let dottedLines = [];
    let isMoving = false; // Status apakah garis sedang dipindahkan
    let offsetX, offsetY; // Untuk menyimpan offset pergerakan saat garis dipindahkan

    // Mode edit garis (ubah kursor saat berada di mode edit)
    function enterEditMode() {
        document.body.style.cursor = 'crosshair'; // Ubah kursor saat mode edit
    }

    function exitEditMode() {
        document.body.style.cursor = 'default'; // Kembalikan kursor normal
    }

    // Fungsi untuk menghitung jarak antara titik dan garis
    function distanceToLine(x, y, line) {
        const A = line.y2 - line.y1;
        const B = line.x1 - line.x2;
        const C = line.x2 * line.y1 - line.x1 * line.y2;
        return Math.abs(A * x + B * y + C) / Math.sqrt(A * A + B * B);
    }

    // Event listener untuk memulai gambar garis manual atau memilih garis yang ada
    
    canvas.on('mouse:down', function(opt) {
        let pointer = canvas.getPointer(opt.e);

        // Jika sedang tidak menggambar, periksa apakah pengguna mengklik garis yang ada
        if (!isDrawingDottedLine) {
            for (let i = 0; i < dottedLines.length; i++) {
                let line = dottedLines[i];
                let distanceToStart = Math.sqrt(Math.pow(pointer.x - line.x1, 2) + Math.pow(pointer.y - line.y1, 2));
                let distanceToEnd = Math.sqrt(Math.pow(pointer.x - line.x2, 2) + Math.pow(pointer.y - line.y2, 2));
                let distanceToLineBody = distanceToLine(pointer.x, pointer.y, line);

                // Jika klik dekat salah satu ujung garis, masuk ke mode edit
                if (distanceToStart < 10) {
                    isEditing = true;
                    activePoint = 'start';
                    activeLine = line;
                    enterEditMode();
                    return;
                } else if (distanceToEnd < 10) {
                    isEditing = true;
                    activePoint = 'end';
                    activeLine = line;
                    enterEditMode();
                    return;
                } else if (distanceToLineBody < 10) { 
                    // Jika klik dekat badan garis (tetapi tidak dekat dengan ujung)
                    isMoving = true;
                    activeLine = line;
                    offsetX = pointer.x - line.left; // Hitung offset dari posisi garis ke klik
                    offsetY = pointer.y - line.top;
                    canvas.setActiveObject(line);
                    enterEditMode();
                    return;
                }
            }
        }

        if(DottedLineMode == true){
    
            // Jika tidak ada garis yang dipilih, mulai gambar garis baru
            // Buat objek garis baru
            let dottedLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
                id: `line_${lineId++}`,
                stroke: 'black',
                strokeWidth: 2,
                strokeDashArray: [2, 5], // Dotted pattern
                selectable: false,
                lockScalingX: true, // Nonaktifkan scaling pada sumbu X
                lockScalingY: true, // Nonaktifkan scaling pada sumbu Y
                hasBorders: false, // Nonaktifkan border
            });
    
            dottedLines.push(dottedLine);
            dottedLine.setControlVisible('tl', false);
            dottedLine.setControlVisible('bl', false);
            dottedLine.setControlVisible('tr', false);
            dottedLine.setControlVisible('br', false);
            dottedLine.setControlVisible('mt', false);
            dottedLine.setControlVisible('mb', false);
            dottedLine.setControlVisible('mtr', false);
            dottedLine.setControlVisible('ml', false);
            dottedLine.setControlVisible('mr', false);
            canvas.add(dottedLine);
            
        }
    });

    // Event listener untuk memperbarui posisi garis selama proses menggambar, mengedit, atau memindahkan
    canvas.on('mouse:move', function(opt) {
        let pointer = canvas.getPointer(opt.e);

        if (isDrawingDottedLine && dottedLines.length > 0) {
            // Update titik akhir dari garis saat mouse bergerak
            let lastLine = dottedLines[dottedLines.length - 1];
            lastLine.set({ x2: pointer.x, y2: pointer.y });
            canvas.renderAll();
        } else if (isEditing && activeLine) {
            // Jika sedang mengedit titik awal atau akhir
            if (activePoint === 'start') {
                activeLine.set({ x1: pointer.x, y1: pointer.y });
            } else if (activePoint === 'end') {
                activeLine.set({ x2: pointer.x, y2: pointer.y });
            }
            canvas.renderAll();
        } else if (isMoving && activeLine) {
            // Jika sedang memindahkan garis
            let newLeft = pointer.x - offsetX;
            let newTop = pointer.y - offsetY;

            // Pindahkan garis tanpa mengubah skala
            let deltaX = newLeft - activeLine.left;
            let deltaY = newTop - activeLine.top;
            activeLine.set({
                x1: activeLine.x1 + deltaX,
                y1: activeLine.y1 + deltaY,
                x2: activeLine.x2 + deltaX,
                y2: activeLine.y2 + deltaY
            });
            activeLine.setCoords(); // Perbarui koordinat
            canvas.renderAll();
        }
    });

    // Event listener untuk menyelesaikan gambar garis, edit, atau pindah
    canvas.on('mouse:up', function() {
        isDrawingDottedLine = false;
        isEditing = false;
        isMoving = false;
        activeLine = null;
        activePoint = null;
        exitEditMode();
        canvas.renderAll();
    });
});




//add solid arrow manual
let mouseDown = false;
let arrowHead1;

$('#solid-arrow-line').click(function() {
    canvas.on({
        'mouse:down': startAddingSingleArrowLine,
        'mouse:move': startDrawingSingleArrowLine,
        'mouse:up': stopDrawingSingleArrowLine 
    });
    
    function activateAddingSingleArrowLine() {
        if (addingSingleArrowLineBtnClicked === false) {
            addingSingleArrowLineBtnClicked = true;
    
            canvas.on({
                'mouse:down': startAddingSingleArrowLine,
                'mouse:move': startDrawingSingleArrowLine,
                'mouse:up': stopDrawingSingleArrowLine 
            });
        }
    }

    function startAddingSingleArrowLine(o) {

        mouseDown = true;

        let pointer = canvas.getPointer(o.e);

        line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
            id: 'added-single-arrow-line',
            stroke: 'black',
            strokeWidth: 2,
            selectable: true,
            hasControls: false
        });

        arrowHead1 = new fabric.Polygon([
            {x: 0, y: 0},
            {x: -10, y: -5},
            {x: -10, y: 5}
        ], {
            id: 'arrow-head',
            fill: 'black',
            selectable: true,
            hasControls: false,
            top: pointer.y,
            left: pointer.x,
            originX: 'center',
            originY: 'center'
        });

        canvas.add(line,arrowHead1);
        canvas.renderAll();

    }
    
    function startDrawingSingleArrowLine(o) {
        if (mouseDown === true) {
            let pointer = canvas.getPointer(o.e);
        
            line.set({
                x2: pointer.x,
                y2: pointer.y
            });
        
            arrowHead1.set({
                left: pointer.x,
                top: pointer.y
            });

            let x1 = line.x1;
            let y1 = line.y1;
            let x2 = pointer.x;
            let y2 = pointer.y;

            let verticalHeight = Math.abs(y2 - y1);
            let horizontalWidth = Math.abs(x2 - x1);

            let tanRatio = verticalHeight / horizontalWidth;
            let basicAngle = Math.atan(tanRatio)*180/Math.PI;

            if (x2>x1) {
                if (y2<y1) {
                    arrowHead1.set({
                        angle: -basicAngle
                    });
                }
                else if(y2===y1) {
                    arrowHead1.set({
                        angle: 0
                    });
                }
                else if(y2>y1) {
                    arrowHead1.set({
                        angle: basicAngle
                    });
                }
            }else if (x2 < x1) {
                if (y2 > y1) {
                    arrowHead1.set({
                        angle: 180 - basicAngle
                    });
                } else if (y2 === y1) {
                    arrowHead1.set({
                        angle: 180
                    });
                } else if (y2 < y1) {
                    arrowHead1.set({
                        angle: 180 + basicAngle
                    });
                }
            }

            line.setCoords();
            arrowHead1.setCoords();
            canvas.requestRenderAll();
        }
    }
    
    function stopDrawingSingleArrowLine() {

        canvas.off('mouse:down', startAddingSingleArrowLine);
        canvas.off('mouse:move', startDrawingSingleArrowLine);
        canvas.off('mouse:up', stopDrawingSingleArrowLine);

    }
});


//add dash arrow manual
let mouseDowndash = false;
let arrowHead1dash;

$('#dashed-arrow-line').click(function() {

    let lineId = 0;

    canvas.on({
        'mouse:down': startAddingSingleArrowLinedashed,
        'mouse:move': startDrawingSingleArrowLinedashed,
        'mouse:up': stopDrawingSingleArrowLinedashed 
    });
    
    function activateAddingSingleArrowLine() {
        if (addingSingleArrowLineBtnClicked === false) {
            addingSingleArrowLineBtnClicked = true;
    
            canvas.on({
                'mouse:down': startAddingSingleArrowLine,
                'mouse:move': startDrawingSingleArrowLine,
                'mouse:up': stopDrawingSingleArrowLine 
            });
        }
    }

    function startAddingSingleArrowLinedashed(o) {

        mouseDowndash = true;

        let pointer = canvas.getPointer(o.e);

        line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
            id: `line_${lineId++}`,
            stroke: 'black',
            strokeWidth: 2,
            strokeDashArray: [10, 5], // Dash pattern
            selectable: true,
            // evented: false,
            lockScalingX: true, // Nonaktifkan scaling pada sumbu X
            lockScalingY: true, // Nonaktifkan scaling pada sumbu Y
            hasBorders: false, // Nonaktifkan border
        });

        // line.push(line);


        arrowHead1dash = new fabric.Polygon([
            {x: 0, y: 0},
            {x: -10, y: -5},
            {x: -10, y: 5}
        ], {
            id: 'arrow-head',
            fill: 'black',
            selectable: true,
            hasControls: false,
            top: pointer.y,
            left: pointer.x,
            originX: 'center',
            originY: 'center'
        });

        canvas.add(line,arrowHead1dash);
        canvas.renderAll();

    }
    
    function startDrawingSingleArrowLinedashed(o) {
        if (mouseDowndash === true) {
            let pointer = canvas.getPointer(o.e);
        
            line.set({
                x2: pointer.x,
                y2: pointer.y
            });
        
            arrowHead1dash.set({
                left: pointer.x,
                top: pointer.y
            });

            let x1 = line.x1;
            let y1 = line.y1;
            let x2 = pointer.x;
            let y2 = pointer.y;

            let verticalHeight = Math.abs(y2 - y1);
            let horizontalWidth = Math.abs(x2 - x1);

            let tanRatio = verticalHeight / horizontalWidth;
            let basicAngle = Math.atan(tanRatio)*180/Math.PI;

            if (x2>x1) {
                if (y2<y1) {
                    arrowHead1dash.set({
                        angle: -basicAngle
                    });
                }
                else if(y2===y1) {
                    arrowHead1dash.set({
                        angle: 0
                    });
                }
                else if(y2>y1) {
                    arrowHead1dash.set({
                        angle: basicAngle
                    });
                }
            }else if (x2 < x1) {
                if (y2 > y1) {
                    arrowHead1dash.set({
                        angle: 180 - basicAngle
                    });
                } else if (y2 === y1) {
                    arrowHead1dash.set({
                        angle: 180
                    });
                } else if (y2 < y1) {
                    arrowHead1dash.set({
                        angle: 180 + basicAngle
                    });
                }
            }

            line.setCoords();
            arrowHead1dash.setCoords();
            canvas.requestRenderAll();
        }
    }
    
    function stopDrawingSingleArrowLinedashed() {

        canvas.off('mouse:down', startAddingSingleArrowLinedashed);
        canvas.off('mouse:move', startDrawingSingleArrowLinedashed);
        canvas.off('mouse:up', stopDrawingSingleArrowLinedashed);

    }
});

// Arrow Dash Line
let isDrawingArrowDashLine;
let ArrowDashLineMode;

$('#dashed-arrow-line').click(function() {
    ArrowDashLineMode = true;
    let isEditing = false;
    let activePoint = null;
    let activeLine = null;
    isDrawingArrowDashLine = true;
    let lineId = 0;
    let arrowDashLines = [];
    let isMoving = false; // Status apakah garis sedang dipindahkan
    let offsetX, offsetY; // Untuk menyimpan offset pergerakan saat garis dipindahkan

    // Mode edit garis (ubah kursor saat berada di mode edit)
    function enterEditMode() {
        document.body.style.cursor = 'crosshair'; // Ubah kursor saat mode edit
    }

    function exitEditMode() {
        document.body.style.cursor = 'default'; // Kembalikan kursor normal
    }

    // Fungsi untuk menghitung jarak antara titik dan garis
    function distanceToLine(x, y, line) {
        const A = line.y2 - line.y1;
        const B = line.x1 - line.x2;
        const C = line.x2 * line.y1 - line.x1 * line.y2;
        return Math.abs(A * x + B * y + C) / Math.sqrt(A * A + B * B);
    }

    // Fungsi untuk menggambar panah di ujung garis
    function addArrow(line) {
        let angle = Math.atan2(line.y2 - line.y1, line.x2 - line.x1); // Menghitung sudut panah
        let arrowLength = 20; // Panjang panah
        let arrowWidth = 10; // Lebar panah

        // Hitung koordinat untuk titik panah
        let x3 = line.x2 - arrowLength * Math.cos(angle - Math.PI / 6);
        let y3 = line.y2 - arrowLength * Math.sin(angle - Math.PI / 6);
        let x4 = line.x2 - arrowLength * Math.cos(angle + Math.PI / 6);
        let y4 = line.y2 - arrowLength * Math.sin(angle + Math.PI / 6);

        // Buat panah sebagai segitiga
        let arrow = new fabric.Polygon([ 
            { x: line.x2, y: line.y2 },
            { x: x3, y: y3 },
            { x: x4, y: y4 }
        ], {
            fill: 'black',
            selectable: false,
            evented: false
        });

        return arrow;
    }

    // Event listener untuk memulai gambar garis panah dashline atau memilih garis yang ada
    canvas.on('mouse:down', function(opt) {
        let pointer = canvas.getPointer(opt.e);

        // Jika sedang tidak menggambar, periksa apakah pengguna mengklik garis yang ada
        if (!isDrawingArrowDashLine) {
            for (let i = 0; i < arrowDashLines.length; i++) {
                let line = arrowDashLines[i].line;
                let distanceToStart = Math.sqrt(Math.pow(pointer.x - line.x1, 2) + Math.pow(pointer.y - line.y1, 2));
                let distanceToEnd = Math.sqrt(Math.pow(pointer.x - line.x2, 2) + Math.pow(pointer.y - line.y2, 2));
                let distanceToLineBody = distanceToLine(pointer.x, pointer.y, line);

                // Jika klik dekat salah satu ujung garis, masuk ke mode edit
                if (distanceToStart < 10) {
                    isEditing = true;
                    activePoint = 'start';
                    activeLine = line;
                    enterEditMode();
                    return;
                } else if (distanceToEnd < 10) {
                    isEditing = true;
                    activePoint = 'end';
                    activeLine = line;
                    enterEditMode();
                    return;
                } else if (distanceToLineBody < 10) { 
                    // Jika klik dekat badan garis (tetapi tidak dekat dengan ujung)
                    isMoving = true;
                    activeLine = line;
                    offsetX = pointer.x - line.left; // Hitung offset dari posisi garis ke klik
                    offsetY = pointer.y - line.top;
                    canvas.setActiveObject(line);
                    enterEditMode();
                    return;
                }
            }
        }

        if (ArrowDashLineMode == true) {
            // Buat objek garis baru dengan dashline dan panah
            let dashedLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
                id: `line_${lineId++}`,
                stroke: 'black',
                strokeWidth: 2,
                strokeDashArray: [10, 5], // Dash pattern
                selectable: false,
                lockScalingX: true, // Nonaktifkan scaling pada sumbu X
                lockScalingY: true, // Nonaktifkan scaling pada sumbu Y
                hasBorders: false, // Nonaktifkan border
            });

            let arrow = addArrow(dashedLine); // Tambahkan panah di ujung

            // Simpan garis dan panah
            arrowDashLines.push({ line: dashedLine, arrow: arrow });

            dashedLine.setControlVisible('tl', false);
            dashedLine.setControlVisible('bl', false);
            dashedLine.setControlVisible('tr', false);
            dashedLine.setControlVisible('br', false);
            dashedLine.setControlVisible('mt', false);
            dashedLine.setControlVisible('mb', false);
            dashedLine.setControlVisible('mtr', false);
            dashedLine.setControlVisible('ml', false);
            dashedLine.setControlVisible('mr', false);
            canvas.add(dashedLine);
            canvas.add(arrow);
        }
    });

    // Event listener untuk memperbarui posisi garis dan panah selama proses menggambar, mengedit, atau memindahkan
    canvas.on('mouse:move', function(opt) {
        let pointer = canvas.getPointer(opt.e);

        if (isDrawingArrowDashLine && arrowDashLines.length > 0) {
            // Update titik akhir dari garis saat mouse bergerak
            let lastLine = arrowDashLines[arrowDashLines.length - 1].line;
            lastLine.set({ x2: pointer.x, y2: pointer.y });
            let arrow = arrowDashLines[arrowDashLines.length - 1].arrow;

            // Hapus panah sebelumnya dan tambahkan panah baru di ujung yang diperbarui
            canvas.remove(arrow);
            arrow = addArrow(lastLine);
            arrowDashLines[arrowDashLines.length - 1].arrow = arrow;
            canvas.add(arrow);

            canvas.renderAll();
        } else if (isEditing && activeLine) {
            // Jika sedang mengedit titik awal atau akhir
            if (activePoint === 'start') {
                activeLine.set({ x1: pointer.x, y1: pointer.y });
            } else if (activePoint === 'end') {
                activeLine.set({ x2: pointer.x, y2: pointer.y });
            }
            canvas.renderAll();
        } else if (isMoving && activeLine) {
            // Jika sedang memindahkan garis
            let newLeft = pointer.x - offsetX;
            let newTop = pointer.y - offsetY;

            // Pindahkan garis tanpa mengubah skala
            let deltaX = newLeft - activeLine.left;
            let deltaY = newTop - activeLine.top;
            activeLine.set({
                x1: activeLine.x1 + deltaX,
                y1: activeLine.y1 + deltaY,
                x2: activeLine.x2 + deltaX,
                y2: activeLine.y2 + deltaY
            });
            activeLine.setCoords(); // Perbarui koordinat
            canvas.renderAll();
        }
    });

    // Event listener untuk menyelesaikan gambar garis, edit, atau pindah
    canvas.on('mouse:up', function() {
        isDrawingArrowDashLine = false;
        isEditing = false;
        isMoving = false;
        activeLine = null;
        activePoint = null;
        exitEditMode();
        canvas.renderAll();
    });
});




// circle-line
$('#circle-line').click(function() {
    // Garis
let lineWithCircleMarkers = new fabric.Line([50, 350, 250, 350], {
    stroke: 'black',
    strokeWidth: 2
});

// Lingkaran pertama di ujung kiri garis
let circleMarker1 = new fabric.Circle({
    left: 50,       // Sama dengan titik awal garis
    top: 350,       // Sama dengan titik vertikal garis
    radius: 5,      // Radius lingkaran
    fill: 'black',
    originX: 'center', // Pastikan lingkaran ditengah berdasarkan left
    originY: 'center'  // Pastikan lingkaran ditengah berdasarkan top
});

// Lingkaran kedua di ujung kanan garis
let circleMarker2 = new fabric.Circle({
    left: 250,      // Sama dengan titik akhir garis
    top: 350,       // Sama dengan titik vertikal garis
    radius: 5,
    fill: 'black',
    originX: 'center',
    originY: 'center'
});

// Menambahkan garis dan lingkaran ke canvas sebagai grup
let lineWithMarkersGroup = new fabric.Group([lineWithCircleMarkers, circleMarker1, circleMarker2], {
    left: 50,   // Posisi grup secara keseluruhan
    top: 350
});

// Menambahkan grup ke canvas
canvas.add(lineWithMarkersGroup);

lineWithMarkersGroup.controls = fabric.Object.prototype.controls;
lineWithMarkersGroup.setControlVisible('mt', false); // Nonaktifkan kontrol tengah atas
lineWithMarkersGroup.setControlVisible('mb', false); // Nonaktifkan kontrol tengah bawah
lineWithMarkersGroup.setControlVisible('tl', false); // Nonaktifkan kontrol sudut kiri atas
lineWithMarkersGroup.setControlVisible('tr', false); // Nonaktifkan kontrol sudut kanan atas
lineWithMarkersGroup.setControlVisible('bl', false); // Nonaktifkan kontrol sudut kiri bawah
lineWithMarkersGroup.setControlVisible('br', false); // Nonaktifkan kontrol sudut kanan bawah

// Render ulang canvas untuk memastikan perubahan diterapkan
canvas.renderAll();
});




// square-line
$('#square-line').click(function() {
    // Garis
let lineWithSquareMarkers = new fabric.Line([50, 400, 250, 400], {
    stroke: 'black',
    strokeWidth: 2
});

// Kotak pertama di ujung kiri garis
let squareMarker1 = new fabric.Rect({
    left: 50,         // Titik awal garis
    top: 400,         // Titik vertikal dari garis
    width: 10,
    height: 10,
    fill: 'black',
    originX: 'center', // Pastikan kotak ditengah berdasarkan left
    originY: 'center'  // Pastikan kotak ditengah berdasarkan top
});

// Kotak kedua di ujung kanan garis
let squareMarker2 = new fabric.Rect({
    left: 250,        // Titik akhir garis
    top: 400,         // Titik vertikal dari garis
    width: 10,
    height: 10,
    fill: 'black',
    originX: 'center',
    originY: 'center'
});

// Menambahkan garis dan kotak ke canvas sebagai grup
let lineWithSquareGroup = new fabric.Group([lineWithSquareMarkers, squareMarker1, squareMarker2], {
    left: 50,   // Posisi grup secara keseluruhan
    top: 400
});

// Menambahkan grup ke canvas
canvas.add(lineWithSquareGroup);

lineWithSquareGroup.controls = fabric.Object.prototype.controls;
lineWithSquareGroup.setControlVisible('mt', false); // Nonaktifkan kontrol tengah atas
lineWithSquareGroup.setControlVisible('mb', false); // Nonaktifkan kontrol tengah bawah
lineWithSquareGroup.setControlVisible('tl', false); // Nonaktifkan kontrol sudut kiri atas
lineWithSquareGroup.setControlVisible('tr', false); // Nonaktifkan kontrol sudut kanan atas
lineWithSquareGroup.setControlVisible('bl', false); // Nonaktifkan kontrol sudut kiri bawah
lineWithSquareGroup.setControlVisible('br', false); // Nonaktifkan kontrol sudut kanan bawah

// Render ulang canvas untuk memastikan perubahan diterapkan
canvas.renderAll();
});




// diamond-line
$('#diamond-line').click(function() {
    // Garis
    let lineWithDiamondMarkers = new fabric.Line([50, 450, 250, 450], {
        stroke: 'black',
        strokeWidth: 2
    });

    // Diamond pertama di ujung kiri garis
    let diamondMarker1 = new fabric.Rect({
        left: 50,         // Titik awal garis
        top: 450,         // Titik vertikal dari garis
        width: 10,
        height: 10,
        fill: 'black',
        originX: 'center', // Pastikan diamond ditengah berdasarkan left
        originY: 'center', // Pastikan diamond ditengah berdasarkan top
        angle: 45         // Rotasi untuk membuat bentuk diamond
    });

    // Diamond kedua di ujung kanan garis
    let diamondMarker2 = new fabric.Rect({
        left: 250,        // Titik akhir garis
        top: 450,         // Titik vertikal dari garis
        width: 10,
        height: 10,
        fill: 'black',
        originX: 'center',
        originY: 'center',
        angle: 45         // Rotasi untuk membuat bentuk diamond
    });

    // Menambahkan garis dan diamond ke canvas sebagai grup
    let lineWithDiamondGroup = new fabric.Group([lineWithDiamondMarkers, diamondMarker1, diamondMarker2], {
        left: 50,   // Posisi grup secara keseluruhan
        top: 450
    });

    // Menambahkan grup ke canvas
    canvas.add(lineWithDiamondGroup);

    lineWithDiamondGroup.controls = fabric.Object.prototype.controls;
    lineWithDiamondGroup.setControlVisible('mt', false); // Nonaktifkan kontrol tengah atas
    lineWithDiamondGroup.setControlVisible('mb', false); // Nonaktifkan kontrol tengah bawah
    lineWithDiamondGroup.setControlVisible('tl', false); // Nonaktifkan kontrol sudut kiri atas
    lineWithDiamondGroup.setControlVisible('tr', false); // Nonaktifkan kontrol sudut kanan atas
    lineWithDiamondGroup.setControlVisible('bl', false); // Nonaktifkan kontrol sudut kiri bawah
    lineWithDiamondGroup.setControlVisible('br', false); // Nonaktifkan kontrol sudut kanan bawah

    // Render ulang canvas untuk memastikan perubahan diterapkan
    canvas.renderAll();
});

    
    
    //=================  Add Quote  =======================
    // Add Quote
    $('#add-quote').click(function() {
        let font = 'Georgia'; // Change the font to suit a quote style
        let textcolor = '#333'; // Darker color for quotes
        let text = new fabric.IText('“Insert Quote Here”', {
          fontFamily: font,
          fontStyle: 'italic', // Italic style for quotes
          lineHeight: '1.2',
          charSpacing: '0',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '18', // Slightly larger for quotes
          underline: false,
          fill: textcolor,
          left: 100,
          top: 100,
          objecttype: 'quote',
          lockUniScaling: true // Ensure uniform scaling

        });
        canvas.add(text);
    });



    //=================  Add Annotations  =======================
    // Add Annotations
    $('#add-annotation').click(function() {
        let font = 'Arial';
        let textcolor = '#ff9900'; // Orange color for annotation
        let text = new fabric.IText('Annotation: Add your notes here', {
          fontFamily: font,
          lineHeight: '1.4',
          charSpacing: '0',
          textAlign: 'left',
          fontWeight: 'bold', // Bold text for annotations
          fontSize: '14', // Medium font size for annotations
          underline: true, // Underline to signify annotation
          fill: textcolor,
          left: 100,
          top: 100,
          objecttype: 'annotation',
          lockUniScaling: true // Ensure uniform scaling
        });
        canvas.add(text);
    });





   //=================  Add List  =======================
   // Add Bullet List
let listCounter = 0; // Counter for bullet list ID
let objectCounter = 0; // Counter for individual object ID

$('#add-bullet-list').click(function() {
    listCounter++; // Increment bullet list ID for each new list
    let bulletListId = `bulletList-${listCounter}`; // Unique ID for this bullet list
    let bulletListText = ['• Item', '• Item', '• Item']; // Initial bullet list
    
    // Function to create new text lines and mark them as bullet items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify bullet list and object
        textItem.isBullet = true;
        textItem.bulletListId = bulletListId; // ID for bullet list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    bulletListText.forEach(function(line, index) {
        let bulletText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(bulletText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the bullet list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isBullet) {
        let newLineContent = '• Edit here'; // New bullet
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new bullet below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new bullet below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same bulletListId as the active object and a new unique objectId
        newText.isBullet = true;
        newText.bulletListId = activeObject.bulletListId; // Use the same bullet list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same bullet list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.bulletListId === activeObject.bulletListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift objects down and re-render
        objectsToShift.forEach(obj => {
            obj.top += 20; // Shift objects down
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new bullet
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});


// Add Number List
let numberlistCounter = 0; // Counter for bullet list ID
let numberobjectCounter = 0; // Counter for individual object ID
$('#add-number-list').click(function() {
    listCounter++; // Increment bullet list ID for each new list
    let numberListId = `bulletList-${numberlistCounter}`; // Unique ID for this bullet list
    let numberListText = ['1. Item', '2. Item', '3. Item']; // Initial bullet list

    // Function to create new text lines and mark them as bullet items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify bullet list and object
        textItem.isNumber = true;
        textItem.numberListId = numberListId; // ID for bullet list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    numberListText.forEach(function(line, index) {
        let numberText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(numberText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the bullet list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isNumber) {
        let activeNumber = parseInt(activeObject.text.split('.')[0]); // Extract the current number
        let newLineContent = `${activeNumber + 1}. Edit here`; // New numbered item
        
        // let newLineContent = '• Edit here'; // New bullet
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new bullet below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new bullet below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same bulletListId as the active object and a new unique objectId
        newText.isNumber = true;
        newText.numberListId = activeObject.numberListId; // Use the same bullet list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same bullet list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.numberListId === activeObject.numberListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift the objects below the active one and update numbering
        let startIndex = objectsToShift.findIndex(obj => obj.objectId === activeObject.objectId);
        for (let i = startIndex + 1; i < objectsToShift.length; i++) {
            let obj = objectsToShift[i];
            obj.top += 20; // Shift objects down
            let currentNumber = parseInt(obj.text.split('.')[0]); // Extract current number
            obj.text = `${currentNumber + 1}. ${obj.text.split('. ')[1]}`; // Update number
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        }

        // // Shift objects down and re-render
        // objectsToShift.forEach(obj => {
        //     obj.top += 20; // Shift objects down
        //     obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        // });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new bullet
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});




// Add Checklist
let listChecklistCounter = 0; // Counter for bullet list ID
let objectChecklistCounter = 0; // Counter for individual object ID

$('#add-checklist').click(function() {
    
    listCounter++; // Increment Checklist list ID for each new list
    let ChecklistListId = `checklistList-${listCounter}`; // Unique ID for this Checklist list
    let ChecklistListText = ['☐ Item', '☐ Item', '☐ Item']; // Initial Checklist list
    
    // Function to create new text lines and mark them as Checklist items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify Checklist list and object
        textItem.isChecklist = true;
        textItem.ChecklistListId = ChecklistListId; // ID for Checklist list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    ChecklistListText.forEach(function(line, index) {
        let ChecklistText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(ChecklistText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the Checklist list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isChecklist) {
        let newLineContent = '☐ Edit here'; // New Checklist
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new Checklist below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new Checklist below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same ChecklistListId as the active object and a new unique objectId
        newText.isChecklist = true;
        newText.ChecklistListId = activeObject.ChecklistListId; // Use the same Checklist list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same Checklist list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.ChecklistListId === activeObject.ChecklistListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift objects down and re-render
        objectsToShift.forEach(obj => {
            obj.top += 20; // Shift objects down
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new Checklist
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});




// Bullet Styles
let listBulletCircleCounter = 0; // Counter for bullet list ID
let objectBulletCircleCounter = 0; // Counter for individual object ID

$('#bullet-circle').click(function() {
    
    listCounter++; // Increment BulletCircle list ID for each new list
    let BulletCircleListId = `BulletCircleList-${listCounter}`; // Unique ID for this BulletCircle list
    let BulletCircleListText = ['○ Item', '○ Item', '○ Item']; // Initial BulletCircle list
    
    // Function to create new text lines and mark them as BulletCircle items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify BulletCircle list and object
        textItem.isBulletCircle = true;
        textItem.BulletCircleListId = BulletCircleListId; // ID for BulletCircle list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    BulletCircleListText.forEach(function(line, index) {
        let BulletCircleText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(BulletCircleText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the BulletCircle list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isBulletCircle) {
        let newLineContent = '○ Edit here'; // New BulletCircle
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new BulletCircle below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new BulletCircle below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same BulletCircleListId as the active object and a new unique objectId
        newText.isBulletCircle = true;
        newText.BulletCircleListId = activeObject.BulletCircleListId; // Use the same BulletCircle list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same BulletCircle list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.BulletCircleListId === activeObject.BulletCircleListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift objects down and re-render
        objectsToShift.forEach(obj => {
            obj.top += 20; // Shift objects down
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new BulletCircle
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});



// Add Roman List
let listRomanCounter = 0; // Counter for bullet list ID
let objectRomanCounter = 0; // Counter for individual object ID

$('#number-roman').click(function() {
    
    listCounter++; // Increment Roman list ID for each new list
    let RomanListId = `RomanList-${listCounter}`; // Unique ID for this Roman list
    let RomanListText = ['I. Item', 'II. Item', 'III. Item', 'IV. Item', 'V. Item']; // Initial Roman list
    
    // Function to create new text lines and mark them as Roman items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify Roman list and object
        textItem.isRoman = true;
        textItem.RomanListId = RomanListId; // ID for Roman list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    RomanListText.forEach(function(line, index) {
        let RomanText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(RomanText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the Roman list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isRoman) {
        let newLineContent = '○ Edit here'; // New Roman
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new Roman below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new Roman below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same RomanListId as the active object and a new unique objectId
        newText.isRoman = true;
        newText.RomanListId = activeObject.RomanListId; // Use the same Roman list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same Roman list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.RomanListId === activeObject.RomanListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift objects down and re-render
        objectsToShift.forEach(obj => {
            obj.top += 20; // Shift objects down
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new Roman
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});



// Add Alpha List
let listAlphaCounter = 0; // Counter for bullet list ID
let objectAlphaCounter = 0; // Counter for individual object ID

$('#number-alpha').click(function() {
    
    listCounter++; // Increment Alpha list ID for each new list
    let AlphaListId = `AlphaList-${listCounter}`; // Unique ID for this Alpha list
    let AlphaListText = ['a. Item', 'b. Item', 'c. Item', 'd. Item', 'e. Item']; // Initial Alpha list
    
    // Function to create new text lines and mark them as Alpha items
    function addTextLine(content, topPosition) {
        objectCounter++; // Increment object ID for each new object
        let textItem = new fabric.IText(content, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: 100,
            top: topPosition,
            lockUniScaling: true // Ensure uniform scaling
        });
        
        // Add custom properties to identify Alpha list and object
        textItem.isAlpha = true;
        textItem.AlphaListId = AlphaListId; // ID for Alpha list
        textItem.objectId = `object-${objectCounter}`; // Unique ID for each object
        
        return textItem;
    }

    // Add initial text to the canvas
    AlphaListText.forEach(function(line, index) {
        let AlphaText = addTextLine(line, 100 + (index * 20)); // Positioning new text
        canvas.add(AlphaText);
    });
});

// Ensure keydown event is only added once
document.addEventListener('keydown', function(e) {
    let activeObject = canvas.getActiveObject();

    // Check if the active object is part of the Alpha list and the Enter key is pressed
    if (e.key === 'Enter' && activeObject && activeObject.isAlpha) {
        let newLineContent = '○ Edit here'; // New Alpha
        objectCounter++; // Increment object ID for the new object

        // Get the position of the active object and place the new Alpha below it
        let newText = new fabric.IText(newLineContent, {
            fontFamily: 'Arial',
            fontSize: 16,
            textAlign: 'left',
            fill: '#000',
            left: activeObject.left, // Use the same left position as the active object
            top: activeObject.top + 20, // Place the new Alpha below the active object            
            lockUniScaling: true // Ensure uniform scaling
        });

        // Assign the same AlphaListId as the active object and a new unique objectId
        newText.isAlpha = true;
        newText.AlphaListId = activeObject.AlphaListId; // Use the same Alpha list ID
        newText.objectId = `object-${objectCounter}`; // Unique ID for the new object

        // Find the other objects in the same Alpha list and shift them down if necessary
        let objectsToShift = canvas.getObjects().filter(obj => 
            obj.AlphaListId === activeObject.AlphaListId && obj.objectId !== activeObject.objectId && obj.top > activeObject.top
        );
        
        // Shift objects down and re-render
        objectsToShift.forEach(obj => {
            obj.top += 20; // Shift objects down
            obj.setCoords(); // Ensure that Fabric.js knows the object's new position
        });

        // Add new text and refresh canvas
        canvas.add(newText);
        canvas.setActiveObject(newText); // Set focus on the new Alpha
        canvas.renderAll(); // Re-render the canvas to show changes

        // Optional: Bring all objects in the list to front to avoid z-index issues
        objectsToShift.forEach(obj => obj.bringToFront());
        newText.bringToFront(); // Bring the newly added text to the front
    }
});

