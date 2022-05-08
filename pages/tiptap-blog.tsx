import React, { useContext } from 'react';
import { RootContext } from '../context/RootContext';
import Link from 'next/link';

const TipTapBlog = () => {
	return (
		<div>
			<div>TipTap Blog</div>
			<Link href="/tiptap-edit">Go to edit blog</Link>
		</div>
	);
}
export default TipTapBlog