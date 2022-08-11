import ClientOnly from "../components/ClientOnly";
import ExploreList from "../components/ExploreList";
import ExploreTiles from "../components/ExploreTiles";


const pageContent = {
  page: "Explore",
  title: "Find Community Events",
  intro:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
};

export default function ClientSide() {
  return (
      <>
        <ClientOnly>
          <ExploreList pageContent={pageContent}>
            <ExploreTiles />
          </ExploreList>
        </ClientOnly>
      </>
  );
}