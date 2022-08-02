import dbConnect from '../lib/dbConnect'
import Pet from '../models/Pet'
import Hero from '../components/Hero';
import EventList from '../components/EventList';

const Index = ({ pets }) => (
  <>
    <Hero />
    <EventList />
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Pet.find({})
  const pets = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })

  return { props: { pets: pets } }
}

export default Index
