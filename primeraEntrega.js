//Desarrollado por: Daniel Santamaría Tavera
const express = require('express')
const app = express()

let cursos = {
	curso1: {
		id: 1,
		nombre: 'Programación',
		duracion: '8 semanas',
		valor: 500000
	},
    
    curso2: {
    	id:2,
		nombre: 'Bases de datos',
		duracion: '8 semanas',
		valor: 540000
    },

    curso3: {
    	id:3,
		nombre: 'Redes de comunicación y gestion de servicios',
		duracion: '8 semanas',
		valor: 520000
    }
};

let mostrarInformacion = (id,nombre,duracion,valor,tiempo) =>{
	setTimeout(function(){
		console.log('Id del curso: '+ id);
		console.log('Nombre del curso: '+ nombre);
		console.log('Duración del curso: '+ duracion);
		console.log('Valor del curso: '+ valor +' pesos');
		console.log('\n');
	}, tiempo);
}

let mostrarArchivo = (id, nom, cc) =>{
	setTimeout(function() {

		if(id==1){
			texto = 'El interesado '+ nom + ' con cédula ' + cc 
			+ ' se ha matriculado en el curso ' + id + ' (' + cursos.curso1.nombre + ').' 
			+ 'El curso tiene una duración de ' + cursos.curso1.duracion 
			+ ' y su valor es de ' + cursos.curso1.valor +' pesos.'
		}

		if(id==2){
			texto = 'El interesado '+ nom + ' con cédula ' + cc 
			+ ' se ha matriculado en el curso ' + id + ' (' + cursos.curso2.nombre + ').' 
			+ 'El curso tiene una duración de ' + cursos.curso2.duracion 
			+ ' y su valor es de ' + cursos.curso2.valor +' pesos.'
		}

		if(id==3){
			texto = 'El interesado '+ nom + ' con cédula ' + cc 
			+ ' se ha matriculado en el curso ' + id + ' (' + cursos.curso3.nombre + ').' 
			+ 'El curso tiene una duración de ' + cursos.curso3.duracion 
			+ ' y su valor es de ' + cursos.curso3.valor +' pesos.'
		}

		console.log('\n');
		console.log ('El resultado se muestra en http://localhost:3000/');

		app.get('/', function (req, res) {
		res.send(texto)
		})
		app.listen(3000)

	}, 1000);
}

let insertar = () => {
	setTimeout(function() {
		const opciones = {
			idCurso: {
				demand: true,
				alias: 'i'
			},
			nombre: {
				demand:true,
				alias: 'n'
			},
			cedula: {
				demand: true,
				alias: 'c'
			}
		}

		const argv = require('yargs')
		      .command('inscribir','inscribirme en un curso', opciones)
		      .argv

		console.log(argv);
		cod = argv.idCurso;

		if (cod == 1 || cod == 2|| cod == 3){
			console.log('Id del curso: '+ cod);
			console.log('Tu nombre: '+ argv.nombre);
			console.log('Tu cédula: '+ argv.cedula);
			mostrarArchivo(cod, argv.nombre, argv.cedula);
		}else{
			console.log('El curso seleccionado no existe. Verifique nuevamente');
		}

	}, 7000)
}

mostrarInformacion(cursos.curso1.id, cursos.curso1.nombre, cursos.curso1.duracion, cursos.curso1.valor,2000);
mostrarInformacion(cursos.curso2.id, cursos.curso2.nombre, cursos.curso2.duracion, cursos.curso2.valor,4000);
mostrarInformacion(cursos.curso3.id, cursos.curso3.nombre, cursos.curso3.duracion, cursos.curso3.valor,6000);
insertar();



