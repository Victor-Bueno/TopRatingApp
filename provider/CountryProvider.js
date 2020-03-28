export default class CountryProvider {
    static async getCountries() {
        return [
            { id: "au", name: "Australia"},
            { id: "br", name: "Brazil"},
            { id: "it", name: "Italy"},
            { id: "us", name: "United States"},
            { id: "uk", name: "United Kingdom"},
            { id: "wx", name: "World Wide"},
        ]
    }
}