import TrackListService from "../services/TrackListService";

export default class TrackListProvider {
  static async getTrackList(countrySelected) {
    let trackListData = await TrackListService.getTrackListData(countrySelected);
    trackList = trackListData.message.body.track_list;
    

    return trackList;
  }
}