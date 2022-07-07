import prisma from '/lib/prisma'

export default async function getAllUsers(req, res) {  
  try {
    // get all users
    const users = await prisma.user.findMany();
    
    res.status(200).json({message : 'success'})
  } catch (error) {
    res.status(400).json({ error });
  }
}