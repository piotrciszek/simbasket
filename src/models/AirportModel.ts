class AirportModel {
    icao: string;
    name: string;

    constructor(
        icao: string = '',
        name: string = '',
    ) {
        this.icao = icao;
        this.name = name;
    }
}

export default AirportModel;