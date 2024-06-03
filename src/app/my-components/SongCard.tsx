import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { FC } from "react"

export interface Song {
    title: string,
    author: string,
    cover: string,
    spotify_link: string,
}

export const SongCard : FC<Song> = (song: Song) => {
  return (
    <Card>
        <CardHeader>
          <CardTitle>{song.title}</CardTitle>
          <CardDescription>By {song.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image 
            src={song.cover}  width={200}
            height={200} alt={song.title} />
        </CardContent>
        <CardFooter>
          <a href={song.spotify_link}>{song.spotify_link}</a>
        </CardFooter>
      </Card>
  )
}
