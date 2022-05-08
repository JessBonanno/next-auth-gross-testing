import React, { useContext } from 'react';
import parse from 'html-react-parser';
import { RootContext } from '../context/RootContext';
import Link from 'next/link';

const QuillBlog = () => {
	const { blogData } = useContext(RootContext);

	console.log(blogData)
	return (
		<div>
			<div>{parse(blogData || '')}</div>
			<Link href="/quill-edit">Go to edit blog</Link>
		</div>
	);
}
export default QuillBlog