import React, { useContext } from 'react';
import { RootContext } from '../context/RootContext';
import Link from 'next/link';

const SlateBlog = () => {
	return (
		<div>
			<div>Slate Blog</div>
			<Link href="/slate-edit">Go to edit blog</Link>
		</div>
	);
}
export default SlateBlog