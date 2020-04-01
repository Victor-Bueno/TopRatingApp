import TrackListService from "../services/TrackListService";

export default class TrackListProvider {
  static async getTrackList(countrySelected) {
    let trackListData = await TrackListService.getTrackListData(countrySelected);

    return trackListData.message.body.track_list.map(it => {
      return {
          id: it.track.track_id.toString(),
          name: it.track.track_name,
          details: {
            artist: it.track.artist_name,
            album: it.track.album_name,
            releaseDate: it.track.updated_time.substring(0, 9),
            explicit: it.track.explicit == 0 ? "No" : "Yes",
          },
      };
    });
  }
}