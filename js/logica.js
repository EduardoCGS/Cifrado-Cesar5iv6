//vamos a utilizar javascript ver 6, apartir de funciones
//de tipo callback y funciones anonimas

var cesar = cesar || (function(){
    //una funcion que no tiene nombre, porque le da penita
    
    //funcion para la operacion del cifrado
    //texto, desp, accion
    var doStaff = function(txt, desp, action){
        //otra variable que se encargue del reemplazo de
        //la cadena origianl para realizar los movimientos
        //del cifrado
        var replace = (function(){
            //definir nuestro alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', '\u00f1', 'o', 'p', 'q', 'r', 's', 't', 'u',  'v', 'w', 'x',
        'y', 'z'];
            var zyx = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q',
        'p', 'o', '\u00f1', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f',  'e', 'd', 'c',
        'b', 'a'];
            //saber la longitud
            var l = abc.length;
            //voy a  retornar de mi funcion
            return function(c){
                //aqui adentro vamos a realizar la logica
                //que se encarga del cifrado y descifrado
                var i = abc.indexOf(c.toLowerCase());
                var j = zyx.indexOf(c.toLowerCase());
                //saber si esta vacio el campo
                if(i != -1){
                    //no esta vacia
                    var pos = i;
                    var posa = j;
                    var res = "";
                    //cifrar o descifrar
                    if(action){
                        //cifrando
                        res += (abc[pos])?abc[(pos+desp)%abc.length]:(abc[(pos+desp)%abc.length]);
                    }else{
                        //descifrando
                        res += (zyx[posa])?zyx[(posa+desp)%zyx.length]:(zyx[(posa+desp)%zyx.length]);
                    }
                    return res;
                }
                return c;
            };
        })();
        //tenemos que realizar una prueba del texto que estan
        //escribiendo en el textarea para que sea
        //solo lo que yo quiero
        var re = (/([a-n,\u00f1,o-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });

        
    }
    //necesiatar saber que estoy mandando
        //cifrado o descifrado, eso viene apartir de
        //el boton que tiene una funcion code y otra deco

        return{
            encode : function(txt, desp){
                return doStaff(txt, desp, true);
            },
            decode : function(txt, desp){
                return doStaff(txt, desp, false);
            }
        };
})();

//voy a crear mis funciones de cifrado

function codificar(){
    document.getElementById('resultado').innerHTML = cesar.encode(
        document.getElementById('cadena').value, 2
    );
     var Veces = document.getElementById('quantity').value;
     
}

function decodificar(){
    document.getElementById('resultado').innerHTML = cesar.decode(
        document.getElementById('cadena').value, 2
    );
}