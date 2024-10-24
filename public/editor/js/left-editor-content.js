



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
      padding: 10,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true, // Ensure uniform scaling
      // Control styles
      borderColor: '#0C8CE9',       // Border color around the object
      cornerColor: 'white',         // Corner control fill color (white)
      cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
      cornerStyle: 'circle',        // Make corners circular
      cornerSize: 10,               // Size of the corner controls
      transparentCorners: false,    // Ensure corners are not transparent
    })
    canvas.add(text)
    canvas.setActiveObject(text);
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
      padding: 10,
      underline: false,
      overline: false,
      linethrough: false,
      fill: textcolor,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true, // Ensure uniform scaling
      borderColor: '#0C8CE9',       // Border color around the object
      cornerColor: 'white',         // Corner control fill color (white)
      cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
      cornerStyle: 'circle',        // Make corners circular
      cornerSize: 10,               // Size of the corner controls
      transparentCorners: false,    // Ensure corners are not transparent
    })
    canvas.add(text)
    
    canvas.setActiveObject(text);
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
      padding: 10,
      underline: false,
      overline: false,
      linethrough: false,
      fill: textcolor,
      left: 100,
      top: 100,
      objecttype: 'text',
      lockUniScaling: true, // Ensure uniform scaling
      borderColor: '#0C8CE9',       // Border color around the object
      cornerColor: 'white',         // Corner control fill color (white)
      cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
      cornerStyle: 'circle',        // Make corners circular
      cornerSize: 10,               // Size of the corner controls
      transparentCorners: false,    // Ensure corners are not transparent
    })
    canvas.add(text)
    
    canvas.setActiveObject(text);
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
        ry: 10,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    })
    canvas.add(rectangle);
    canvas.setActiveObject(rectangle);
    })

// Add Circle
$('#add-circle').click(function() {
    let circle = new fabric.Circle({
        left: 30,
        top: 30,
        radius: 50,
        strokeWidth: 3,
        padding: 10,
        stroke: 'black',
        fill: 'grey',
        selectable: true,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    });
    canvas.add(circle);
    canvas.setActiveObject(circle);
})

$('#add-triangle').click(function() {
    let ecl = new fabric.Triangle({
        left: 30,
        top: 30,
        fill: 'grey',
        selectable: true,
        padding: 10,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    });
    canvas.add(ecl);
    canvas.setActiveObject(ecl);
})

// Add Ellipse
$('#add-ellipse').click(function() {
    let ellipse = new fabric.Ellipse({
        left: 150,
        top: 50,
        rx: 100, // Horizontal radius
        ry: 50,  // Vertical radius
        padding: 10,
        fill: 'blue',
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    });
    canvas.add(ellipse);
    canvas.setActiveObject(ellipse);
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
        padding: 10,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 2,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    });
    canvas.add(star);
    canvas.setActiveObject(star);
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
        strokeWidth: 2,    // Lebar garis
        padding: 10,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    });
    canvas.add(pentagon);
    canvas.setActiveObject(pentagon);
});




















// ====================================================================================
// ====================                                        ========================
// ====================           ADDING SOLID LINE            ========================
// ====================                                        ========================
// ====================================================================================



let AddingLineBtn = document.getElementById('solid-line');

AddingLineBtn.addEventListener('click', activateAddingLine);

function activateAddingLine(){
    canvas.defaultCursor = 'crosshair';

    canvas.on('mouse:down', startAddingLine);
    canvas.on('mouse:move', startDrawingLine);
    canvas.on('mouse:up', stopAddingLine);

    canvas.discardActiveObject();
    canvas.renderAll();
    canvas.selection = false;  

    canvas.getObjects().forEach(o => {
        if(o.id==='solid-line'){

            if (!o.prevHoverCursor) {
                o.prevHoverCursor = canvas.defaultCursor || 'default';  // Simpan nilai hoverCursor saat ini atau gunakan 'default' jika tidak ada
            }

            o.set({
                selectable: false,
                hoverCursor: o.prevHoverCursor
            })
        }
    });
}

let line;
let MouseDown = false;

function startAddingLine(o){
    MouseDown = true;
    let pointer = canvas.getPointer(o.e);

    line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        id: 'solid-line',
        stroke: 'red',
        strokeWidth: 15,
        hasControls: false,
        borderColor: '#0C8CE9',       // Border color around the object
    });

    canvas.add(line);
    canvas.requestRenderAll();
}

function startDrawingLine(o){
    if(MouseDown === true){
        let pointer = canvas.getPointer(o.e);
    
        line.set({
            x2: pointer.x,
            y2: pointer.y
        });
        canvas.requestRenderAll();
    }
}

function stopAddingLine(){
    canvas.defaultCursor = 'default';

    canvas.getObjects().forEach(o => {
        if(o.id==='solid-line'){

            if(!o.prehoverCursor){
                o.prehoverCursor = 'all-scroll';
            }

            o.set({
                selectable: true,
                hoverCursor: o.prehoverCursor
            })
        }
    });
    
    line.setCoords();
    MouseDown = false;

    canvas.off('mouse:down', startAddingLine);
    canvas.off('mouse:move', startDrawingLine);
    canvas.off('mouse:up', stopAddingLine);

    canvas.selection = true;
    
    canvas.defaultCursor = 'auto';
}


$(document).ready(function() {

    canvas.on({
        'object:moved': updateNewLineCoordinates,
        'selection:created': updateNewLineCoordinates,
        'selection:updated': updateNewLineCoordinates,
        'mouse:dblclick': addingControlPoints
    });

    let newLineCoords = {};
    
    function updateNewLineCoordinates(o){
        newLineCoords = {};
        let obj = o.target;
        
        if (obj.id==='solid-line'){
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;

            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;

            newLineCoords = {
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            }

            obj.set({
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            });
            obj.setCoords();
        }
    }


    function addingControlPoints(o){
        let obj = o.target;
        
        if(!obj){
            
            return;

        } else { 
            if (obj.id==='solid-line'){
                
                obj.set({
                    label: 'selected-line',
                });

                let pointer1 = new fabric.Circle({
                    id: 'pointer1',
                    radius: obj.strokeWidth*2.5,
                    fill: 'white',
                    top: newLineCoords.y1,
                    left: newLineCoords.x1,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 2,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                let pointer2 = new fabric.Circle({
                    id: 'pointer2',
                    radius: obj.strokeWidth *2.5,
                    fill: 'white',
                    top: newLineCoords.y2,
                    left: newLineCoords.x2,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 2,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                canvas.add(pointer1,pointer2);
                canvas.setActiveObject(pointer2);
                canvas.requestRenderAll();

                canvas.on({
                    'object:moving': endPointOfLineToFollowPointer,
                    'selection:cleared': removePointersOnSelectionCleared,
                    'selection:updated': removePointersOnSelectionUpdated
                });
            } 
        }  
    }

    function removePointersOnSelectionUpdated(o){
        let obj = o.target;

        if(obj.id === 'solid-line'){
            removePointersOnSelectionCleared();
        }
    }

    function removePointersOnSelectionCleared(){
        let pointersToRemove = [];

        canvas.getObjects().forEach(o => {
            if(o.id==='pointer1' || o.id==='pointer2'){
                pointersToRemove.push(o);
            }
    
            if(o.label === 'selected-line'){
                
                o.set({
                    label: '',
                });
            }
        });

        pointersToRemove.forEach(pointer => {
            canvas.remove(pointer);
        });
        
        canvas.requestRenderAll();
    }

    function endPointOfLineToFollowPointer(o){
        let obj = o.target;

        if(obj.id==='pointer1'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='solid-line' && o.label==='selected-line'){
                    o.set({
                    x1: obj.left,
                    y1: obj.top
                });
                o.setCoords();
                }
            });
        } else if(obj.id==='pointer2'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='solid-line' && o.label==='selected-line'){
                    o.set({
                        x2: obj.left,
                        y2: obj.top
                    });
                    o.setCoords();
                }
            });
        } 
    }
});













// ====================================================================================
// ====================                                        ========================
// ====================            ADDING DASH LINE            ========================
// ====================                                        ========================
// ====================================================================================


// dash-line
let AddingDashLineBtn = document.getElementById('dashed-line');

AddingDashLineBtn.addEventListener('click', activateAddingDashline);

function activateAddingDashline(){
    canvas.defaultCursor = 'crosshair';
    
    canvas.on('mouse:down', StartAddingDashLine);
    canvas.on('mouse:move', StartDrawingDashLine);
    canvas.on('mouse:up', StopAddingDashLine);

    canvas.discardActiveObject();
    canvas.renderAll();
    canvas.selection = false;

    canvas.getObjects().forEach(o => {
        if(o.id==='dash-line'){

            if (!o.prevHoverCursor) {
                o.prevHoverCursor = canvas.defaultCursor || 'default';  // Simpan nilai hoverCursor saat ini atau gunakan 'default' jika tidak ada
            }

            o.set({
                selectable: false,
                hoverCursor: o.prevHoverCursor
            })
        }
    });

}


let DashLine;
let MouseDownDashLine = false;
function StartAddingDashLine(o){
    MouseDownDashLine = true;
    let pointer = canvas.getPointer(o.e);

    DashLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y],{
        id: 'dash-line',
        stroke: 'red',
        strokeWidth: 3,
        strokeDashArray: [10, 5],
        hasControls: false,
        borderColor: '#0C8CE9',       // Border color around the object
    });

    canvas.add(DashLine);
    canvas.requestRenderAll();
}



function StartDrawingDashLine(o){

    if(MouseDownDashLine === true){

        let pointer = canvas.getPointer(o.e);
    
        DashLine.set({
    
            x2: pointer.x,
            y2: pointer.y
        });

        canvas.requestRenderAll();

    }
}



function StopAddingDashLine(){
    canvas.defaultCursor = 'default';

    canvas.getObjects().forEach(o => {
        if(o.id==='dash-line'){

            if(!o.prehoverCursor){
                o.prehoverCursor = 'all-scroll';
            }

            o.set({
                selectable: true,
                hoverCursor: o.prehoverCursor
            })
        }
    });

    MouseDownDashLine = false;

    canvas.off('mouse:down', StartAddingDashLine);
    canvas.off('mouse:move', StartDrawingDashLine);
    canvas.off('mouse:up', StopAddingDashLine);

    DashLine.setCoords();
    canvas.selection = true;

    
    canvas.defaultCursor = 'auto';

}

$(document).ready(function(){

    canvas.on({
        'mouse:dblclick': addingDashLineControlPoints,
        'object:moved': updateNewDashLineCoordinates,
    });

    function addingDashLineControlPoints(o){
        let obj = o.target;
        if(!obj){
            
            return;

        } else { 
            if (obj.id==='dash-line'){
                
                obj.set({
                    label: 'selected-line',
                });

                let pointer1 = new fabric.Circle({
                    id: 'pointer1',
                    radius: obj.strokeWidth*2.5,
                    fill: 'white',
                    top: obj.y1,
                    left: obj.x1,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 2,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                let pointer2 = new fabric.Circle({
                    id: 'pointer2',
                    radius: obj.strokeWidth *2.5,
                    fill: 'white',
                    top: obj.y2,
                    left: obj.x2,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 1,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                canvas.add(pointer1,pointer2);
                canvas.setActiveObject(pointer2);
                canvas.requestRenderAll();

                canvas.on({
                    'object:moving': endPointOfDashLineToFollowPointer,
                    'selection:cleared': removeDashLinePointersOnSelectionCleared,
                    'selection:updated': removeDashLinePointersOnSelectionUpdated
                });
            } 
        }  
    }


    function endPointOfDashLineToFollowPointer(o){
        
        let obj = o.target;

        if(obj.id==='pointer1'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='dash-line' && o.label==='selected-line'){
                    o.set({
                    x1: obj.left,
                    y1: obj.top
                });
                o.setCoords();
                }
            });
        } else if(obj.id==='pointer2'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='dash-line' && o.label==='selected-line'){
                    o.set({
                        x2: obj.left,
                        y2: obj.top
                    });
                    o.setCoords();
                }
            });
        } 

    }


    function removeDashLinePointersOnSelectionCleared(o){

        let pointersToRemove = [];

        canvas.getObjects().forEach(o => {
            if(o.id==='pointer1' || o.id==='pointer2'){
                pointersToRemove.push(o);
            }
    
            if(o.label === 'selected-line'){
                
                o.set({
                    label: '',
                });
            }
        });

        pointersToRemove.forEach(pointer => {
            canvas.remove(pointer);
        });
        
        canvas.requestRenderAll();

    }


    function removeDashLinePointersOnSelectionUpdated(o){

        let obj = o.target;

        if(obj.id === 'dash-line'){
            removeDashLinePointersOnSelectionCleared();
        }

    }


    let NewDashLineCoords = {};

    function updateNewDashLineCoordinates(o){
        
        NewDashLineCoords = {};
        let obj = o.target;
        
        if (obj.id==='dash-line'){
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;

            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;

            NewDashLineCoords = {
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            }

            obj.set({
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            });
            obj.setCoords();
        }
    }

});
















// ====================================================================================
// ====================                                        ========================
// ====================            ADDING DOTTED LINE            ========================
// ====================                                        ========================
// ====================================================================================


// Dotted-line
let AddingDottedLineBtn = document.getElementById('dotted-line');

AddingDottedLineBtn.addEventListener('click', activateAddingDottedline);

function activateAddingDottedline(){
    canvas.defaultCursor = 'crosshair';
    
    canvas.on('mouse:down', StartAddingDottedLine);
    canvas.on('mouse:move', StartDrawingDottedLine);
    canvas.on('mouse:up', StopAddingDottedLine);

    canvas.discardActiveObject();
    canvas.renderAll();
    canvas.selection = false;

    canvas.getObjects().forEach(o => {
        if(o.id==='Dotted-line'){

            if (!o.prevHoverCursor) {
                o.prevHoverCursor = canvas.defaultCursor || 'default';  // Simpan nilai hoverCursor saat ini atau gunakan 'default' jika tidak ada
            }

            o.set({
                selectable: false,
                hoverCursor: o.prevHoverCursor
            })
        }
    });

}


let DottedLine;
let MouseDownDottedLine = false;
function StartAddingDottedLine(o){
    MouseDownDottedLine = true;
    let pointer = canvas.getPointer(o.e);

    DottedLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y],{
        id: 'Dotted-line',
        stroke: 'red',
        strokeWidth: 3,
        strokeDashArray: [3, 5],
        hasControls: false,
        borderColor: '#0C8CE9',       // Border color around the object
    });

    canvas.add(DottedLine);
    canvas.requestRenderAll();
}



function StartDrawingDottedLine(o){

    if(MouseDownDottedLine === true){

        let pointer = canvas.getPointer(o.e);
    
        DottedLine.set({
    
            x2: pointer.x,
            y2: pointer.y
        });

        canvas.requestRenderAll();

    }
}



function StopAddingDottedLine(){
    canvas.defaultCursor = 'default';

    canvas.getObjects().forEach(o => {
        if(o.id==='Dotted-line'){

            if(!o.prehoverCursor){
                o.prehoverCursor = 'all-scroll';
            }

            o.set({
                selectable: true,
                hoverCursor: o.prehoverCursor
            })
        }
    });

    MouseDownDottedLine = false;

    canvas.off('mouse:down', StartAddingDottedLine);
    canvas.off('mouse:move', StartDrawingDottedLine);
    canvas.off('mouse:up', StopAddingDottedLine);

    DottedLine.setCoords();
    canvas.selection = true;

    
    canvas.defaultCursor = 'auto';

}

$(document).ready(function(){

    canvas.on({
        'mouse:dblclick': addingDottedLineControlPoints,
        'object:moved': updateNewDottedLineCoordinates,
    });

    function addingDottedLineControlPoints(o){
        let obj = o.target;
        if(!obj){
            
            return;

        } else { 
            if (obj.id==='Dotted-line'){
                
                obj.set({
                    label: 'selected-line',
                });

                let pointer1 = new fabric.Circle({
                    id: 'pointer1',
                    radius: obj.strokeWidth*2.5,
                    fill: 'white',
                    top: obj.y1,
                    left: obj.x1,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 2,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                let pointer2 = new fabric.Circle({
                    id: 'pointer2',
                    radius: obj.strokeWidth *2.5,
                    fill: 'white',
                    top: obj.y2,
                    left: obj.x2,
                    originX: 'center',
                    originY: 'center',
                    hasBorders: false,
                    hasControls: false,
                    shadow: {
                        color: 'rgba(0, 0, 0, 0.2)',  // Hitam dengan opacity 20%
                        blur: 1,                      // Blur 2
                        offsetX: 0,                   // Posisi X: 0
                        offsetY: 0                    // Posisi Y: 0
                    },
                    stroke: '#C8C8C8',   // Warna stroke #C8C8C8
                    strokeWidth: 1       // Ketebalan stroke 1px
                });
        
                canvas.add(pointer1,pointer2);
                canvas.setActiveObject(pointer2);
                canvas.requestRenderAll();

                canvas.on({
                    'object:moving': endPointOfDottedLineToFollowPointer,
                    'selection:cleared': removeDottedLinePointersOnSelectionCleared,
                    'selection:updated': removeDottedLinePointersOnSelectionUpdated
                });
            } 
        }  
    }


    function endPointOfDottedLineToFollowPointer(o){
        
        let obj = o.target;

        if(obj.id==='pointer1'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='Dotted-line' && o.label==='selected-line'){
                    o.set({
                    x1: obj.left,
                    y1: obj.top
                });
                o.setCoords();
                }
            });
        } else if(obj.id==='pointer2'){
            canvas.getObjects().forEach(o =>{
                if(o.id==='Dotted-line' && o.label==='selected-line'){
                    o.set({
                        x2: obj.left,
                        y2: obj.top
                    });
                    o.setCoords();
                }
            });
        } 

    }


    function removeDottedLinePointersOnSelectionCleared(o){

        let pointersToRemove = [];

        canvas.getObjects().forEach(o => {
            if(o.id==='pointer1' || o.id==='pointer2'){
                pointersToRemove.push(o);
            }
    
            if(o.label === 'selected-line'){
                
                o.set({
                    label: '',
                });
            }
        });

        pointersToRemove.forEach(pointer => {
            canvas.remove(pointer);
        });
        
        canvas.requestRenderAll();

    }


    function removeDottedLinePointersOnSelectionUpdated(o){

        let obj = o.target;

        if(obj.id === 'Dotted-line'){
            removeDottedLinePointersOnSelectionCleared();
        }

    }


    let NewDottedLineCoords = {};

    function updateNewDottedLineCoordinates(o){
        
        NewDottedLineCoords = {};
        let obj = o.target;
        
        if (obj.id==='Dotted-line'){
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;

            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;

            NewDottedLineCoords = {
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            }

            obj.set({
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            });
            obj.setCoords();
        }
    }

});




















// ==========================================================================================
// ====================                                              ========================
// ====================           ADDING SOLID ARROW LINE            ========================
// ====================                                              ========================
// ==========================================================================================



let AddingArrowBtn = document.getElementById('solid-Arrow');

AddingArrowBtn.addEventListener('click', activateAddingArrow);

let ArrowCounter = 0;
function activateAddingArrow(){

    canvas.on({
        'mouse:down': StartAddingArrowLine,
        'mouse:move': StartDrawingArrowLine,
        'mouse:up': StopAddingArrowLine,
    });

    canvas.selection = false;

    // canvas.getObjects().forEach(o => {
    //     if(o.id){

    //         if (!o.prevHoverCursor) {
    //             o.prevHoverCursor = canvas.defaultCursor || 'default';  // Simpan nilai hoverCursor saat ini atau gunakan 'default' jika tidak ada
    //         }

    //         o.set({
    //             selectable: false,
    //             hoverCursor: o.prevHoverCursor
    //         })
    //     }
    // });

}

let MouseDownArrowLine;
let ArrowLine = false;
let ArrowHead1;
let ActiveArrow = false;
let clickedit;

function StartAddingArrowLine(o){
    
    MouseDownArrowLine = true;
    let pointer = canvas.getPointer(o.e);

    ArrowLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y],{
        id: 'arrow-line'+ArrowCounter,
        label: 'arrow-line-off',
        stroke: 'red',
        strokeWidth: 3,
        hasControls: false,
        borderColor: '#0C8CE9',       // Border color around the object
    });

    ArrowHead1 = new fabric.Polygon([
        {x: 0, y: 0},
        {x: -20, y: -10},
        {x: -20, y: 10}
    ], {
        id: 'arrow-line' + ArrowCounter,
        label: 'arrow-line-off',
        fill: 'red',
        selectable: true,
        hasControls: false,
        top: pointer.y,
        left: pointer.x,
        originX: 'center',
        originY: 'center'
    });

    ArrowCounter++;
    canvas.add(ArrowLine,ArrowHead1);
    canvas.requestRenderAll();

}

function StartDrawingArrowLine(o){

    if(MouseDownArrowLine === true){

        let pointer = canvas.getPointer(o.e);
    
        ArrowLine.set({
    
            x2: pointer.x,
            y2: pointer.y

        });

        ArrowHead1.set({
            left: pointer.x,
            top: pointer.y
        });

            let x1 = ArrowLine.x1;
            let y1 = ArrowLine.y1;
            let x2 = pointer.x;
            let y2 = pointer.y;

            let verticalHeight = Math.abs(y2 - y1);
            let horizontalWidth = Math.abs(x2 - x1);

            let tanRatio = verticalHeight / horizontalWidth;
            let basicAngle = Math.atan(tanRatio)*180/Math.PI;

            if (x2>x1) {
                if (y2<y1) {
                    ArrowHead1.set({
                        angle: -basicAngle
                    });
                }
                else if(y2===y1) {
                    ArrowHead1.set({
                        angle: 0
                    });
                }
                else if(y2>y1) {
                    ArrowHead1.set({
                        angle: basicAngle
                    });
                }
            }else if (x2 < x1) {
                if (y2 > y1) {
                    ArrowHead1.set({
                        angle: 180 - basicAngle
                    });
                } else if (y2 === y1) {
                    ArrowHead1.set({
                        angle: 180
                    });
                } else if (y2 < y1) {
                    ArrowHead1.set({
                        angle: 180 + basicAngle
                    });
                }
            }
        
        ArrowLine.setCoords();
        ArrowHead1.setCoords();
        canvas.requestRenderAll();

    }

}

function StopAddingArrowLine(){
    canvas.defaultCursor = 'default';

    MouseDownArrowLine = false;

    canvas.selection = true;

    canvas.defaultCursor = 'auto';
    canvas.requestRenderAll();
    canvas.off({
        'mouse:down': StartAddingArrowLine,
        'mouse:move': StartDrawingArrowLine,
        'mouse:up': StopAddingArrowLine,
    });
}



//re-drawing arrow-line
$(document).ready(function(){
    // canvas.off();
    //activate redrawing arrow line
    canvas.on({
        'mouse:down': addingArrowLineControlPoints,
        'object:moved': updateNewDottedLineCoordinates,
    });


    function addingArrowLineControlPoints(o){
        let obj = o.target;

        //if there is arrow object was clicked that have label 'off' (measn no selected arrow)
        if(obj && obj.label === 'arrow-line-off'){
                        
            let pointersToRemove = [];
            
            //set all arrow objects to label off and remove pointer
            canvas.getObjects().forEach(o => {
                if(/^arrow-pointer\d+$/.test(o.label)){
                    pointersToRemove.push(o);
                }
                
                if(o.label === 'arrow-active'){
                    
                    o.set({
                        label: 'arrow-line-off',
                    });
                }
            });

            pointersToRemove.forEach(pointer => {
                canvas.remove(pointer);
            });

            canvas.requestRenderAll();

            //get id  arrow
            let SelectedId = obj.id;
            let id = SelectedId.match(/\d+/)[0];

            let ArrowSelected = canvas.getObjects().filter(function(item){ return item.id === SelectedId});
            let x1Line = ArrowSelected[0].x1;
            let y1Line = ArrowSelected[0].y1;
            let strokeLine = ArrowSelected[0].strokeWidth;
            let CenterPointTriangle = ArrowSelected[1].getCenterPoint();

            //give label 'active' to arrow selected
            ArrowSelected[0].set({
                label: 'arrow-active'
            });

            ArrowSelected[1].set({
                label: 'arrow-active'
            });
            

            ActiveArrow = true;

            let Pointer1 = new fabric.Circle({
                id: id,
                label: 'arrow-pointer1',
                left: x1Line+strokeLine/2,
                top: y1Line+strokeLine/2,
                radius: 10,
                fill: 'red',
                originX: 'center',
                originY: 'center'
            });

            let Pointer2 = new fabric.Circle({
                id: id,
                label: 'arrow-pointer2',
                left: CenterPointTriangle.x,
                top: CenterPointTriangle.y,
                radius: 10,
                fill: 'blue',
                originX: 'center',
                originY: 'center'
            });

            // console.log(id);

            
            
            // add pointer to active arrow
            canvas.add(Pointer1, Pointer2);
            canvas.renderAll();
            
            canvas.on({
                'object:moving': ActiveArrowMove,
                // 'mouse:up': andlistenermovingpointer,
            });
            

        } else if(ActiveArrow) { //if there is selected arrow

            // if clicked else where in canvas, but no object selected
            if(!obj){
                let pointersToRemove = [];
    
                canvas.getObjects().forEach(o => {
                    if(/^arrow-pointer\d+$/.test(o.label)){
                        pointersToRemove.push(o);
                    }
            
                    if(o.label === 'arrow-active'){
                        
                        o.set({
                            label: 'arrow-line-off',
                        });
                    }
                });
    
                pointersToRemove.forEach(pointer => {
                    canvas.remove(pointer);
                });

                ActiveArrow = false;
                canvas.requestRenderAll();
                return

            }else{ //if pointer 1 clicked
                if(obj.label === 'arrow-pointer1'){

                    canvas.off('object:moving');
                    canvas.on(
                        'object:moving', function(event) {
                            updateNewArrowLineCoordinatesBase(obj.id);
                    });

                    return

                }else if(obj.label === 'arrow-pointer2'){

                    canvas.off('object:moving');
                    canvas.on(
                        'object:moving', function(event) {
                            updateNewArrowLineCoordinatesEnd(obj.id);
                    });

                    return
                }
                // else{
                //     canvas.off();
                //     canvas.on({
                //         'object:moving': ActiveArrowMove,
                //         'mouse:up': andlistenermovingpointer,
                //     });
                // }
            }
        }
    }

    // function removeDottedLinePointersOnSelectionCleared(o){

    //     let pointersToRemove = [];

    //     canvas.getObjects().forEach(o => {
    //         if(o.id==='pointer1' || o.id==='pointer2'){
    //             pointersToRemove.push(o);
    //         }
    
    //         if(o.label === 'selected-line'){
                
    //             o.set({
    //                 label: '',
    //             });
    //         }
    //     });

    //     pointersToRemove.forEach(pointer => {
    //         canvas.remove(pointer);
    //     });
        
    //     canvas.requestRenderAll();

    // }


    // function removeDottedLinePointersOnSelectionUpdated(o){

    //     let obj = o.target;

    //     if(obj.id === 'Dotted-line'){
    //         removeDottedLinePointersOnSelectionCleared();
    //     }

    // }

    // function andlistenermovingpointer(){
    //     canvas.off({
    //         'object:moving': ActiveArrowMove,
    //     });
    //     canvas.off(
    //         'object:moving', function(event) {
    //             updateNewArrowLineCoordinatesBase;
    //     },
    //      'mouse:up',function(event) {
    //             andlistenermovingpointer});
    // }

    let NewDottedLineCoords = {};
    // when active arrow click and move
    function ActiveArrowMove(o){

        let pointersToRemove = [];
    
        canvas.getObjects().forEach(o => {
            if(/^arrow-pointer\d+$/.test(o.label)){
                pointersToRemove.push(o);
            }
    
            if(o.label === 'arrow-active'){
                
                o.set({
                    label: 'arrow-line-off',
                });
            }
        });

        pointersToRemove.forEach(pointer => {
            canvas.remove(pointer);
        });

        let objactive = canvas.getActiveObject();
        // console.log(objactive);
            
            
        NewDottedLineCoords = {};
        let obj = o.target;
        // console.log(obj);
            
        if (obj.id === objactive.id){
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;
            
            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;
            
            NewDottedLineCoords = {
            x1: centerX+x1offset-obj.strokeWidth/2,
            y1: centerY+y1offset-obj.strokeWidth/2,
            x2: centerX+x2offset-obj.strokeWidth/2,
            y2: centerY+y2offset-obj.strokeWidth/2,
            }
            
            obj.set({
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            });
            obj.setCoords();
            
            let ArrowHeadFollow = canvas.getObjects().filter(function(item){ return item.id === obj.id && item.type === 'polygon'})[0];
            ArrowHeadFollow.set({
                left: obj.x2,
                top: obj.y2
            });
            ArrowHeadFollow.setCoords();
        }
        canvas.renderAll();

    }

    let NewDottedLineCoords1 = {};

    function updateNewDottedLineCoordinates(o){
        
        NewDottedLineCoords1 = {};
        let obj = o.target;
        
        if (obj.id==='Dotted-line'){
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;

            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;

            NewDottedLineCoords1 = {
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            }

            obj.set({
                x1: centerX+x1offset-obj.strokeWidth/2,
                y1: centerY+y1offset-obj.strokeWidth/2,
                x2: centerX+x2offset-obj.strokeWidth/2,
                y2: centerY+y2offset-obj.strokeWidth/2,
            });
            obj.setCoords();
        }
    }

    // base pointer moved
    function updateNewArrowLineCoordinatesBase(id){

        let obj = canvas.getActiveObject();

        let line = canvas.getObjects().filter(function(item){ return item.id === 'arrow-line'+id && item.type === 'line'})[0];
        let ArrowHead1 = canvas.getObjects().filter(function(item){ return item.id === 'arrow-line'+id && item.type === 'polygon'})[0];
    
        

        canvas.getObjects().forEach(o =>{

            // moving line start
            if(o.id==='arrow-line'+id && o.label==='arrow-active'){
                    o.set({
                    x1: obj.left,
                    y1: obj.top
                });
                // o.setCoords();
                canvas.renderAll();

                // moving line end


                // moving angle triangle start
                let x1 = obj.left;
                let y1 = obj.top;
                let x2 = line.x2;
                let y2 = line.y2;

                let verticalHeight = Math.abs(y2 - y1);
                let horizontalWidth = Math.abs(x2 - x1);

                let tanRatio = verticalHeight / horizontalWidth;
                let basicAngle = Math.atan(tanRatio)*180/Math.PI;

                if (x2>x1) {
                    if (y2<y1) {
                        ArrowHead1.set({
                            angle: -basicAngle
                        });
                    }
                    else if(y2===y1) {
                        ArrowHead1.set({
                            angle: 0
                        });
                    }
                    else if(y2>y1) {
                        ArrowHead1.set({
                            angle: basicAngle
                        });
                    }
                }else if (x2 < x1) {
                    if (y2 > y1) {
                        ArrowHead1.set({
                            angle: 180 - basicAngle
                        });
                    } else if (y2 === y1) {
                        ArrowHead1.set({
                            angle: 180
                        });
                    } else if (y2 < y1) {
                        ArrowHead1.set({
                            angle: 180 + basicAngle
                        });
                    }
                }
                // ArrowHead1.setCoords();
                // moving angle triangle start

                // o.setCoords();
            
                // let objactive = obj;
                // console.log(objactive);
                    
                    
                NewDottedLineCoords = {};
                    let centerX =  line.getCenterPoint().x;
                    let centerY =  line.getCenterPoint().y;
                    
                    let x1offset =  line.calcLinePoints().x1;
                    let y1offset =  line.calcLinePoints().y1;
                    let x2offset =  line.calcLinePoints().x2;
                    let y2offset =  line.calcLinePoints().y2;
                    
                    NewDottedLineCoords = {
                    x1: centerX+x1offset-line.strokeWidth/2,
                    y1: centerY+y1offset-line.strokeWidth/2,
                    x2: centerX+x2offset-line.strokeWidth/2,
                    y2: centerY+y2offset-line.strokeWidth/2,
                    }
                    
                    line.set({
                        x1: centerX+x1offset-obj.strokeWidth/2,
                        y1: centerY+y1offset-obj.strokeWidth/2,
                        x2: centerX+x2offset-line.strokeWidth/2,
                        y2: centerY+y2offset-line.strokeWidth/2,
                    });
                    line.setCoords();
                    
                    // let ArrowHeadFollow = canvas.getObjects().filter(function(item){ return item.id === obj.id && item.type === 'polygon'})[0];
                    // ArrowHead1.set({
                    //     left: line.x2,
                    //     top: line.y2
                    // });
                    ArrowHead1.setCoords();
                // }
            }
            canvas.renderAll();

        });
    }
    

    // end pointer moved
    function updateNewArrowLineCoordinatesEnd(id){

        let obj = canvas.getActiveObject();

        let line = canvas.getObjects().filter(function(item){ return item.id === 'arrow-line'+id && item.type === 'line'})[0];
        let ArrowHead1 = canvas.getObjects().filter(function(item){ return item.id === 'arrow-line'+id && item.type === 'polygon'})[0];
    


        canvas.getObjects().forEach(o =>{
            if(o.id==='arrow-line'+id && o.label==='arrow-active'){
                    o.set({
                    x2: obj.left,
                    y2: obj.top
                });
                o.setCoords();


                // measuring angle arrow
                let x1 = line.x1;
                let y1 = line.y1;
                let x2 = obj.left;
                let y2 = obj.top;

                let verticalHeight = Math.abs(y2 - y1);
                let horizontalWidth = Math.abs(x2 - x1);

                let tanRatio = verticalHeight / horizontalWidth;
                let basicAngle = Math.atan(tanRatio)*180/Math.PI;

                ArrowHead1.set({
                    left: obj.left,
                    top: obj.top
                });

                if (x2>x1) {
                    if (y2<y1) {
                        ArrowHead1.set({
                            angle: -basicAngle
                        });
                        ArrowHead1.setCoords();
                    }
                    else if(y2===y1) {
                        ArrowHead1.set({
                            angle: 0
                        });
                        ArrowHead1.setCoords();
                    }
                    else if(y2>y1) {
                        ArrowHead1.set({
                            angle: basicAngle
                        });
                        ArrowHead1.setCoords();
                    }
                }else if (x2 < x1) {
                    if (y2 > y1) {
                        ArrowHead1.set({
                            angle: 180 - basicAngle
                        });
                        ArrowHead1.setCoords();
                    } else if (y2 === y1) {
                        ArrowHead1.set({
                            angle: 180
                        });
                        ArrowHead1.setCoords();
                    } else if (y2 < y1) {
                        ArrowHead1.set({
                            angle: 180 + basicAngle
                        });
                        ArrowHead1.setCoords();
                    }
                }
                // ArrowHead1.setCoords();

                // // o.setCoords();
                NewDottedLineCoords = {};
                // let obj = o.target;
                    
                // if (obj.id === objactive.id){
                    let centerX =  line.getCenterPoint().x;
                    let centerY =  line.getCenterPoint().y;
                    
                    let x1offset =  line.x1;
                    let y1offset =  line.y1;
                    let x2offset =  line.calcLinePoints().x2;
                    let y2offset =  line.calcLinePoints().y2;
                    
                    NewDottedLineCoords = {
                    x1: x1offset,
                    y1: y1offset,
                    x2: centerX+x2offset-line.strokeWidth/2,
                    y2: centerY+y2offset-line.strokeWidth/2,
                    }
                    
                    line.set({
                        x1: x1offset,
                        y1: y1offset,
                        x2: centerX+x2offset-line.strokeWidth/2,
                        y2: centerY+y2offset-line.strokeWidth/2,
                    });
                    line.setCoords();
                    
                    let ArrowHeadFollow = canvas.getObjects().filter(function(item){ return item.id === obj.id && item.type === 'polygon'})[0];
                    ArrowHeadFollow.set({
                        left: line.x2,
                        top: line.y2
                    });
                    ArrowHeadFollow.setCoords();
                // }
            }
        });

    }
});
