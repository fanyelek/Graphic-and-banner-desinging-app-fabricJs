



<!-- Feature Main Sidebar (left-editor) -->
<div id="editor-sidebar">
    <div class="sidebar-buttons">
      
      <!-- Add Template Button -->
      <a href="#" id="add-template" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Template Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Template Icon (1).png') }}">
        <img src="{{ asset('images/icon-dashboard/Template Icon 1.png') }}" alt="Template" style="width: 27px; margin-top: 20px">
        <br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Template</p>
      </i></a>
      
      <!-- Add Text Button -->
      <a href="#" id="add-text" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Text Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Text Icon (1).png') }}">
        <img src="{{ asset('images/icon-dashboard/Text Icon 1.png') }}" alt="Text" style="width: 27px">
        <br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Text</p>
      </i></a>

      <!-- Add Shape Button -->
      <a href="#" id="toggle-shape-group" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Shape Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Shape Icon (1).png') }}">
      <img src="{{ asset('images/icon-dashboard/Shape Icon 1.png') }}" alt="Shape" style="width: 27px"><br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Shape</p></i> <!-- Icon for Shape Group -->
      </a>

      <!-- Add Element Button -->
      <a href="#" id="add-element" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Elements Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Elements Icon (1).png') }}">
      <img src="{{ asset('images/icon-dashboard/Elements Icon 1.png') }}" alt="Element" style="width: 27px"><br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Element</p></i> <!-- Icon for Element Group -->
      </a>

      <!-- Add Frame Button -->
      <a href="#" id="add-frame" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Frame Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Frame Icon (1).png') }}">
      <img src="{{ asset('images/icon-dashboard/Frame Icon 1.png') }}" alt="Frame" style="width: 27px"><br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Frame</p></i> <!-- Icon for Frame Group -->
      </a>

      <!-- Add Upload Button -->
      <a href="#" id="add-upload" class="sidebar-button" data-inactive-src="{{ asset('images/icon-dashboard/Upload Icon 1.png') }}" 
      data-active-src="{{ asset('images/icon-dashboard/Upload Icon (1).png') }}">
      <img src="{{ asset('images/icon-dashboard/Upload Icon 1.png') }}" alt="Frame" style="width: 27px"><br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px">Upload</p></i> <!-- Icon for Upload -->
      </a>

      <!-- Logo -->
      <a href="#" id="Logo">
      <img src="{{ asset('images/icon-dashboard/Logo PNG.png') }}" alt="Logo" style="width: 90px;position: absolute; bottom: 0;"><br>
        <p style="font-size: 11px; color: black; font-weight: 450; margin-top: -47px"></p></i> <!-- Logo -->
      </a>

  </div>
</div>




<!-- Feature Second Sidebar (left-editor-content) -->
<div id="editor-sidebar-second" style="display: none;">
  <div class="sidebar-content">
    <div id="content-sidebar-second">
      
      <div id="content-text" style="display: none;">
        <h6>Text</h6>
        <a href="#" id="add-title">
          <img src="{{ asset('images/icon-dashboard/Group 67 (1).png') }}" width="200px" alt="text" style="margin-bottom: 10px"><br>
        </a>
        <a href="#" id="add-subtitle">
          <img src="{{ asset('images/icon-dashboard/Group 68 (1).png') }}" width="200px" alt="text" style="margin-bottom: 10px"><br>
        </a>
        <a href="#" id="add-paragraph">
          <img src="{{ asset('images/icon-dashboard/Group 69 (1).png') }}" width="200px" alt="text" style="margin-bottom: 10px"><br>
        </a>
        
        <h6>Quotes & Annotation</h6>
        <button id="add-quote">Quotes</button>
        <button id="add-annotation">Annotation</button>
        
        <h6>List</h6>
        <button id="add-bullet-list">Bullet List</button>
        <button id="add-number-list">Number List</button>
        <button id="add-checklist">Checklist</button>
        <button id="bullet-circle">Circle Bullets</button>
        <button id="number-roman">Roman Numerals</button>
        <button id="number-alpha">Alphabetical Numbers</button>
      </div>


      <div id="content-shape" style="display: none;">
        <h6>Shape</h6>
        <div class="container-icons" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <a href="#" id="add-rectangle" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 2.png') }}" width="90px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-circle" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 3.png') }}" width="90px" alt="circle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-triangle" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 5.png') }}" width="90px" alt="triangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-rectangle-rounded" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 1.png') }}" width="90px" alt="rectangle-rounded" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-hexagon" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 4.png') }}" width="90px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            </a>
            <a href="#" id="add-border-ractangle" style="width: 35%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/shape 6.png') }}" width="90px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
        </div>

        <h6>Graphics Shape</h6>
        <div class="container-icons" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 2.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 3.png') }}" width="70px" alt="circle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 5.png') }}" width="70px" alt="triangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 1.png') }}" width="70px" alt="rectangle-rounded" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 4.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 6.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 7.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 8.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 9.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 10.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 11.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 12.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 13.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
            <a href="#" id="add-#" style="width: 20%;margin-bottom: 20px;margin-right: 20px;text-align: center;">
              <img src="{{ asset('images/icon-dashboard/Graphic 14.png') }}" width="70px" alt="rectangle" style="margin-bottom: 10px"><br>
            </a>
        </div>

        <h6>Arrow</h6>
        <a href="#" id="solid-line">
          <img src="{{ asset('images/icon-dashboard/Group 75.png') }}" width="200px" alt="rectangle" style="margin-bottom: 10px"><br>
        </a>
        <a href="#" id="dashed-line">
          <img src="{{ asset('images/icon-dashboard/Group 76.png') }}" width="200px" alt="rectangle" style="margin-bottom: 10px"><br>
        </a>
        <a href="#" id="dotted-line">
          <img src="{{ asset('images/icon-dashboard/Group 78.png') }}" width="200px" alt="rectangle" style="margin-bottom: 10px"><br>
        </a>
        <a href="#" id="solid-ArrowLine">
          <img src="{{ asset('images/icon-dashboard/Group 79.png') }}" width="200px" alt="rectangle" style="margin-bottom: 10px"><br>
        </a>
        <!-- <button id="dashed-arrow-line">Dashed Arrow</button>
        <button id="circle-line">Circle Line</button>
        <button id="square-line">Square Line</button>
        <button id="diamond-line">Diamond Line</button> -->
      </div>

    </div>
  </div>
</div>


  <script>
// JavaScript untuk mengganti gambar saat button diklik
document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        // Hapus kelas 'active' dari semua button
        document.querySelectorAll('.sidebar-button').forEach(btn => {
            btn.querySelector('img').src = btn.getAttribute('data-inactive-src');
            btn.classList.remove('active');
        });
        
        // Tambahkan kelas 'active' ke button yang diklik
        this.classList.add('active');
        this.querySelector('img').src = this.getAttribute('data-active-src');
    });
});
</script>