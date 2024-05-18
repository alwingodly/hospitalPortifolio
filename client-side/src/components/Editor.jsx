import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  // Sanitize the input before rendering
  const handleChange = (content) => {
    const cleanContent = DOMPurify.sanitize(content);
    onChange(cleanContent);
  };

  return (
    <div className="content">
      <ReactQuill
        value={value}
        theme={'snow'}
        onChange={handleChange}
        modules={modules}
      />
    </div>
  );
}
