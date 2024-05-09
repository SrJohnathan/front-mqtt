use tonic::{Request, Response, Status};

use crate::services::data_server::{Data,DataServer};
use crate::services::{Ping, Pong};

#[derive(Default)]
 pub struct ServiceServe{}

#[tonic::async_trait]
 impl Data for ServiceServe {
    async fn get(&self, request: Request<Ping>) -> Result<Response<Pong>, Status> {
        let it = request.into_inner();
         let res =   it.data + 5 ;
        Ok( Response::new( Pong{ message : res.to_string()  }))
    }
}
pub fn service_serve () -> DataServer<ServiceServe> {
    DataServer::new( ServiceServe::default() )
    

}