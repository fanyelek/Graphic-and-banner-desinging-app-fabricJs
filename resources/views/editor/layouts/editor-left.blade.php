<div id="editor-sidebar">
    <div class="sidebar-buttons">
      <a href="#" id="add-text"><i class="fa fa-font">
        <br>
        <p style="font-size: 11px; margin-top: 5px">add text</p>
      </i></a>
      <!-- <a href="#" id="get-unsplah-image" data-toggle="modal" data-target="#myModal"><i class="fa fa-picture-o"><br>
      <p style="font-size: 11px; margin-top: 5px">add text</p></i></a> -->



      <!-- group of shape (add shape) Start -->

      <a href="#" id="toggle-shape-group">
        <i class="fa fa-cube"><br>
        <p style="font-size: 11px; margin-top: 5px">add shape</p></i> <!-- Icon for Shape Group -->
      </a>

      <!-- modal of shape start -->
      <div id="shape-group" style="display: none;">
        <a href="#" id="add-rectangle"><i class="fa fa-square"><br>
        <p style="font-size: 11px; margin-top: 5px">add square</p></i></a>
        <a href="#" id="add-circle"><i class="fa fa-circle"><br>
        <p style="font-size: 11px; margin-top: 5px">add circle</p></i></a>
        <a href="#" id="add-ellipse"><i class="fa fa-caret-up" style="font-size: 45px;"><br>
        <p style="font-size: 11px; margin-top: 5px">add triangle</p></i></a>
      </div>
      <!-- modal of shape end -->


      <!-- javascript for showing modal start -->

      <script>
        
        document.getElementById('toggle-shape-group').addEventListener('click', function(e) {
          e.preventDefault();
          
          var shapeGroup = document.getElementById('shape-group');
          
          // Toggle visibility of the shape group
          if (shapeGroup.style.display === 'none' || shapeGroup.style.display === '') {
            shapeGroup.style.display = 'block';
          } else {
            shapeGroup.style.display = 'none';
          }
        });


      </script>
      
      <!-- javascript for showing modal end -->
    <!-- group of shape (add shape) end -->



    </div>
  </div>