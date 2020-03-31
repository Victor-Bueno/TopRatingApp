import LyricsService from "../services/LyricsService";

export default class LyricsProvider {
  static async getLyrics(trackID) {
    let lyricsData = await LyricsService.getLyricsData(trackID);

    return lyricsData.message.body.lyrics.lyrics_body;
  }
}