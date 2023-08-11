import axios from "axios";

class VehicleService {

    url = "http://localhost:8089/vehicle"

    async getVehicles() {
        const res = await axios.get(this.url + "/get")

        return res.data
    }
}

export default new VehicleService()