// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '/lib/prisma'

export default async function createUser(req, res) {
  const { name, address, eventId } = req.body;

  
  try {
    await prisma.spot.create({
      data: {
        name,
        address,
        eventId,
      }
    })
    
    res.status(200).json({message : 'ajout réussi'})
  } catch (error) {
    res.status(400).json({ error });
  }
}