declare module "@ckeditor/ckeditor5-react" {
  import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

  import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
  import * as React from "react";
  import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

  const CKEditor: React.FunctionComponent<{
    disabled?: boolean;
    editor: typeof BalloonEditor;
    data?: string;
    id?: string;
    config?: EditorConfig;
    onReady?: (editor: ClassicEditor) => void;
    onChange?: (event: Event, editor: ClassicEditor) => void;
    onBlur?: (event: Event, editor: ClassicEditor) => void;
    onFocus?: (event: Event, editor: ClassicEditor) => void;
    onError?: (event: Event, editor: ClassicEditor) => void;
  }>;
  export default CKEditor;
}
