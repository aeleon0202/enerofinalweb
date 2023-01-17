export async function tokenAlbum(){

    const client_id="client_id=f52bfe8cd93147a3addc75a2c23a9b66"
    const client_secret="client_secret=12de6392e4674ca5aa0daf1a1e9a043a"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio

    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)
}