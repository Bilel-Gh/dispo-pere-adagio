import prisma from '/lib/prisma'

export default async function isUserOnSpot(req, res) {  
    // get id from params
    const { spotId, userId } = req.body;

  try {
    // get one user
    const arrayOfData =await prisma.userOnSpot.findMany({ 
      where: {
        spotId: parseInt(spotId),
        userId: parseInt(userId),
      }
    })

    const isUserOnSpot = arrayOfData.length > 0 ? true : false;
    res.status(200).json(isUserOnSpot)
    } catch (error) {
    res.status(400).json({ error });
    }
}