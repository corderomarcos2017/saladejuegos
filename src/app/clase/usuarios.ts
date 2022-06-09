export class Usuarios {
    nombre:string;
    clave:string;
    constructor(){
        this.nombre="";
        this.clave="";
    }
    /*---------------------------------------------------------------------------*/
    guardar(){
        //Pregunto: Si la matrizJSON no existe en el localStorage 
        if (localStorage.getItem("listado") === null){
            //Creo e inicializo la matriz por unica vez
            var listadoUsuarios = [];
        } else {
            //Recupero el valor de lamatriz JSON
            listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
        }

        //Agrego un nuevo Registro a la matriz
        listadoUsuarios.push(this);

        //Actualizo la listado en el localStorage
        localStorage.setItem('listado',JSON.stringify(listadoUsuarios));
    }
    /*---------------------------------------------------------------------------*/
    encontrarUsuario(miAuxNomre:string,miAuxClave:string){
        //Recupero el valor de lamatriz JSON
        let listadoUsuarios=[];
        let encontrado = "NO";
        //Recupero todos los datos del localstorage
        listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
        //console.info("Matriz : ", listadoUsuarios);
        if(Object.entries(listadoUsuarios).length!=0){
            //recorro todo el contenido de la matriz
            listadoUsuarios.forEach((element: any): void => {
                //Si el nombre de usuario ingresado es igual al guardado 
                if(element.nombre==miAuxNomre){
                //Si la contraseña es igual a la guardada
                if(element.clave==miAuxClave){
                    encontrado = "SI";
                } 
                }
            });
        }
        return encontrado; 
    }

}

