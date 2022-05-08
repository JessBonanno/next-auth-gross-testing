import React, { useContext, useEffect } from 'react';
import { RootContext } from '../context/RootContext';
import Link from 'next/link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import axios from 'axios';

const TipTapBlog = () => {
	const { blogData, setBlogData } = useContext(RootContext);

	const postBlog = async () => {
		try {
			const res = await axios.get('api/blog/get-entry');
			// const res = await axios.post('api/blog/create-entry', { entry: editor?.getJSON(), user: session.user })
			console.log(res)
			setBlogData(res.data.entry)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		postBlog();
	}, [])

	const editor = useEditor({
		extensions: [
			StarterKit,
			Highlight,
			Typography,
			Image,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
		],
		content: '',
	})

	editor?.commands.setContent(blogData)

	return (
		<div>
			{editor &&
				<EditorContent editor={editor} />
			}
			<Link href="/tiptap-edit">Go to edit blog</Link>
		</div>
	);
}
export default TipTapBlog;
