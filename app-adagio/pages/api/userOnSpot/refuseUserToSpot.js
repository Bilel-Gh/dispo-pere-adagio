import prisma from '/lib/prisma'

export default async function refuseUserToSpot(req, res) {  
  const { userId, spotId } = req.body;
  try {
    // get all users
  await prisma.userOnSpot.updateMany({
        where: {
          userId: parseInt(userId),
          spotId: parseInt(spotId),
          },
        data: {
          userStatus: 'REFUSED',
        },
      })
    
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}