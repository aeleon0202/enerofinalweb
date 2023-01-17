 import './Home.css'

 import { Footer } from '../shared/Footer/Footer'

 export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>LINKIN PARK</h2>
                            <p>
                            Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon, all of whom are founding members. Vocalists Mark Wakefield and Chester Bennington are former members of the band. Categorized as alternative rock, Linkin Park's earlier music spanned a fusion of heavy metal and hip hop, while their later music features more electronica and pop elements.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/concierto.jpg?alt=media&token=8030f76c-a366-461a-9826-1811f3fae29b" className="img-fluid w-100" ></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Noticias</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/lanzamiento.jpg?alt=media&token=03e313b3-f7b4-4d85-811e-c92c34dfceec" alt="" className="img-fluid w-100"/>
                            <h3 className="fw-bold color">Linkin Park homenajeará a Chester Bennington con un concierto en Los Ángeles</h3>
                            <p>
                                La banda estadounidense de rock Linkin Park rendirá homenaje al fallecido cantante Chester Bennington —que se suicidió en Los Ángeles— con un concierto especial en el legendario Hollywood Bowl de Los Ángeles (EE UU) el 27 de octubre, informó este lunes el grupo en su página oficial de Facebook.
                            </p>

                        </div>
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/muerte%20chester.jpg?alt=media&token=34c6ab73-4172-4baa-8689-2809ba125d9a" alt="" className="img-fluid w-100"/>
                            <h3 className="fw-bold color">Los recuerdos del funeral de Chester Bennington, a la venta en eBay por miles de dólares</h3>
                            <p>
                                El pasado sábado se celebró un funeral privado en homenaje a Chester Bennington, el cantante de Linkin Park que murió el pasado 20 de julio. En él, se repartieron acreditaciones como si fueran para un concierto en honor al artista. 
                            </p>

                        </div>
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/no-consumio-dorgas.jpg?alt=media&token=7c0e0c36-7066-4ba4-b732-08ffd90bff28" alt="" className="img-fluid w-100"/>
                            <h3 className="fw-bold color">Chester Bennington no consumió drogas cuando se suicidó, según revela la autopsia</h3>
                            <p>
                                El portal de noticias TMZ ha publicado el informe de la autopsia del vocalista de Linkin Park Chester Bennington, fallecido el pasado mes de julio, donde se demuestra que el cantante no consumió drogas cuando se suicidó..
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    )
 }