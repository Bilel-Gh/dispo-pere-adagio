// get one user by email
// Compare this snippet from pages/api/getOneUser.js:
import prisma from '/lib/prisma'
// import { getSession } from "next-auth/client"

export default async function handler(req, res) {
    const { id } = req.query;
    
    try {
        // get one user
        const user = await prisma.spot.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        res.status(200).json(user)
        } catch (error) {
        res.status(400).json({ error });
        }
}