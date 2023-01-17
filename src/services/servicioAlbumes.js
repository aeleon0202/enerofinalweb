import { tokenAlbum } from "./tokenAlbum"

export async function servicioAlbumesTop(){

    const URL="https://api.spotify.com/v1/albums/6XyY86QOPPrYVGvF9ch6wz/tracks?market=US&limit=5"

    const REQUEST={
        method:"GET",
        headers:{Authorization:"Bearer BQDe8ZWxsnjp8HG4Lw2dpSgVSLlpyAOm3Rc42EVpV6m_zD-eMNOSCtQ2wPo5GyntUAQJloy2nvKIJ2qeML8_KS4VbkCAtmqtlLwEbnlsDHJsEMw7MuRjWA7Z8wGBUml_KyRt5x4EAfUrTxrAZ6zUq0u6cm8nehOK7386mNJef3G2E8QOGVtoYKFDenqRxpttWOI"}
    }

    
    let respuesta=await fetch(URL,REQUEST)
    let albumes=await respuesta.json()

    return(albumes)
}
