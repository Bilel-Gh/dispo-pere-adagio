// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function createUser(req, res) {
  const {email, password, firstname, lastname, phone, jobId } = req.body;

  
  try {
    await prisma.user.create({
      data: {
        email,
        password,
        firstname,
        lastname,
        phone,
        jobId,
      }
    })
    
    res.status(200).json({message : 'ajout réussi'})
  } catch (error) {
    res.status(400).json({ error });
  }
}