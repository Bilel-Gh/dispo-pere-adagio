import prisma from '/lib/prisma'

export default async function getAllSpots(req, res) {  
  try {
    // get all users
    const events = await prisma.event.findMany()
    
    // return users
    res.status(200).json(events)
  } catch (error) {
    res.status(400).json({ error });
  }
}