import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	const { spotlightEntry } = req.body;
	console.log(spotlightEntry);
	try {
		const result = await prisma.spotlight.create({
			data: {
				menteeName: spotlightEntry.menteeName,
				portfolioUrl: spotlightEntry.portfolioUrl,
				githubUrl: spotlightEntry.githubUrl,
				twitterUrl: spotlightEntry.twitterUrl,
				facebookUrl: spotlightEntry.facebookUrl,
				linkedinUrl: spotlightEntry.linkedinUrl,
				instagramUrl: spotlightEntry.instagramUrl,
				youtubeUrl: spotlightEntry.youtubeUrl,
				imageUrl: spotlightEntry.imageUrl,
				about: spotlightEntry.about,
			}
		})
		console.log(result)
		if (result) {
			res.status(201).json({ message: 'Spotlight Entry Created' })
		} else {
			res.status(500).json({ message: 'Internal Server Error' })
		}
} catch (error) {
	console.error(error)
}
}
