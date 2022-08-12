import dbConnect from "../lib/dbConnect";
// import Event from '../models/Event';
import Hero from "../components/Hero";
import HomeList from "../components/HomeList";
import ClientOnly from "../components/ClientOnly";
import HomeTiles from "../components/HomeTiles";
import Link from "next/link";
import { client } from "./_app";
import { gql, useQuery } from "@apollo/client";
import { CalendarIcon, LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline'

const pageContent = {
  page: "Get Involved",
  title: "Latest Community Events",
  intro:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
};


const Index = ({ events }) => {

  return (
    <>
      <Hero />
      <ClientOnly>
          <HomeList pageContent={pageContent}>
            <HomeTiles />
          </HomeList>
        </ClientOnly>
    </>
  );
};

export async function getServerSideProps() {
  await dbConnect();


  const { data } = await client.query({
    query: gql`
      query GetEvents {
        getEvents {
          _id
          title
          subTitle
          organisationName
          category
          date
          startTime
          endTime
          eventImage
          locationName
          state
          suburb
          postcode
          description
          createdBy
        }
      }
    `,
  }
  );

  const events = data?.getEvents || [];

  // console.log({ events });

  return { props: { events: events } };
}

export default Index;
