import { Results } from "@/components/Results";
import { getBaseUrl } from "@/utils/baseUrl";

async function getData() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/movies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Results data={data} />
    </>
  );
}
