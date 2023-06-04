import { Suspense } from 'react';
 
export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Initiate both requests in parallel
  const artistData = getArtist();
 
  // Wait for the artist's promise to resolve first
  const artist = await artistData;
 
  return (
    <>
      <h1>{artist.name}</h1>
      {/* Send the artist information first,
          and wrap albums in a suspense boundary */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Albums/>
      </Suspense>
    </>
  );
}
 
// Albums Component
async function Albums() {
  // Wait for the albums promise to resolve
  const albums = await getArtistAlbums();
 
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>{album.name}</li>
      ))}
    </ul>
  );
}



type Artist = {name: string};

async function getArtist() : Promise<Artist>{
  await sleep(5000);
  return {name: "rei"};
}

type Album = {id: string, name: string};

async function getArtistAlbums(): Promise<Album[]> {
  await sleep(8000);
  return [{id: "1", name: "first album"}]


}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

