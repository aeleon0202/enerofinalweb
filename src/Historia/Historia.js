import './Historia.css'
import { Footer } from "../shared/Footer/Footer"

export function Historia(){
    
    let titulo="Historia"

    let periodos=[
        {
            nombre:"Primeros años",
            foto:"http://autopistarock.com/images/noticias/LinkinPark/LinkinPark2017c.jpg",
            descripcion:" Los primeros años de la banda se remontan a un pequeño estudio del vocalista Mike Shinoda donde él, junto a un amigo y compañero de colegio Agoura High School, Brad Delson grabaron el primer material de la banda en 1995. Los dos estaban en el mismo instituto, donde conocieron a Rob Bourdon, actual baterista de la banda. Más adelante, cuando tomaron el tema de la banda más en serio, Shinoda contactó con Joe Hahn cuando estudiaba en el Art Center College de Pasadena. Por su parte, Delson compartió apartamento con el bajista David Farrell, quien decidió dejar el grupo, porque estaba comprometido con su otra formación. Farrell regresó un año más tarde. En esa época se unió a la banda Mark Wakefield, en 1996."
        },
        {
            nombre:"1997",
            foto:"https://www.sopitas.com/wp-content/uploads/2020/10/linkin-park-transmitira-concierto-inedito-por-20-anos-del-hybrid-theory.png",
            descripcion:"Ya en 1997 había seis integrantes en el grupo y decidieron llamarse SuperXero que posteriormente se veria resumida unicamente a Xero. Grabaron en la alcoba usada como estudio de Shinoda varias canciones con el fin de conseguir un contrato un sello discográfico. Aunque las compilaciones del Xero Sampler Tape se hicieron con pocos recursos, no pudo la banda conseguir un contrato y el proyecto no prosperó. La desilusión era tan grande dentro de la banda que por la misma razón Mark Wakefield decidió abandonar el grupo. Farrell, igual decidió abandonar el grupo por un tiempo, ya que su proyecto anteriormente dicho, la banda The Snax, tenía que hacer algunas giras, por lo que él les tenía que acompañar. Mientras eso se integra a la banda Kyle Christene, como bajista temporal."
        },
        {
            nombre:"",
            foto:"http://img.youtube.com/vi/yRpFQQLMcYs/hqdefault.jpg",
            descripcion:"Wakefield era vocalista de Xero, por lo que su salida provocó que el grupo consiguiera un nuevo cantante. Shinoda puso un anuncio en un periódico con el fin de contratar a un nuevo vocalista. Chester Bennington se interesó en aquel anuncio. Bennington es del estado de Arizona, estaba en el grupo Grey Daze y además empezó a grabar discos con el grupo mencionado anteriormente desde los 16 años. Recibió los demos del grupo, unos con las canciones interpretadas por otro vocalista y otro con las versiones instrumentales. Una vez terminado el trabajo de Bennington de grabar su voz en los demos instrumentales, los llamó avisando que estaba listo. Los de la banda le pidieron que una grabación que Bennington hizo la pusiera al teléfono. La banda quedó impresionada por su voz, por lo que decidieron convocarlo inmediatamente."
        }
    ]

    return(
        
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>

            <div className='container'>
                <p>
                Linkin Park es una banda estadounidense de rock procedente de Los Angeles, California, Estados Unidos. Formada en 1996, el grupo estuvo inicialmente integrado por Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon y Mark Wakefield, este último como voz principal. La banda inició en ese mismo año sus primeros trabajos musicales de manera independiente y posterior a esto grabaron su primer material llamado Xero; sin embargo no tuvieron gran éxito en la búsqueda de un sello discográfico ya que ninguno mostró interés en su trabajo, lo que ocasionó la renuncia de Mark Wakefield. Poco después, Chester Bennington se incorporó a la banda como vocalista; el grupo realizó su primera presentación en un club de Los Ángeles y siendo respaldados por Jeff Blue, en aquel entonces vicepresidente de Warner Bros. Records, lograron firmar con el sello en 1999. El nombre del grupo es un juego de palabras haciendo referencia al Lincoln Park en Santa Mónica.
                </p>
            </div>
                
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-1 g-5">

                    {
                        periodos.map(function(periodo){
                            return(
                            <>
                                <div className="container">
                                    <div className="row my-5">
                                        <div className="col-12 col-md-6">

                                            <img src={periodo.foto} alt="foto" className=" img-fluid w-100 h-100 rounded-circle"/>

                                        </div>
                                        <div className="col-12 col-md-6 border p-3 descripcionh">
                                            <h2 className="text-center fs-1">{periodo.nombre}</h2>
                                            <h5 className="text-center">{periodo.descripcion}</h5>
                                        </div>
                                    </div>
                                    
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
        <Footer/>
    </>
    )
}