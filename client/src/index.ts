import {DataClient} from "../vendor/services_grpc_pb";
import {credentials} from "grpc";
import {ping} from "../vendor/services_pb";


(async ()=>{


    const  client = new DataClient( `localhost:9001`  ,credentials.createInsecure())
    let pin = new ping();
    pin.setData(26)

    client.get(pin,(error, response) => {
        if(!error){
            console.log( "RES => "  +  response.getMessage() )
        }

    })

})()