import prisma from '/lib/prisma'

export default async function accepteUserToSpot(req, res) {  
  const { userId, spotId } = req.body;

  console.log("userId, spotId_____", userId, spotId);

  try {
    // get all users
    await prisma.userOnSpot.updateMany({
        where: {
            userId: parseInt(userId),
            spotId: parseInt(spotId),
          },
        data: {
          userStatus: 'ACCEPTED',
        },
      })
      
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}