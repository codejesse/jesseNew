import { NextResponse } from "next/server";

export async function GET() {
  const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
  } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return NextResponse.json({ isPlaying: false, message: "Missing Spotify API keys in .env" });
  }

  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    
    // 1. Get Access Token
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
      cache: "no-store",
    });

    if (!tokenResponse.ok) {
        return NextResponse.json({ isPlaying: false, message: "Failed to fetch Spotify token" });
    }

    const { access_token } = await tokenResponse.json();

    // 2. Fetch currently playing
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();

    if (song.item === null) {
      return NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      isPlaying,
      title,
      artist,
      albumImageUrl,
      songUrl,
    });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json({ isPlaying: false, message: "Server error" }, { status: 500 });
  }
}
