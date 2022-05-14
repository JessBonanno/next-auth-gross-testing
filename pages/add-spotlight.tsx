import axios from 'axios';
import React, { useState } from 'react'

type Props = {}

export interface FormData {
	menteeName: string;
	portfolioUrl?: string;
	githubUrl?: string;
	twitterUrl?: string;
	facebookUrl?: string;
	linkedinUrl?: string;
	instagramUrl?: string;
	youtubeUrl?: string;
	imageUrl?: string; // eventually this will not be optional once we hookup to 3rd party storage
	about: string;
}

const initialFormState = {
	menteeName: '',
	portfolioUrl: '',
	githubUrl: '',
	twitterUrl: '',
	facebookUrl: '',
	linkedinUrl: '',
	instagramUrl: '',
	youtubeUrl: '',
	imageUrl: '',
	about: '',
}

const AddSpotlight = (props: Props) => {
	const [formData, setFormData] = useState<FormData>(initialFormState);

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/spotlight/create-spotlight', {spotlightEntry: formData});
			console.log(res);
		} catch (err) {
			console.error(err);
		}
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					onChange={changeHandler}
					type="text"
					name="menteeName"
					placeholder="Name" />
				<input
					onChange={changeHandler}
					type="text"
					name="portfolioUrl"
					placeholder="Portfolio Url" />
				<input
					onChange={changeHandler}
					type="text"
					name="githubUrl"
					placeholder="Github Url" />
				<input
					onChange={changeHandler}
					type="text"
					name="twitterUrl"
					placeholder="Twitter Url" />
				<input
					onChange={changeHandler}
					type="text"
					name="facebookUrl"
					placeholder="Facebook Url" />
				<input
					onChange={changeHandler}
					type="text"
					name="linkedinUrl"
					placeholder="Linkedin Url" />
				<input
					onChange={changeHandler}
					type="text"
					name="instagramUrl"
					placeholder="Instagram Url" />
				<input onChange={changeHandler} type="text" name="youtubeUrl"
					placeholder="Youtube Url" />
				<input
					onChange={changeHandler}
					type="file"
					name="imageUrl" />
				<textarea
					onChange={changeHandler}
					name="about"
					placeholder="About" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default AddSpotlight;