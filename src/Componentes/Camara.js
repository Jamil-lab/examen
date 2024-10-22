import React,{ useRef }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Camara() {
  const videoRef = useRef(null);

  function handleAccessCamera(){
    navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream )=>{
      videoRef.current.srcObject = stream;
    })
    .catch((err)=>{
      console.error("Error al acceder ala camara: ",err);
    });
  }

  return (
    <div style ={{textAling: 'center', marginTop: '50px'}}>
      <center><h1>Acceder ala camara</h1></center>
      <center><button onClick={handleAccessCamera}>Activar camara</button></center>
      <div>
        <video ref={videoRef} autoplay style={{ width:'500px', height:'400px'}}></video>
      </div>
    </div>
  );
}

export default Camara;