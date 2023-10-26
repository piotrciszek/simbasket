class WaypointModel {
    ident: string;
    wtype: string;

    constructor(
        ident: string = '',
        wtype: string = '',
    ) {
        this.ident = ident;
        this.wtype = wtype;
    }
}

export default WaypointModel;