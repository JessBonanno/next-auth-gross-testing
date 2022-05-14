import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await prisma.spotlight.findMany();
		if (result) {
			res.status(201).json(result)
		} else {
			res.status(500).json({ message: 'Internal Server Error' })
		}
} catch (error) {
	console.error(error)
}
}
