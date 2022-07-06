const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function getUsersonSpot(req, res) {  
    // get id from params
    const { id } = req.query;
  console.log("id :", id);

  try {
    // get one user
    const arrayOfData =await prisma.userOnSpot.findMany({ 
      where: {
        spotId: parseInt(id),
      },
          include: {
        user: true,
      },
    })
    const arrayOfUsers = arrayOfData.map(data => data.user)
    res.status(200).json(arrayOfUsers)
    } catch (error) {
    res.status(400).json({ error });
    }
}