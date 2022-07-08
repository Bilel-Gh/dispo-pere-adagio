import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export default async function getAllEvents(req, res) {
  
  //const { name, dateStart, spots ,dateEnd } = req.body;  
  
  try {
    // get all events
    const events = await prisma.event.findMany({ 
      include: {
      spots: true,
      },
    })
    /*await prisma.event.create({
      data: {
        name,
        dateStart,
        dateEnd,
        spots,
      }
    })*/
    console.table(events)
    
    // return events
    res.status(200).json(events)
  } catch (error) {
    res.status(400).json({ error });
  }
}