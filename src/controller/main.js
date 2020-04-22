function main() {
    
    const baseURL = "https://5e805eab0eb3ec0016e910ad.mockapi.io/dokter"

    const getTop5 = () => {
        fetch(baseURL, {
            method: "GET"
        })
        .then(res => {
            return res.json()
        })
        .then(resJSON => {
            console.log(resJSON)
            renderCardDoctor(resJSON)
            /*
            ${baseURL}chart.artists.get?format=jsonp&callback=callback&country=id&apikey=ea9de825e9280a0dee50584db948e394
            if(resJSON.error){
                errorTop(resJSON.message)
            } else{
                renderTopArtist(resJSON.data)
            }*/
        })
        .catch(e => {
            console.log(e)
        })
    }

    const renderCardDoctor = (resJSON) => {
        const CardDoctor = document.querySelector("#doctoritems")
        CardDoctor.innerHTML = ""
        resJSON.forEach( dokter => {
            CardDoctor.innerHTML += `
            <div class="col-12 col-md-8 col-lg-4 py-3">
                <div class="card m-1">
                    <div class="card-body">
                        <img class="card-img-top" src="${dokter.avatar}" alt="album">
                        <h5 class="card-title mt-2">${dokter.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>`
        })
    }

    document.addEventListener("DOMContentLoaded", _ => {
        getTop5()
    })
}

export default main;