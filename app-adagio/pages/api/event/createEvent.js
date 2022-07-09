// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '/lib/prisma'

export default async function createUser(req, res) {
  const { name, dateStart, dateEnd } = req.body;
  
  try {
    await prisma.event.create({
      data: {
        name,
        dateStart,
        dateEnd,
      }
    })
    
    res.status(200).json({message : 'ajout réussi'})
  } catch (error) {
    res.status(400).json({ error });
  }
}