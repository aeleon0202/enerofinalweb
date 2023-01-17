import './Mercancia.css'
import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancia(){

    //activamos la navegación entre componenetes cuando se dé un evento
    let navegacion=useNavigate()
    // qué hago cuando se dé el evento...
    function detectarEvento(productoSeleccionado){
        
        navegacion('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Linkin Park Store"

    let productos=[
        {
            nombre:"Camiseta original gira colombiana",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fcamiseta-negra.webp?alt=media&token=52b5a4b4-7ea0-49fe-a663-e19829742356",
            precio:"$ 40.000",
            id:1

        },
        { 
            nombre:"Gorro original negro",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fcapucha.webp?alt=media&token=367aeb4f-dccd-43e9-a13b-96f12ca8eb01",
            precio:"$ 32.000",
            id:2
        },
        {
            nombre:"Chompa blanca mujer",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fchompa-blanca.webp?alt=media&token=209d8825-dc8f-4356-9cad-53c21143a17d",
            precio:"$ 65.000",
            id:3
        },
        {
            nombre:"Gorra gris original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fgorra-gris.webp?alt=media&token=224e2bcc-7321-4578-ad4c-8ce7f62a1e62",
            precio:"$ 47.000",
            id:4
        },
        {
            nombre:"Mug original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fmug.webp?alt=media&token=d0dfcbc5-e593-4850-92dd-5eeea9fbe4f3",
            precio:"$ 20.000",
            id:5
        },
        {
            nombre:"LPU disco vinilo",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Flpu.webp?alt=media&token=0e930701-7d79-4f83-b1c6-28a7ffbf6149",
            precio:"$ 87.000",
            id:6
        },
        {
            nombre:"Calcetines gris ",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fmedias.webp?alt=media&token=9cad1d02-9cb3-45d7-adfd-55b49e11405b",
            precio:"$ 17.000",
            id:7
        },
        {
            nombre:"Piernera original black",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fpiernera.webp?alt=media&token=7db14259-bfbb-4771-827d-3e0250c38841",
            precio:"$ 70.000",
            id:8
        },
        {
            nombre:"Mascota Linkin green",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Frobot.webp?alt=media&token=481e73da-72ef-449a-b22d-d990f704b730",
            precio:"$ 80.000",
            id:9
        },
        {
            nombre:"Poster neon ",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/tienda%2Fafiche.webp?alt=media&token=535f841f-cb07-413b-81dd-ecbd38cab34f",
            precio:"$ 27.000",
            id:10
        }
    ]


    return(
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5 g-5">

                    {
                        productos.map(function(producto,id){
                            return(
                                <div className='container' key={id}>
                                    <div className="col-12 my-4">
                                        <div className="card h-100 shadow">

                                            

                                            <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                            <h5 className="text-center titulo">{producto.nombre}</h5>
                                            <h4 className="text-center">{producto.precio}</h4>
                    


                                            <button className="btn btn-info mx-3 my-3 text-light" onClick={
                                                function(){
                                                    detectarEvento(producto)
                                                }
                                            }>Ampliar</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}