import prisma from '/lib/prisma'

export default async function getAllSpots(req, res) {  
  const { eventId } = req.query;
  // console.log("getAllSpots ID__________", req.body);
  try {
    // get all users
    const spots = await prisma.spot.findMany({ 
      where: {
        eventId: parseInt(eventId),
      },
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