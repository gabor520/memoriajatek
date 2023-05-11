import Kartya from "./Kartya.js";

class Jatekter {
    #kepekLista=[];
    #kivalaszottKepekLista=[];

    constructor (kepekLista) {
        this.#kepekLista = kepekLista;
        let szuloElem = $("main");
        for (let index = 0; index < this.#kepekLista.length; index++) {
            let k = new Kartya(this.#kepekLista[index], szuloElem);
        }

        $(window).on("fordit", (event)=>{

        });
       
    }
}

export default Jatekter;

