import TrackListService from "../services/TrackListService";

export default class TrackListProvider {
  static async getTrackList(countrySelected) {
    let trackList = [];
    let trackListData = await TrackListService.getTrackListData(countrySelected);

    trackList = trackListData.message.body.track_list.map(it => {
      return {
          id: it.track.track_id.toString(),
          name: it.track.track_name,
      };
    });
    return trackList;
  }
}