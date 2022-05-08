import Link from 'next/link';
import React from 'react';


export default function Home(): React.ReactElement {


	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Link href='/slate-edit'>Slate Blog Editor</Link>
			<Link href='/slate-blog'>Slate Blog</Link>
			<Link href='/quill-edit'>Quill Blog Editor</Link>
			<Link href='/quill-edit'>Quill Blog</Link>
			<Link href='/signin'>Sign In</Link>
		</div>
		);
}