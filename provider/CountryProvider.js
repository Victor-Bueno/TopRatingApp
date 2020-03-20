export default class CountryProvider {
    static async getCountries() {
        return [
            { id: 1, name: "Australia", value: "au"},
            { id: 2, name: "Brazil", value: "br"},
            { id: 3, name: "Italy", value: "it"},
            { id: 4, name: "United States", value: "us"},
            { id: 5, name: "United Kingdom", value: "uk"},
        ]
    }
}