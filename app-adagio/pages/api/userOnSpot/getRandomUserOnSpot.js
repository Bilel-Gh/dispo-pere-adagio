import prisma from '/lib/prisma'

export default async function getUsersonSpot(req, res) {  
    // get id from params
    const { spotId } = req.body;

  try {
    // get all users id from spot
    const findUsers = await prisma.userOnSpot.findMany({
        where: {
            spotId: parseInt(spotId),
        },
            include: {
            user: true,
        },
    })
    const getAllUsersId = findUsers.map(data => data.user.id)
    // get one randome id from getAllUsersId arrays
    const randomUserId = getAllUsersId[Math.floor(Math.random() * getAllUsersId.length)];

    // get one user
    const arrayOfData =await prisma.userOnSpot.findMany({ 
      where: {
        spotId: parseInt(spotId),
        userId: parseInt(randomUserId),
      },
          include: {
        user: true,
      },
    })

    const arrayOfUsers = arrayOfData.map(data => data.user)
    res.status(200).json(arrayOfUsers[0])
    } catch (error) {
    res.status(400).json({ error });
    }
}