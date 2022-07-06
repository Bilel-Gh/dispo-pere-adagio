const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function getUsersonSpot(req, res) {  
    // get id from params
    // const { id } = req.params;

  try {
    // get all users
    const arrayOfData =await prisma.userOnSpot.findMany({ 
        where: {
          spotId: 1,
        },
            include: {
          user: true,
        },
      })
    const arrayOfUsers = arrayOfData.map(data => data.user)
    
    // return users
    res.status(200).json(arrayOfUsers)
  } catch (error) {
    res.status(400).json({ error });
  }
}