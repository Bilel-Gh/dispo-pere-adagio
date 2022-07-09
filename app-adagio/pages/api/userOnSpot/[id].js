import prisma from '/lib/prisma'

export default async function getUsersonSpot(req, res) {  
    // get id from params
    const { id } = req.query;
  // console.log("spotId [id]:", id);

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
    // const arrayOfUsers = arrayOfData.map(data => data.user)
    res.status(200).json(arrayOfData)
    } catch (error) {
    res.status(400).json({ error });
    }
}