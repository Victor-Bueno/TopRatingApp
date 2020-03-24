import TrackListService from "../services/TrackListService";

export default class TrackListProvider {
  static async getTrackList() {
    let trackListData = await TrackListService.getTrackListData();
    trackList = trackListData.message.body.track_list;
    

    return trackList;
  }
}