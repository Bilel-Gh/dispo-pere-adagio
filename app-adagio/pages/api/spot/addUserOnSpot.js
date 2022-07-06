// create UserOnSpot
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import { useSession, getSession } from "next-auth/react"

export default async function addUserOnSpot(req, res) {
    const session = await getSession({ req });
  const { userId, spotId } = req.body;
  
  try {
    await prisma.userOnSpot.create({
      data: {
        userId: session ? session.user.id : null,
        spotId
      }
    })
    
    res.status(200).json({message : 'ajout réussi'})
  } catch (error) {
    res.status(400).json({ error });
  }
}