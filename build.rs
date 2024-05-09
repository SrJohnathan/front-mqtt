

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_file = "./proto/services.proto";
   // let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    let out_dir = "./proto/services_description.bin";

    tonic_build::configure()
        .protoc_arg("--experimental_allow_proto3_optional") // for older systems
        .build_client(true)
        .build_server(true)
        .file_descriptor_set_path(out_dir)

       // .file_descriptor_set_path(out_dir.join("store_descriptor.bin"))
        .out_dir("./src")
        .compile(&[proto_file], &["proto"])?;

    Ok(())
}