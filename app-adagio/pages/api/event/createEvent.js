import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();
  
const { name, dateStart, spots ,dateEnd } = req.body;  

try {
await prisma.event.create({
    data: {
      name,
      dateStart,
      dateEnd,
    }
    })
    res.status(200).json(events)
    } catch (error) {
    res.status(400).json({ error });
}
