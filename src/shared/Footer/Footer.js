import './Footer.css'

export function Footer(){

    return(

        <footer>
            <div className="container-fluid">
                <div className="row p-4 pie">
                    <div className="col-12 col-md-4 align-self-center ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/Linkin-Park-logo.png?alt=media&token=0c40f1b5-dd2e-4acb-8a9c-aff7ee435ae8" alt="logo" className="img-fluid w-75"/>
                    </div>
                    <div className="col-12 col-md-4 text-center p-3">
                        <h4 className="fw-bold text-light">LINKIN PARK</h4>
                        <h5 className="text-light">Banda de Rock</h5>
                        <br/>
                        <h4 className="fw-bold text-light">Anderson Leon</h4>
                        <h5 className="text-light">2023</h5>
                        <br/>
                    </div>
                    <div className="col-12 col-md-4 p-5">
                        
                            <a href='https://github.com/aeleon0202'>
                                <i className="bi bi-instagram fuente me-5 text-light w-20"></i>
                            </a>
                            <a href='https://github.com/aeleon0202'>
                                <i className="bi bi-facebook fuente me-5 text-light "></i>
                            </a>
                            <a href='https://github.com/aeleon0202'>
                                <i className="bi bi-youtube fuente me-5 text-light"></i>
                            </a>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}