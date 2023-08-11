import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VehicleService from '../services/VehicleService'

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        // async function getVehicles() {
        //     const res = await axios.get("http://localhost:8089/vehicle/get")

        //     setVehicles(res)
        // }
        // getVehicles()

        async function getVehicles() {
            const data = await VehicleService.getVehicles()
            setVehicles(data)
        }
        getVehicles()
    }, [])

    console.log(vehicles)

  return (
    <div>
        <div>Vehicle List</div>
        <table border={"2"} >
            <thead>
                <tr>
                    <th>Vehicle ID</th>
                    <th>Vehicle Model</th>
                    <th>Vehicle Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    vehicles.map((v) => {
                        return (
                            <tr key={v.vehicleid} >
                                <td>{v.vehicleid}</td>
                                <td>{v.modelno}</td>
                                <td>{v.company}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default VehicleList