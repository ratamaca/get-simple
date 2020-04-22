class AppBar extends HTMLElement{

    connectedCallback(){
        this.render()
    }

    get value(){
        return this.querySelector('#Pencarian').value
    }

    render(){
        this.innerHTML = `
            <div class="container c-pastel-red br-0011">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h1 class='my-3 text-white font-weight-bold'>Daftar dokter</h1>
                        <p class="text-white">Jumlah dokter di rumah sakit A</p>
                        <div class="input-group m-b-3">
                            <input 
                              type="text" 
                              placeholder="Cari dokter" 
                              class="form-control" 
                              id="Pencarian">
                        </div>
                    </div>
                </div>
            </div>`
    }
}
customElements.define("app-bar", AppBar)