



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

