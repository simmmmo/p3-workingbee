import ClientOnly from "../components/ClientOnly";
import Countries from "../components/Countries";

export default function Explore() {
  return (
     <>
        <ClientOnly>
          <Countries />
        </ClientOnly>
     </>
  );
}