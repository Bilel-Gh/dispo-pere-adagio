import prisma from '/lib/prisma'

export default async function refuseUserToSpot(req, res) {  
  const { userId, spotId } = req.body;
  try {
    // get all users
    const updateUser = await prisma.userOnSpot.update({
        where: {
          userId: parseInt(userId),
          spotId: parseInt(spotId),
          },
        data: {
          userStatus: 'REJECTED',
        },
      })
    
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}