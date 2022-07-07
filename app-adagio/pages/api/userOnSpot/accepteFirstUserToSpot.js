import prisma from '/lib/prisma'

export default async function accepteFirstUserToSpot(req, res) {  
  const { userId, spotId } = req.body;

  console.log("accepteFirstUserToSpot USERID AND SPOTID", userId, spotId)
  try {
    // get all users
    // const uniqueUserOnSpot = await prisma.userOnSpot.findUnique({
    //   where: {
    //     userId: parseInt(userId),
    //     spotId: parseInt(spotId),
    //   }
    // })

    console.log("uniqueUserOnSpot", uniqueUserOnSpot);

    await prisma.userOnSpot.updateMany({
        where: {
            userId: parseInt(userId),
            spotId: parseInt(spotId),
          },
        data: {
          userStatus: "FIRSTACCEPTED",
        },
      })
    
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}