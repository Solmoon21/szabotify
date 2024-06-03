import { SONG_LIST } from '../constants.ts'
import { SongCard } from './my-components/SongCard.tsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {SONG_LIST.map((song) => ( <SongCard 
      key={song.spotify_link} 
      author={song.author} 
      title={song.title} 
      cover={song.cover} 
      spotify_link={song.spotify_link} 
      /> )
    )}
    </main>
  );
}
