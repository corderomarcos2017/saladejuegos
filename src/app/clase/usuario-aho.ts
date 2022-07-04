export class UsuarioAho {
    
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
    guardarNuevoAHO(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        let listadoUsuariosAHO;
        if (localStorage.getItem("listadoAHO") === null) 
        {
            //Creo e inicializo la matriz por unica vez
             listadoUsuariosAHO = [];
        }
        else 
        {
            //Recupero el valor de lamatriz JSON
            listadoUsuariosAHO = JSON.parse(localStorage.getItem("listadoAHO") || "{}");
        }
        //console.log("listadoUsuarioAHO",listadoUsuariosAHO);
        //Agrego un nuevo Registro a la matriz
        listadoUsuariosAHO.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listadoAHO',JSON.stringify(listadoUsuariosAHO));
    }
}
