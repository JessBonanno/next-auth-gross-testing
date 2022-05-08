import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { RootContext } from '../context/RootContext';

type Props = {

}

const SlateEdit = (props: Props) => {
	const [value, setValue] = useState('');
	const { blogData, setBlogData } = useContext(RootContext);

	const saveBlog = () => {
		setBlogData(value);
	}
	const eraseBlog = () => {
		setBlogData(null);
		setValue('')
	}

	return (
		<div>
			<button onClick={saveBlog}>Save</button>
			<button onClick={eraseBlog}>Clear</button>
			<Link href="/slate-blog">Go to blog</Link>
		</div>
	)
}

export default SlateEdit;
