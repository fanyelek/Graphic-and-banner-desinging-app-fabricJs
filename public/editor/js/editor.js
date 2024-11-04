var canvasCount = 0;
var canvasOption = {};
var numberOfCanvas;
var canvasActiveId;
var canvas;

$(document).ready(function() {
 
  
  // Define Canvas
  function initializeCanvas(canvasId){
      
    const newcanvas = new fabric.Canvas(canvasId, {
      id: canvasCount,
      selectionColor: 'blue',
      selectionLineWidth: 2,
      width: 500,
      height: 500,      
    });

    newcanvas.preserveObjectStacking = true;
    canvasOption[canvasCount] = newcanvas;
    canvas = newcanvas;
    canvasCount++;

  }


  // Fungsi untuk menambah canvas di bawah canvas tertentu
  function addCanvasBelow(targetIndex) {
    // Geser semua canvas di bawah targetIndex ke posisi berikutnya
    for (let i = canvasCount - 1; i >= targetIndex + 1; i--) {
        canvasOption[i + 1] = canvasOption[i];
        const existingCanvas = document.getElementById("graphic-editor-" + i);
          if (existingCanvas) {
              existingCanvas.id = "graphic-editor-" + (i + 1);
          }
      }

      // Buat elemen untuk canvas baru
      const newEditorSpace = document.createElement("div");
      newEditorSpace.className = "editor-space";

      // Buat toolbar baru
      const newToolbar = document.createElement("div");
      newToolbar.className = "toolbar-canvas";
      newToolbar.innerHTML = `
          <div class="icon-toolbar-canvas">
              <a href="#" class="add-canvas-btn"><img src="${copyIcon}" alt="Add Canvas"></a>
              <a href="#"><img src="${duplicateIcon}"></a>
              <a href="#"><img src="${lockIcon}"></a>
              <a href="#"><img src="${deleteIcon}"></a>
          </div>
      `;

      const newEditorCanvas = document.createElement("div");
      newEditorCanvas.className = "editor-canvas";

      // Buat elemen canvas baru
      const newCanvas = document.createElement("canvas");
      newCanvas.id = "graphic-editor-" + (targetIndex + 1);

      // Tambahkan toolbar dan canvas ke dalam container baru
      newEditorSpace.appendChild(newToolbar);
      newEditorSpace.appendChild(newEditorCanvas);
      newEditorCanvas.appendChild(newCanvas);

      // Sisipkan elemen baru di DOM, tepat di bawah canvas dengan index target
      const editorContent = document.getElementById("editor-content");
      const targetElement = editorContent.children[targetIndex];
      editorContent.insertBefore(newEditorSpace, targetElement.nextSibling);

      // Inisialisasi canvas Fabric.js pada elemen baru
      const newCanvasFabric = new fabric.Canvas(newCanvas.id, {
          id: targetIndex + 1,
          selectionColor: 'blue',
          selectionLineWidth: 2,
          width: 500,
          height: 500,
      });
      newCanvasFabric.preserveObjectStacking = true;

      // Simpan canvas baru di canvasOption dan tambahkan event listener untuk tombol baru
      canvasOption[targetIndex + 1] = newCanvasFabric;
      canvas = newCanvasFabric;
      canvasCount++;
      getIdActiveCanvas();
      checkCanvasOptionCount()

  }


    // Tambahkan event listener pertama kali untuk canvas utama
    $('#editor-content').on('click', '.add-canvas-btn', function() {
        event.preventDefault()
        const targetIndex = Array.from(document.querySelectorAll('.editor-space')).indexOf(this.closest('.editor-space'));
        addCanvasBelow(targetIndex);
    });

    // Fungsi untuk membuat canvas utama pertama kali
    function initializeMainCanvas() {
        const newEditorSpace = document.createElement("div");
        newEditorSpace.className = "editor-space";

        // Buat toolbar dengan tombol "Add Canvas"
        const newToolbar = document.createElement("div");
        newToolbar.className = "toolbar-canvas";
        newToolbar.innerHTML = `
            <div class="icon-toolbar-canvas">
                <a href="#" class="add-canvas-btn"><img src="${copyIcon}" alt="Add Canvas"></a>
                <a href="#"><img src="${duplicateIcon}"></a>
                <a href="#"><img src="${lockIcon}"></a>
                <a href="#"><img src="${deleteIcon}"></a>
            </div>
        `;

        const newEditorCanvas = document.createElement("div");
        newEditorCanvas.className = "editor-canvas";

        // Buat elemen canvas baru
        const newCanvas = document.createElement("canvas");
        newCanvas.id = "graphic-editor-0";

        // Tambahkan toolbar dan canvas ke dalam container
        newEditorSpace.appendChild(newToolbar);
        newEditorSpace.appendChild(newEditorCanvas);
        newEditorCanvas.appendChild(newCanvas);

        // Tambahkan container baru ke dalam editor-content
        document.getElementById("editor-content").appendChild(newEditorSpace);

        // Inisialisasi canvas pertama
        initializeCanvas(newCanvas.id);
        getIdActiveCanvas();
    }

    initializeMainCanvas(); // Inisialisasi canvas pertama
    checkCanvasOptionCount();


    //count number of canvas
    function canvasCounting(){
        numberOfCanvas = Object.keys(canvasOption).length;
        document.getElementById('page-info').innerHTML = `PAGE <span style="color: #E99042;">${canvasActiveId}</span> / ${numberOfCanvas}`;
    }

    function getIdActiveCanvas(){
        canvasActiveId = canvas.id + 1;
        canvasCounting();
        scrollToActiveCanvas();
    }
    
    
    
    
    




    // NAVIGATOR PAGE 
    // Fungsi untuk scroll ke canvas yang sedang aktif
    function scrollToActiveCanvas() {
        const activeCanvasElement = document.getElementById(`graphic-editor-${canvasActiveId - 1}`);
        if (activeCanvasElement) {
            activeCanvasElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }


        
    // Fungsi untuk tombol next page
    function nextPage() {
        if (canvasActiveId < numberOfCanvas) {
            canvasActiveId++;
            let canvasChange = canvasActiveId - 1;
            canvas = canvasOption[canvasChange];
            canvasCounting();
            scrollToActiveCanvas();
        }
    }


    // Fungsi untuk tombol prev page
    function prevPage() {
        if (canvasActiveId > 1) {
            canvasActiveId--;
            let canvasChange = canvasActiveId - 1;
            canvas = canvasOption[canvasChange];
            canvasCounting(); // Update halaman setelah mengurangi canvasActiveId
            scrollToActiveCanvas();
        }
    }


    // Fungsi untuk menambah event listener
    function enableNavigatorPageListener() {
        document.getElementById('next-page').addEventListener('click', nextPage);
        document.getElementById('prev-page').addEventListener('click', prevPage);
    }

    function disableNavigatorPageListener() {
        document.getElementById('next-page').removeEventListener('click', nextPage);
        document.getElementById('prev-page').removeEventListener('click', prevPage);
    }


    // Periksa jumlah canvas dan aktifkan atau nonaktifkan navigator listener
    function checkCanvasOptionCount() {
        numberOfCanvas = Object.keys(canvasOption).length;

        if (numberOfCanvas > 1) {
            enableNavigatorPageListener();
        } else {
            disableNavigatorPageListener();
        }
    }

    
    // // Fungsi untuk memperbarui canvas aktif berdasarkan scroll
    // function updateActiveCanvasOnScroll() {
    //     const canvasElements = document.querySelectorAll(".editor-canvas canvas");
    //     canvasElements.forEach((el, index) => {
    //         const rect = el.getBoundingClientRect();
    //         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    //             let canvasChange = canvasActiveId - 1;
    //             canvas = canvasOption[canvasChange];
    //             console.log(index - 1);
    //             canvasCounting();
    //             scrollToActiveCanvas();
    //         }
    //     });
    // }

    // $(document).ready(function() {
    //     // Tambahkan event listener untuk scroll
    //     window.addEventListener('scroll', updateActiveCanvasOnScroll);
    // });





})
