export class Usuarios {
    nombre:string;
    clave:string;
    constructor(){
        this.nombre="";
        this.clave="";
    }
    guardar(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        if (localStorage.getItem("listado") === null) 
        {
            //Creo e inicializo la matriz por unica vez
            var listadoUsuarios = [];
        }
        else 
        {
            //Recupero el valor de lamatriz JSON
            listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
        }

        //Agrego un nuevo Registro a la matriz
        listadoUsuarios.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listado',JSON.stringify(listadoUsuarios));
    }

}

