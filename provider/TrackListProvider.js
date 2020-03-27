import TrackListService from "../services/TrackListService";

export default class TrackListProvider {
  static async getTrackList(countrySelected) {
    let trackList = [];
    let trackListData = await TrackListService.getTrackListData(countrySelected);
    trackListData = trackListData.message.body.track_list;
    for(let i = 0; i < trackListData.length; i++){
      trackList.push({id: '', name: ''})
      trackList[i].name = trackListData[i].track.track_name;
      trackList[i].id = trackListData[i].track.track_id.toString();
    }
    

    return trackList;
  }
}