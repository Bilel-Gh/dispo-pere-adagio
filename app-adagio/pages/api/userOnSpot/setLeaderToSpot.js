import prisma from '/lib/prisma'

export default async function setLeaderToSpot(req, res) {  
  const { userId, spotId } = req.body;

  try {

    const userOnSpotChanged = await prisma.userOnSpot.updateMany({
        where: {
            userId: parseInt(userId),
            spotId: parseInt(spotId),
          },
        data: {
          userStatus: "LEADER",
        },
      })

      console.log("userOnSpotChanged", userOnSpotChanged);
    
    res.status(200).json(userOnSpotChanged)
  } catch (error) {
    res.status(400).json({ error });
  }
}