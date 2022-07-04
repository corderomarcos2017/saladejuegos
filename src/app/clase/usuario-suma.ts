export class UsuarioSuma {
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
    guardarNuevoSuma(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        let listadoUsuariosTRI;
        if (localStorage.getItem("listadoTRI") === null) 
        {
            //Creo e inicializo la matriz por unica vez
             listadoUsuariosTRI = [];
        }
        else 
        {
            //Recupero el valor de lamatriz JSON
            listadoUsuariosTRI = JSON.parse(localStorage.getItem("listadoTRI") || "{}");
        }
        //console.log("listadoUsuarioTRI",listadoUsuariosTRI);
        //Agrego un nuevo Registro a la matriz
        listadoUsuariosTRI.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listadoTRI',JSON.stringify(listadoUsuariosTRI));
    }

}
