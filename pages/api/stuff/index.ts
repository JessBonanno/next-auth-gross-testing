import { NextApiRequest, NextApiResponse } from 'next';
// pages/api/post/index.ts

import { getSession } from 'next-auth/react';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
		res.statusCode = 200;
		res.json({ message: "Hello from stuff" });
	}
