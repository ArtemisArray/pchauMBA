/*
 * Service settings
 */
var WarehouseDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "53f7711ee4b051d053e00f29"
}
var VistaTestOneDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "53fdf905e4b051d053e38f82"
}

/*
 * Services
 */

var VistaTestOneDB_VistaTestOneCollection_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/VistaTestOneCollection',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': VistaTestOneDB_settings
});

var WarehouseDB_Merchandise_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Merchandise',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});