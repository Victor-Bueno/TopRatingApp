export default class CountryProvider {
    static async getCountries() {
        return [
            { id: 1, country: "Australia", value: "au"},
            { id: 2, country: "Brazil", value: "br"},
            { id: 3, country: "Italy", value: "it"},
            { id: 4, country: "United States", value: "us"},
            { id: 5, country: "United Kingdom", value: "uk"},
        ]
    }
}