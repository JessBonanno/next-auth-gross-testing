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
	return (
		<div>
			<QuillNoSSRWrapper theme="snow" >
				<p>TEst</p>
			</QuillNoSSRWrapper>
		</div>
	)
}

export default Blog;
