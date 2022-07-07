import prisma from '/lib/prisma'

export default async function accepteFirstUserToSpot(req, res) {  
  const { userId, spotId } = req.body;

  console.log("accepteFirstUserToSpot USERID AND SPOTID", userId, spotId)
  try {
    // get all users
    await prisma.userOnSpot.update({
        where: {
            userId: parseInt(userId),
            spotId: parseInt(spotId),
          },
        data: {
          userStatus: 'FIRSTACCEPTED',
        },
      })
    
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}