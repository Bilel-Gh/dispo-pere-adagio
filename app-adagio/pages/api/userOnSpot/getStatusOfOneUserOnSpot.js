import prisma from '/lib/prisma'

export default async function getOneUserOnSpot(req, res) {  
    // get id from params
    const { spotId, userId } = req.body;

  try {
    // get one user
    const arrayOfData =await prisma.userOnSpot.findMany({ 
      where: {
        spotId: parseInt(spotId),
        userId: parseInt(userId),
      },
          include: {
        user: true,
      },
    })

    const statusOfUser = arrayOfData.map(data => data.userStatus)
    res.status(200).json(statusOfUser[0])
    } catch (error) {
    res.status(400).json({ error });
    }
}