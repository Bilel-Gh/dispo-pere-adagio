// get one user by email
// Compare this snippet from pages/api/getOneUser.js:
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { getSession } from "next-auth/client"

export default async function handler(req, res) {
    const { id } = req.query;
    console.log('id :', id);
    
    try {
        // get one user
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id),
            }
        });
        res.status(200).json(user)
        } catch (error) {
        res.status(400).json({ error });
        }
}