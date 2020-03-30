import axios from "axios";

const MMKey = "df305db8d07b8dfe85a2419fda233462";

export default class LyricsService {
    static async getLyricsData(trackID){
        let res = await axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackID}&apikey=${MMKey}`);
        if (res.data.message.header.status_code < 200 || res.data.message.header.status_code >= 300) {
            throw Error('Error ' + res.data.message.header.status_code);
        }
        return res.data;
    }
}