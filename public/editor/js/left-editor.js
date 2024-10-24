

// javascript for Add Text
document.getElementById('add-text').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Reset all buttons to remove active state
    document.querySelectorAll('.sidebar-buttons a').forEach(button => {
        button.classList.remove('active');
    });

    // Add active state to the clicked button
    this.classList.add('active');
  
    
    // Show the second sidebar
    var secondSidebar = document.getElementById('editor-sidebar-second');
    
    
    // Show the second sidebar
    var contentText = document.getElementById('content-text');
    var addShape = document.getElementById('content-shape');    
    var addContentList = document.getElementById('content-lists');

    // Toggle visibility of the second sidebar
    if (secondSidebar.style.display === 'block') {

      if(addShape.style.display === 'block'){
        
        addShape.style.display = 'none';
        addShape.classList.remove('active');
        contentText.style.display = 'block';

        }else if(addContentList.style.display === 'block'){

          addContentList.style.display = 'none';
          addContentList.classList.remove('active');
          contentText.style.display = 'block';
          
        }else{

          secondSidebar.style.display = 'none';
          this.classList.remove('active');
          contentText.style.display = 'none';
          
        }
    
      } else {
        
        secondSidebar.style.display = 'block';
        contentText.style.display = 'block';
    
      }
});

  

// javascript for Add Shape
  
document.getElementById('toggle-shape-group').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Reset all buttons to remove active state
  document.querySelectorAll('.sidebar-buttons a').forEach(button => {
      button.classList.remove('active');
  });

  // Add active state to the clicked button
  this.classList.add('active');
  // console.log(document.getElementById('toggle-shape-group').classList);

  var addShape = document.getElementById('content-shape');
  var contentText = document.getElementById('content-text');  
  var addContentList = document.getElementById('content-lists');
  
  /// Show the second sidebar and update content for shapes
  var secondSidebar = document.getElementById('editor-sidebar-second');


    // Toggle visibility of the second sidebar
    if (secondSidebar.style.display === 'block') {

      if(contentText.style.display === 'block'){
        
        contentText.style.display = 'none';
        contentText.classList.remove('active');
        addShape.style.display = 'block';

        }else if(addContentList.style.display === 'block'){

          addContentList.style.display = 'none';
          addContentList.classList.remove('active');
          addShape.style.display = 'block';

        }else{
          
          
          secondSidebar.style.display = 'none';
          this.classList.remove('active');
          addShape.style.display = 'none';
          
        }

      } else {

        secondSidebar.style.display = 'block';
        addShape.style.display = 'block';
    
      }

});



// Close sidebar if clicking outside of it
document.addEventListener('click', function (event) {
  
  const secondSidebar = document.getElementById('editor-sidebar-second');
  const editorSidebar = document.getElementById('editor-sidebar');
  var contentText = document.getElementById('content-text');
  var addShape = document.getElementById('content-shape');    


  if (!secondSidebar.contains(event.target) && !editorSidebar.contains(event.target)) {
    
    secondSidebar.style.display = 'none';
    document.querySelectorAll('.sidebar-buttons a').forEach(button => {
    button.classList.remove('active');

    contentText.style.display = 'none';
    addShape.style.display = 'none';

    isDrawingDashLine = false;
    DashLineMode = false

    isDrawingDottedLine = false;
    DottedLineMode = false;

    isDrawingArrowDashLine = false;
    ArrowDashLineMode = false;

    document.querySelectorAll('.sidebar-button').forEach(btn => {
      btn.querySelector('img').src = btn.getAttribute('data-inactive-src');
      btn.classList.remove('active');
    });
    
    });
  }
  
});

