import './Integrantes.css'
import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){
    
    let titulo="Integrantes"

    let personas=[
        {
            nombre:"Chester Benington",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/chester%20benington.jpg?alt=media&token=2db22999-b694-43a0-b79a-dcd090a8f7ca",
            descripcion:" Chester Charles Bennington (nacido el 20 de marzo del 1976 en Phoenix) es un cantante, compositor y actor estadounidense, vocalista principal de la banda de rock alternativo, Linkin Park. Chester se dio a conocer en 2000 con la publicación del Hybrid Theory, álbum debut de la banda, después de que se unió a ella un año antes. El disco tuvo una fuerte repercusión comercial por lo que fue certificado diamante por la RIAA y junto a Linkin Park publicaron los álbumes de estudio Meteora, Minutes to Midnight, A Thousand Suns y Living Things , sin embargo Chester se abrió otros caminos en la música al iniciar en el año 2005 su banda llamada Dead By Sunrise. En 2007,1 Chester fue puesto en el lugar  en la lista de Los 100 mejores vocalistas del metal de todos los tiempos de la revista Hit Parader"
        },
        {
            nombre:"Mike Shinoda",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/mike%20shinoda.jpg?alt=media&token=8f0b01cf-e0a0-4c6b-9915-9c716151ced3",
            descripcion:"es un músico y productor discográfico estadounidense, integrante de las bandas Linkin Park y Fort Minor. Michael Kenji Shinoda nació el 11 de febrero de 1977 en Agoura, California. Su padre es japonés, mientras que su madre es rusa. Tiene un hermano menor llamado Jason.2 Estudió diseño gráfico e ilustración en el colegio privado Art Center School en Pasadena, California.1 Esposo de Anna Shinoda, padre de un hijo llamado 'Otis Akio Shinoda', se dice que tiene 2 hijos, pero solo se sabe de 'Otis'"
        },
        {
            nombre:"Brad Delson",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/brad%20delson.jpg?alt=media&token=4bf613df-4c94-400b-80a0-605e6b258be8",
            descripcion:"conocido como BBB(Big Bad Brad)(1 de diciembre de 1977), es el guitarrista líder de la banda de Nu metal y Rock alternativo, Linkin Park. También es el A&R de Machine Shop Recordings. En 1999, la banda de Delson, Xero, reemplazó al ex vocalista de Mark Wakefield con el natal de Arizona Chester Bennington y cambió su nombre por Hybrid Theory. En poco tiempo, Delson, junto con Shinoda, había producido el Hybrid Theory de seis pistas (EP), su distribución a distintos sitios web en línea y ganar culto de su propia banda . En el año 2000, después de un cambio más nombre de la banda, Linkin Park fue firmado por Warner Bros. Records. El 24 de octubre de 2000, Linkin Park lanzó el Hybrid Theory éxito abrumador. Durante el próximo año, Delson ayudó a producir el remix album Reanimation (2002), y añadió su propia visión creativa en la interpretación remezclada de Pushing Me Away . Después de reanimación, Delson jugó un papel clave en la producción de segundo álbum de estudio de Linkin Park, Meteora (2003), que contó con más pesados ​​riffs de guitarra que los de Hybrid Theory."
        },
        {
            nombre:"David Farrell",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/dave%20farrell.png?alt=media&token=50cb0f5b-20fd-4abd-9a41-ab1dfd30f1a3",
            descripcion:"más conocido como Phoenix (8 de febrero de 1977), es el bajista del grupo de Nu metal/Metal alternativo /Rock Alternativo Linkin Park.Farrell fue miembro de un grupo de ska cristiano conocido como Tasty Snax. Mientras asistía a la universidad, practicaba con Brad Delson tocando el bajo de Brad en su habitación. A pesar de esto, como tenía que viajar con su banda, los Tasty Snax, no pudo tocar con Delson y su banda, que se convertiría en Linkin Park. Tras cambiar su nombre a Snax, Farrell comenzó a tocar el bajo en la banda antes de abandonarla de nuevo para unirse a Linkin Park, normalmente en la banda usa bajos de la marca MMS Bass, casi siempre efectuando la tecnica de las puas."
            
        },
        {
            nombre:"Joe Hahn",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/joe%20hann.jpg?alt=media&token=90665e5d-867e-431a-9d48-d6c04c9ed93a",
            descripcion:"conocido también como Joe Hahn, Chairman Hahn o Mr. Hahn es conocido por su papel de DJ en la banda Linkin Park. Joe tiene un alter ego llamado Remy.Hahn se unió a Linkin Park, llamada en ese entonces Xero, en 1997 como el DJ de la banda. Desde entonces, el ha dirigido la mayoría de los videos de la banda (excepto One Step Closer"
            
        },

        {
            nombre:"Rob Bourdon",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/rob%20bourdon.jpg?alt=media&token=9f6c09dc-6523-4261-88ba-155aa1c7b194",
            descripcion:"el baterista de la banda de rock Linkin Park. También es el miembro más joven de la banda.Rob comenzó a tocar la batería a la edad de 10 años tras ver un concierto de Aerosmith. Ya que su madre fue la ex novia de Joey Kramer, el baterista de Aerosmith, Bourdon pudo estar en el backstage y ver toda la producción. A Rob también le gusta tocar piano cuando tiene tiempo. El acostumbraba a tomar lecciones cuando era joven y forzado a seguir. El es en general, el más callado de la banda. Siempre acostumbra a hacer solos de batería en los conciertos."
            
        }
    ]

    return(
        
        <>
            <h1 className="text-center titulo p-5">{titulo}</h1>
                 <div className="container">
                     <div className="row row-cols-1 row-cols-md-1 g-5">

                    {
                        personas.map(function(persona){
                            return(
                            <>
                                <div className="container">
                                    <div className="row my-5">
                                        <div className="col-12 col-md-6">

                                            <img src={persona.foto} alt="foto" className="h-100 img-fluid w-100"/>

                                        </div>
                                        <div className="col-12 col-md-6 border p-3 descripcion">
                                            <h2 className="text-center fs-1 p-5">{persona.nombre}</h2>
                                            <h5 className="text-center p-5">{persona.descripcion}</h5>
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