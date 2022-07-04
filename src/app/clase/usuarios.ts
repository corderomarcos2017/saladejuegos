import { elementAt } from "rxjs";

export class Usuarios {
    nombre:string;
    clave:string;
    ppt:string;
    ttt:string;
    adv:string;
    aho:string;
    tri:string;

    constructor(){
        this.nombre="";
        this.clave="";
        this.ppt="";
        this.ttt="";
        this.adv="";
        this.aho="";
        this.tri="";
    }
    /*---------------------------------------------------------------------------*/
    Actualizar(miAuxNomre:string){
       //Recupero el valor de lamatriz JSON
       let listadoUsuarios=[];

       //Recupero todos los datos del localstorage
       listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");

        // Definir variable que tendrá la posición del elemento a borrar
        let borrar = -1;
        // Recorrer arreglo por elemento y posición
        listadoUsuarios.forEach((item:any , index:number) => {
        if(item.nombre == miAuxNomre) {
            // Si el elemento coincide, actualizar variable
            borrar = index;
            // No hay posibilidad de usar break para cancelar
            // En todo caso, si son muchos elementos, conviene mejor usar un ciclo for
        }
        });

        // Borrar el elemento si existe en el arreglo
        if(borrar >= 0) {
            listadoUsuarios.splice(borrar, 1);
        }
           //Agrego un nuevo Registro a la matriz
           listadoUsuarios.push(this);

           //Actualizo la listado en el localStorage
           localStorage.setItem('listado',JSON.stringify(listadoUsuarios));
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
    /*---------------------------------------------------------------------------*/
    generarListadoDeUsuarios(){
        //Recupero el valor de lamatriz JSON
        let listadoUsuarios=[];

        //Recupero todos los datos del localstorage
        listadoUsuarios = JSON.parse(localStorage.getItem("listado") || "{}");
        
        return listadoUsuarios; 
    }
}

