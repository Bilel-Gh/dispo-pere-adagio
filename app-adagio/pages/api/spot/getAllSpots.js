import prisma from '/lib/prisma'

export default async function getAllSpots(req, res) {  
  try {
    // get all users
    const spots = await prisma.spot.findMany({ 
      include: {
        users: true,
    },
  })
    
    // return users
    res.status(200).json(spots)
  } catch (error) {
    res.status(400).json({ error });
  }
}