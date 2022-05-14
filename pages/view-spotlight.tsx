import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FormData } from './add-spotlight';
type Props = {}



const ViewSpotlight = (props: Props) => {
	const [spotlights, setSpotlights] = useState<FormData[]>([]);

	const getSpotlights = async () => {
		try {
			const res = await axios.get('/api/spotlight/get-spotlight');
			setSpotlights(res.data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getSpotlights();
	}, []);


	return (
		<div>
			<h1>ViewSpotlight</h1>
			{spotlights && spotlights.map((spotlight, idx) => {
				return (
					<div key={idx}>
						<p>Name: {spotlight.menteeName}</p>
						{spotlight.portfolioUrl &&
							<p>Portfolio: {spotlight.portfolioUrl}</p>
						}
						{spotlight.githubUrl &&
							<p>Github: {spotlight.githubUrl}</p>
						}
						{spotlight.twitterUrl &&
							<p>Twitter: {spotlight.twitterUrl}</p>
						}
						{spotlight.facebookUrl &&
							<p>Facebook: {spotlight.facebookUrl}</p>
						}
						{spotlight.linkedinUrl &&
							<p>Linkedin: {spotlight.linkedinUrl}</p>
						}
						{spotlight.instagramUrl &&
							<p>Instagram: {spotlight.instagramUrl}</p>
						}
						{spotlight.youtubeUrl &&
							<p>Youtube: {spotlight.youtubeUrl}</p>
						}
						<p>About: {spotlight.about}</p>
					</div>
				)
			})}
		</div>
	)
}

export default ViewSpotlight;