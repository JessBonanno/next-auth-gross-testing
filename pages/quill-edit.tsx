import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { RootContext } from '../context/RootContext';

const QuillNoSSRWrapper = dynamic(
	import('react-quill'),
	{
		ssr: false,
		loading: () => <p>Loading ...</p>,
	}
);

type Props = {}

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		[{ size: [] }],
		[{ color: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'code', 'script', 'align', 'direction'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		['link', 'image'],
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
	'code-block',
	'code',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'color',
	'script',
	'align',
	'direction',
]

const QuillEdit = (props: Props) => {
	const [value, setValue] = useState('');
	const { blogData, setBlogData } = useContext(RootContext);

	const saveBlog = () => {
		setBlogData(value);
	}
	const eraseBlog = () => {
		setBlogData(null);
		setValue('')
	}

	console.log({ blogData });
	return (
		<div>
			<QuillNoSSRWrapper preserveWhitespace={true} theme="snow" modules={modules} placeholder={'compose here'} value={blogData || value} onChange={setValue} formats={formats} />
			<button onClick={saveBlog}>Save</button>
			<button onClick={eraseBlog}>Clear</button>
			<Link href="/quill-blog">Go to blog</Link>
		</div>
	)
}

export default QuillEdit;
