



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
$('#add-number-list').click(function() {
    let numberList = new fabric.IText('1. Item 1\n2. Item 2\n3. Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'number-list'
    });
    canvas.add(numberList);
});

// Add Checklist
$('#add-checklist').click(function() {
    let checklist = new fabric.IText('☑ Item 1\n☑ Item 2\n☐ Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'checklist'
    });
    canvas.add(checklist);
});

// Bullet Styles
$('#bullet-circle').click(function() {
    let bulletCircle = new fabric.IText('○ Item 1\n○ Item 2\n○ Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'bullet-circle'
    });
    canvas.add(bulletCircle);
});

$('#bullet-square').click(function() {
    let bulletSquare = new fabric.IText('▪ Item 1\n▪ Item 2\n▪ Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'bullet-square'
    });
    canvas.add(bulletSquare);
});

$('#bullet-disc').click(function() {
    let bulletDisc = new fabric.IText('• Item 1\n• Item 2\n• Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'bullet-disc'
    });
    canvas.add(bulletDisc);
});

// Numbered Styles
$('#number-decimal').click(function() {
    let numberDecimal = new fabric.IText('1. Item 1\n2. Item 2\n3. Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'number-decimal'
    });
    canvas.add(numberDecimal);
});

$('#number-roman').click(function() {
    let numberRoman = new fabric.IText('I. Item 1\nII. Item 2\nIII. Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'number-roman'
    });
    canvas.add(numberRoman);
});

$('#number-alpha').click(function() {
    let numberAlpha = new fabric.IText('A. Item 1\nB. Item 2\nC. Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'number-alpha'
    });
    canvas.add(numberAlpha);
});


$(document).ready(function() {
      // Event listener ketika objek dipilih
  canvas.on('object:selected', function(e) {
    let activeObject = e.target;

    // Jika objek yang dipilih adalah bagian dari bullet list
    if (activeObject.isBullet) {
        // Cari semua objek dengan bulletListId yang sama
        let objectsInSameList = canvas.getObjects().filter(obj => 
            obj.bulletListId === activeObject.bulletListId
        );

        // Jika lebih dari satu objek dalam bullet list, buat grup baru
        if (objectsInSameList.length > 1) {
            let group = new fabric.ActiveSelection(objectsInSameList, {
                canvas: canvas
            });
            
            // Set grup sebagai objek aktif
            canvas.setActiveObject(group);
            canvas.renderAll(); // Render ulang canvas dengan grup yang aktif
        }
    }
  });
});
