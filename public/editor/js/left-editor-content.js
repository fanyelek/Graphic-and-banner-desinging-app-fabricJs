



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
      objecttype: 'text'
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
      objecttype: 'text'
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
      objecttype: 'text'
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
          objecttype: 'quote'
        });
        canvas.add(text);
    });


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
          objecttype: 'annotation'
        });
        canvas.add(text);
    });





   //=================  Add List  =======================
// Add Bullet List
$('#add-bullet-list').click(function() {
    let bulletList = new fabric.IText('• Item 1\n• Item 2\n• Item 3', {
        fontFamily: 'Arial',
        fontSize: '16',
        textAlign: 'left',
        fill: '#000',
        left: 100,
        top: 100,
        objecttype: 'bullet-list'
    });
    canvas.add(bulletList);
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