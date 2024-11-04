



  //=================  Add Text  =======================
  $('#add-paragraph').click(function() {
    event.preventDefault();
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
    event.preventDefault();
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
    event.preventDefault();
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






  //=================  Add Quote  =======================
    // Add Quote
    $('#add-quote').click(function() {
        event.preventDefault();
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent

        });
        canvas.add(text);
        canvas.setActiveObject(text);
    });






    //=================  Add Annotations  =======================
    // Add Annotations
    $('#add-annotation').click(function() {
        event.preventDefault();
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
        });
        canvas.add(text);
        
        canvas.setActiveObject(text);
    });



//=================  Add List  =======================
   // Add Bullet List
   let listCounter = 0; // Counter for bullet list ID
   let objectCounter = 0; // Counter for individual object ID
   
   $('#add-bullet-list').click(function() {
    event.preventDefault();
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
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
    event.preventDefault();
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
    event.preventDefault();
       
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
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
    event.preventDefault();
       
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
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
    event.preventDefault();
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
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
   
   $('#number-alpha').click(function(event) {
    event.preventDefault();
       
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
                lockUniScaling: true, // Ensure uniform scaling
                borderColor: '#0C8CE9',       // Border color around the object
                cornerColor: 'white',         // Corner control fill color (white)
                cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
                cornerStyle: 'circle',        // Make corners circular
                cornerSize: 10,               // Size of the corner controls
                transparentCorners: false,    // Ensure corners are not transparent
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

   

   

   //=================  Add Shape  =======================
// Add Rectangle
$('#add-rectangle').click(function(event) {
    event.preventDefault();
    let rectangle = new fabric.Rect({
        left: 100,
        top: 50,
        width: 200,
        height: 100,
        fill: '#D7D7D7',
        padding: 10,
        rx: 0,
        ry: 0,
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
$('#add-circle').click(function(event) {
    event.preventDefault();
    let circle = new fabric.Circle({
        left: 30,
        top: 30,
        radius: 50,
        strokeWidth: 3,
        padding: 10,
        // stroke: 'black',
        fill: '#D7D7D7',
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

$('#add-triangle').click(function(event) {
    event.preventDefault();
    let ecl = new fabric.Triangle({
        left: 30,
        top: 30,
        fill: '#D7D7D7',
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

// // Add Ellipse
// $('#add-ellipse').click(function() {
//     let ellipse = new fabric.Ellipse({
//         left: 150,
//         top: 50,
//         rx: 100, // Horizontal radius
//         ry: 50,  // Vertical radius
//         padding: 10,
//         fill: 'blue',
//         borderColor: '#0C8CE9',       // Border color around the object
//         cornerColor: 'white',         // Corner control fill color (white)
//         cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
//         cornerStyle: 'circle',        // Make corners circular
//         cornerSize: 10,               // Size of the corner controls
//         transparentCorners: false,    // Ensure corners are not transparent
//     });
//     canvas.add(ellipse);
//     canvas.setActiveObject(ellipse);
// });

// Add Rectangle Rounded
$('#add-rectangle-rounded').click(function(event) {
    event.preventDefault();
    let rectangleRounded = new fabric.Rect({
        left: 100,
        top: 50,
        width: 200,
        height: 100,
        fill: '#D7D7D7',
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
    canvas.add(rectangleRounded);
    canvas.setActiveObject(rectangleRounded);
    });

// Add Hexagon
$('#add-hexagon').click(function(event) {
    event.preventDefault();
    let hexagonPoints = [
        { x: 50,  y: 0   }, // Titik atas
        { x: 100, y: 25  }, // Titik kanan atas
        { x: 100, y: 75  }, // Titik kanan bawah
        { x: 50,  y: 100 }, // Titik bawah
        { x: 0,   y: 75  }, // Titik kiri bawah
        { x: 0,   y: 25  }  // Titik kiri atas
    ];
    
    // Membuat heksagon menggunakan Fabric.js
    let hexagon = new fabric.Polygon(hexagonPoints, {
        left: 200,
        top: 100,
        padding: 10,
        fill: '#D7D7D7',
        // angle: ,
        strokeWidth: 2,
        borderColor: '#0C8CE9',       // Warna border sekitar objek
        cornerColor: 'white',         // Warna kontrol sudut
        cornerStrokeColor: '#0C8CE9', // Warna border untuk kontrol sudut
        cornerStyle: 'circle',        // Membuat sudut kontrol berbentuk lingkaran
        cornerSize: 10,               // Ukuran kontrol sudut
        transparentCorners: false,    // Agar sudut kontrol tidak transparan
    });
    canvas.add(hexagon);
    canvas.setActiveObject(hexagon);
});


// Add Border Rectangle
$('#add-border-ractangle').click(function(event) {
    event.preventDefault();
    let rectangleRounded = new fabric.Rect({
        left: 100,
        top: 50,
        width: 200,
        height: 100,
        fill: null,
        strokeWidth: 4,
        stroke: '#D7D7D7',
        padding: 10,
        rx: 0,
        ry: 0,
        borderColor: '#0C8CE9',       // Border color around the object
        cornerColor: 'white',         // Corner control fill color (white)
        cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
        cornerStyle: 'circle',        // Make corners circular
        cornerSize: 10,               // Size of the corner controls
        transparentCorners: false,    // Ensure corners are not transparent
    })
    canvas.add(rectangleRounded);
    canvas.setActiveObject(rectangleRounded);
    })

// // Add Polygon (Triangle in this case)
// $('#add-polygon').click(function() {
//     // Definisikan titik-titik segilima
//     let pentagonPoints = [
//         { x: 200, y: 0 },  // Titik atas
//         { x: 250, y: 50 }, // Kanan atas
//         { x: 225, y: 100 }, // Kanan bawah
//         { x: 175, y: 100 }, // Kiri bawah
//         { x: 150, y: 50 }   // Kiri atas
//     ];

//     let pentagon = new fabric.Polygon(pentagonPoints, {
//         left: 200,        // Posisi horisontal
//         top: 100,         // Posisi vertikal
//         fill: 'blue',     // Warna isi
//         stroke: 'black',  // Warna garis
//         strokeWidth: 2,    // Lebar garis
//         padding: 10,
//         borderColor: '#0C8CE9',       // Border color around the object
//         cornerColor: 'white',         // Corner control fill color (white)
//         cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
//         cornerStyle: 'circle',        // Make corners circular
//         cornerSize: 10,               // Size of the corner controls
//         transparentCorners: false,    // Ensure corners are not transparent
//     });
//     canvas.add(pentagon);
//     canvas.setActiveObject(pentagon);
// });




















// ====================================================================================
// ====================                                        ========================
// ====================           ADDING SOLID LINE            ========================
// ====================                                        ========================
// ====================================================================================



let AddingLineBtn = document.getElementById('solid-line');

AddingLineBtn.addEventListener('click', function(event) {
    event.preventDefault();
    activateAddingLine(event);
});

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
        stroke: 'black',
        strokeWidth: 3,
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

AddingDashLineBtn.addEventListener('click', function(event) {
    event.preventDefault();
    activateAddingDashline(event);
});

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
        stroke: 'black',
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

AddingDottedLineBtn.addEventListener('click', function(event) {
    event.preventDefault();
    activateAddingDottedline(event);
});

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
        stroke: 'black',
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





















// =====================================================================================
// ====================                                         ========================
// ====================           ADDING SOLID ARROW            ========================
// ====================                                         ========================
// =====================================================================================



let AddingArrowLineBtn = document.getElementById('solid-ArrowLine');

AddingArrowLineBtn.addEventListener('click', function(event) {
    event.preventDefault();
    activateAddingArrowLine(event);
});

function activateAddingArrowLine(){
    canvas.defaultCursor = 'crosshair';

    canvas.on('mouse:down', startAddingArrowLine);
    canvas.on('mouse:move', startDrawingArrowLine);
    canvas.on('mouse:up', stopAddingArrowLine);

    canvas.discardActiveObject();
    canvas.renderAll();
    canvas.selection = false;  

    canvas.getObjects().forEach(o => {
        if(o.id==='solid-ArrowLine'){

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

let ArrowLine;
let ArrowHead1;
let MouseDownArrowLine = false;
let ArrowLineId = 0;

function startAddingArrowLine(o){
    MouseDownArrowLine = true;
    let pointer = canvas.getPointer(o.e);

    ArrowLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        id: 'solid-ArrowLine'+ArrowLineId,
        stroke: 'black',
        strokeWidth: 3,
        hasControls: false,
        borderColor: '#0C8CE9',       // Border color around the object
    });

    ArrowHead1 = new fabric.Polygon([
        {x: 0, y: 0},
        {x: -20, y: -10},
        {x: -20, y: 10}
    ], {
        id: 'solid-ArrowLine'+ArrowLineId,
        fill: 'black',
        selectable: true,
        hasControls: false,
        top: pointer.y,
        left: pointer.x,
        originX: 'center',
        originY: 'center'
    });

    canvas.add(ArrowLine,ArrowHead1);
    ArrowLineId++;
    canvas.requestRenderAll();
}



function startDrawingArrowLine(o){
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
        ArrowHead1.setCoords()
        canvas.requestRenderAll();
    }
}




function stopAddingArrowLine(){
    canvas.defaultCursor = 'default';

    canvas.getObjects().forEach(o => {
        if(/^solid-ArrowLine\d+$/.test(o.id)){

            if(!o.prehoverCursor){
                o.prehoverCursor = 'all-scroll';
            }

            o.set({
                selectable: true,
                hoverCursor: o.prehoverCursor
            })
        }
    });
    
    ArrowLine.setCoords();
    MouseDownArrowLine = false;

    canvas.off('mouse:down', startAddingArrowLine);
    canvas.off('mouse:move', startDrawingArrowLine);
    canvas.off('mouse:up', stopAddingArrowLine);

    canvas.selection = true;
    
    canvas.defaultCursor = 'auto';
}


$(document).ready(function() {

    canvas.on({
        'object:moving': updateNewArrowLineCoordinates,
        'selection:created': updateNewArrowLineCoordinates,
        'selection:updated': updateNewArrowLineCoordinates,
        'mouse:dblclick': addingControlPoints
    });

    let newArrowLineCoords = {};
    
    function updateNewArrowLineCoordinates(o){
        newArrowLineCoords = {};
        let obj = o.target;


        
        // console.log('disini');
        // console.log(ArrowHeadActive.getCenterPoint());
        
        if (/^solid-ArrowLine\d+$/.test(obj.id) && obj.type === 'line'){      
            let centerX =  obj.getCenterPoint().x;
            let centerY =  obj.getCenterPoint().y;
            
            let x1offset =  obj.calcLinePoints().x1;
            let y1offset =  obj.calcLinePoints().y1;
            let x2offset =  obj.calcLinePoints().x2;
            let y2offset =  obj.calcLinePoints().y2;
            
            newArrowLineCoords = {
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

            let ArrowHeadActive = canvas.getObjects().filter(function(item){ return item.id === obj.id && item.type === 'polygon'})[0];
            if (ArrowHeadActive) {
                // Posisikan ulang kepala panah (segitiga) berdasarkan koordinat akhir garis (x2, y2)
                let angle = Math.atan2(newArrowLineCoords.y2 - newArrowLineCoords.y1, newArrowLineCoords.x2 - newArrowLineCoords.x1);
                ArrowHeadActive.set({
                    left: newArrowLineCoords.x2, // X koordinat akhir garis
                    top: newArrowLineCoords.y2,  // Y koordinat akhir garis
                    angle: angle * (180 / Math.PI) // Putar segitiga agar sesuai arah garis
                });
                ArrowHeadActive.setCoords();
                canvas.renderAll()
            }  
        }
    }

    function addingControlPoints(o){
        let obj = o.target;
        
        if(!obj){
            
            return;

        } else { 
            if (/^solid-ArrowLine\d+$/.test(obj.id)){
                let ArrowHeadActive = canvas.getObjects().filter(function(item){ return item.id === obj.id && item.type === 'polygon'})[0];

                obj.set({
                    label: 'selected-ArrowLine',
                });

                ArrowHeadActive.set({
                    label: 'selected-ArrowLine',
                });

                // console.log(ArrowHeadActive);

                let pointer1 = new fabric.Circle({
                    id: 'pointer1',
                    radius: obj.strokeWidth*2.5,
                    fill: 'white',
                    top: newArrowLineCoords.y1,
                    left: newArrowLineCoords.x1,
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
                    top: newArrowLineCoords.y2,
                    left: newArrowLineCoords.x2,
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
                    'object:moving': endPointOfArrowLineToFollowPointer,
                    'selection:cleared': removePointersOnSelectionCleared,
                    'selection:updated': removePointersOnSelectionUpdated
                });
            } 
        }  
    }

    function removePointersOnSelectionUpdated(o){
        let obj = o.target;

        if(/^solid-ArrowLine\d+$/.test(obj.id)){
            removePointersOnSelectionCleared();
        }
    }

    function removePointersOnSelectionCleared(){
        let pointersToRemove = [];

        canvas.getObjects().forEach(o => {
            if(o.id==='pointer1' || o.id==='pointer2'){
                pointersToRemove.push(o);
            }
    
            if(o.label === 'selected-ArrowLine'){
                
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

    function endPointOfArrowLineToFollowPointer(o){
        let obj = o.target;

        if(obj.id==='pointer1'){
            canvas.getObjects().forEach(o =>{
                if(/^solid-ArrowLine\d+$/.test(o.id) && o.label==='selected-ArrowLine'){
                    o.set({
                        x1: obj.left,
                        y1: obj.top
                    });
                    o.setCoords();

                    let ArrowHeadActive = canvas.getObjects().filter(function(item){ return item.label === 'selected-ArrowLine' && item.type === 'polygon'})[0];

                    let x1 = o.x1;
                    let y1 = o.y1;
                    let x2 = o.x2;
                    let y2 = o.y2;
            
                    let verticalHeight = Math.abs(y2 - y1);
                    let horizontalWidth = Math.abs(x2 - x1);
            
                    let tanRatio = verticalHeight / horizontalWidth;
                    let basicAngle = Math.atan(tanRatio)*180/Math.PI;
            
                    if (x2>x1) {
                        if (y2<y1) {
                            ArrowHeadActive.set({
                                angle: -basicAngle
                            });
                        }
                        else if(y2===y1) {
                            ArrowHeadActive.set({
                                angle: 0
                            });
                        }
                        else if(y2>y1) {
                            ArrowHeadActive.set({
                                angle: basicAngle
                            });
                        }
                    }else if (x2 < x1) {
                        if (y2 > y1) {
                            ArrowHeadActive.set({
                                angle: 180 - basicAngle
                            });
                        } else if (y2 === y1) {
                            ArrowHeadActive.set({
                                angle: 180
                            });
                        } else if (y2 < y1) {
                            ArrowHeadActive.set({
                                angle: 180 + basicAngle
                            });
                        }
                    }
                    
                    ArrowHeadActive.setCoords();
                }
            });
        } else if(obj.id==='pointer2'){
            canvas.getObjects().forEach(o =>{
                if(/^solid-ArrowLine\d+$/.test(o.id) && o.label==='selected-ArrowLine'){
                    o.set({
                        x2: obj.left,
                        y2: obj.top
                    });
                    o.setCoords();

                    let ArrowHeadActive = canvas.getObjects().filter(function(item){ return item.label === 'selected-ArrowLine' && item.type === 'polygon'})[0];
                    ArrowHeadActive.set({
                        left: obj.left,
                        top: obj.top
                    });

                    let x1 = o.x1;
                    let y1 = o.y1;
                    let x2 = o.x2;
                    let y2 = o.y2;
            
                    let verticalHeight = Math.abs(y2 - y1);
                    let horizontalWidth = Math.abs(x2 - x1);
            
                    let tanRatio = verticalHeight / horizontalWidth;
                    let basicAngle = Math.atan(tanRatio)*180/Math.PI;
            
                    if (x2>x1) {
                        if (y2<y1) {
                            ArrowHeadActive.set({
                                angle: -basicAngle
                            });
                        }
                        else if(y2===y1) {
                            ArrowHeadActive.set({
                                angle: 0
                            });
                        }
                        else if(y2>y1) {
                            ArrowHeadActive.set({
                                angle: basicAngle
                            });
                        }
                    }else if (x2 < x1) {
                        if (y2 > y1) {
                            ArrowHeadActive.set({
                                angle: 180 - basicAngle
                            });
                        } else if (y2 === y1) {
                            ArrowHeadActive.set({
                                angle: 180
                            });
                        } else if (y2 < y1) {
                            ArrowHeadActive.set({
                                angle: 180 + basicAngle
                            });
                        }
                    }
                    
                    ArrowHeadActive.setCoords();
                }
            });
        } 
    }
});


















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 2            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-2').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl2 = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl2, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 3            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-3').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl3 = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl3, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 4            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-4').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 1            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-1').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 5            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-5').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 6            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-6').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 7            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-7').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 8            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-8').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 9            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-9').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 10            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-10').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 11            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-11').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'red',
            padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 12            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-12').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 13            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-13').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});

















// ===================================================================================
// ====================                                       ========================
// ====================           ADDING GRAPHIC 14            ========================
// ====================                                       ========================
// ===================================================================================


// Fungsi untuk memuat dan menambahkan SVG ke kanvas
document.getElementById('add-graphic-14').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default link

    // Path ke file SVG yang ingin dimuat
    var svgUrl = event.currentTarget.getAttribute('data-svg-url');; // Sesuaikan path ini dengan file SVG yang kamu upload

    fabric.loadSVGFromURL(svgUrl, function(objects, options) {
        var svgObject = fabric.util.groupSVGElements(objects, options);
        
        // Menyesuaikan posisi dan ukuran SVG jika diperlukan
        svgObject.set({
            left: 100, // Sesuaikan posisi X
            top: 100,  // Sesuaikan posisi Y
            scaleX: 0.1, // Sesuaikan skala sesuai kebutuhan
            scaleY: 0.1,
            fill: 'black',padding: 10,
            borderColor: '#0C8CE9',       // Border color around the object
            cornerColor: 'white',         // Corner control fill color (white)
            cornerStrokeColor: '#0C8CE9', // Border color for corner controls (blue)
            cornerStyle: 'circle',        // Make corners circular
            cornerSize: 10,               // Size of the corner controls
            transparentCorners: false,    // Ensure corners are not transparent
        });
        
        // Menambahkan objek SVG ke dalam kanvas
        canvas.add(svgObject);
        canvas.setActiveObject(svgObject);
        canvas.renderAll(); // Render ulang kanvas
    });
});