import LyricsService from "../services/LyricsService";

export default class LyricsProvider {
  static async getLyrics(trackID) {
    let lyricsData = await LyricsService.getLyricsData(trackID);
    lyricsBody = lyricsData.message.body.lyrics.lyrics_body;

    return lyricsBody;
  }
}