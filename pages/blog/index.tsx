import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(
	import('react-quill'),
	{
		ssr: false,
		loading: () => <p>Loading ...</p>,
	}
);

type Props = {}

const Blog = (props: Props) => {


const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
	'color',
	'code',
	'script',
	'align',
	'direction',
	'code-block',
	
]

	return (
		<div>
			<QuillNoSSRWrapper theme="snow" modules={modules} formats={formats} >
				<p>TEst</p>
			</QuillNoSSRWrapper>
		</div>
	)
}

export default Blog;
