use futures::future::try_join_all;
use tokio::task;
use tonic::transport::Server;

pub mod fun;
pub mod services;


pub(crate) const FILE_DESCRIPTOR_SET: &[u8] = include_bytes!("../proto/services_description.bin");

pub async  fn start(){

  let addr = "127.0.0.1:9001".parse().unwrap();
  
  let serv  = fun::service_serve();

  let reflection_service = tonic_reflection::server::Builder::configure()
      .register_encoded_file_descriptor_set(FILE_DESCRIPTOR_SET)
      .build()
      .unwrap();

let f1 =  task::spawn(async move {
    fun::start().await.unwrap();
    
  });
 let f2 = task::spawn(async move {

    Server::builder()
        .add_service(reflection_service)
        .add_service(serv)
        .serve(addr).await.unwrap();
    
  });

  try_join_all([f1,f2]).await.unwrap();

}