import axios from "axios";
import MMKey from "../config/Constants"

export default class TrackListService {
    static async getTrackListData(countrySelected){
        let res = await axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=${countrySelected}&f_has_lyrics=1&apikey=${MMKey}`);
        if (res.data.message.header.status_code < 200 || res.data.message.header.status_code >= 300) {
            throw Error('Error ' + res.data.message.header.status_code);
        }
        return res.data;
    }
}