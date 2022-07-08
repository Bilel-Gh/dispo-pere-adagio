import prisma from '/lib/prisma'

export default async function createUserOnSpot(req, res) {
  const { userId, spotId } = req.body;

//   console.log("REQUEST", req)

  try {
    await prisma.userOnSpot.create({ 
        data: {
          userId: parseInt(userId),
          spotId: parseInt(spotId),
          userStatus: "PENDING",
        },
    })
    
    res.status(200).json({message : 'ajout réussi'})
  } catch (error) {
    res.status(400).json({ error });
  }
}