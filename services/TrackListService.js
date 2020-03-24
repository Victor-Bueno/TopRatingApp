import axios from "axios";

const MMKey = "df305db8d07b8dfe85a2419fda233462";

export default class TrackListService {
    static async getTrackListData(){
        let res = await axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=br&f_has_lyrics=1&apikey=${MMKey}`)
        // .then(res => trackListData = res.data)
        // .catch(err => console.log(err));
        
        return res.data;
    }
}