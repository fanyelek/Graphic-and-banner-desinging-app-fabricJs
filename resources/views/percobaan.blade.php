<!DOCTYPE html>
<html lang="en">
<head>
  
  @include('editor.tool.head')

</head>
<body>

  
    @include('editor.layouts.unsplash-images')

    <!-- Profit Editor -->
    <div id="editor">
        
        <!-- Deselect Element Overlay -->

        <!-- Top Menu Bar -->
        @include('editor.layouts.editor-top')
        <!-- Element Toolbar -->
        @include('editor.layouts.editor-left')
        

        <!-- Canvas Image -->
        <div id="editor-content">
            <div class="editor-space">
                <div class="toolbar-canvas">
                    <div class="icon-toolbar-canvas">
                        <a href="#" id="add-canvases"><img src="{{ asset('images/icon-dashboard/canvas-toolbar/Copy Icon.png') }}"></a>
                        <a href="#" id="duplicate-canvases"><img src="{{ asset('images/icon-dashboard/canvas-toolbar/Duplicate Icon.png') }}"></a>
                        <a href="#" id="lock-canvases"><img src="{{ asset('images/icon-dashboard/canvas-toolbar/Lock Icon.png') }}"></a>
                        <a href="#" id="delete-canvases"><img src="{{ asset('images/icon-dashboard/canvas-toolbar/Delete Icon.png') }}"></a>
                    </div>
                </div>

                <div class="editor-canvas">
                    <canvas id="graphic-editor-0" width='500px' height='500px'></canvas>
                </div>
            </div>
        </div>

        
        


    </div>

    @include('editor.tool.saveform')

    @include('editor.tool.scripts')

    <script>
        const copyIcon = "{{ asset('images/icon-dashboard/canvas-toolbar/Copy Icon.png') }}";
        const duplicateIcon = "{{ asset('images/icon-dashboard/canvas-toolbar/Duplicate Icon.png') }}";
        const lockIcon = "{{ asset('images/icon-dashboard/canvas-toolbar/Lock Icon.png') }}";
        const deleteIcon = "{{ asset('images/icon-dashboard/canvas-toolbar/Delete Icon.png') }}";
    </script>
  </body>
</html>
