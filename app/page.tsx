import Container from "@/app/components/Container";

export const revalidate = 43200;

async function getData() {
  const res = await fetch("http://localhost:3000/factions", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  try {
    const data = await getData();

    return (
      <main className="flex h-screen justify-center min-w-full overflow-x-hidden">
        <Container data={data} />
      </main>
    );
  } catch (error) {
    console.error(error);

    return (
      <main className="flex h-screen justify-center items-center">
        <p>Failed to load data. Please try again later.</p>
      </main>
    );
  }
}
