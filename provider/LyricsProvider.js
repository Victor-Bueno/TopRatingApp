import LyricsService from "../services/LyricsService";

export default class LyricsProvider {
  static async getLyrics(trackID) {
    let Lyrics = await LyricsService.getLyricsData(trackID);
    Lyrics = Lyrics.message.body.lyrics.lyrics_body;

    return Lyrics;
  }
}