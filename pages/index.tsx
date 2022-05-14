import Link from 'next/link';
import React from 'react';


export default function Home(): React.ReactElement {


	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Link href='/tiptap-edit'>tiptap Blog Editor</Link>
			<Link href='/tiptap-blog'>tiptap Blog</Link>
			<Link href='/signin'>Sign In</Link>
		</div>
		);
}