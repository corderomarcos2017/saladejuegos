export class UsuarioTTT {
    nombre:string;
    fecha:Date;
    partidosGanados:number;
    partidosPerdidos:number;
    constructor(){
        this.nombre="";
        this.fecha=new Date();
        this.partidosGanados=0;
        this.partidosPerdidos=0;
    }
    guardarNuevoTTT(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        let listadoUsuariosTTT;
        if (localStorage.getItem("listadoTTT") === null) 
        {
            //Creo e inicializo la matriz por unica vez
            listadoUsuariosTTT = [];
        }
        else 
        {
            //Recupero el valor de lamatriz JSON
            listadoUsuariosTTT = JSON.parse(localStorage.getItem("listadoTTT") || "{}");
        }
        //console.log("listadoUsuarioTTT",listadoUsuariosTTT);
        //Agrego un nuevo Registro a la matriz
        listadoUsuariosTTT.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listadoTTT',JSON.stringify(listadoUsuariosTTT));
    }
        /*---------------------------------------------------------------------------*/

}
