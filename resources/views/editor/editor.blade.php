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
        </div>
    </div>

    
    @include('editor.layouts.editor-bottom')

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
