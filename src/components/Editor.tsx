import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({ formData, setFormData }) => {
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setFormData({ ...formData, description: content });
  }

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        // there's a known issue with how tinymce works where the intialValue and value
        // come into conflict when using useState. tinymce recommend removing initialValue
        // and setting the initial value as the the default state value i.e. formData.description
        // is set to the placeholder text instead of just an empty string
        // initialValue="<p>This is the initial content of the editor.</p>"
        apiKey={process.env.TINY_API_KEY}
        init={{
          height: 500,
          menubar: true,
          plugins: 'advlist autolink lists link image charmap preview anchor ' +
            'searchreplace visualblocks code fullscreen ' +
            'insertdatetime media table code help wordcount'
          ,
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        value={formData.description}
        onEditorChange={handleEditorChange}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}

export default TextEditor