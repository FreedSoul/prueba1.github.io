(function(){

	var actualizarHora	= function(){
		/*tomando variable de tiempo*/
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			año = fecha.getFullYear();
		/*tomando los id para llenar de contenido*/	
		var pHoras = document.getElementById('horas'),
			pAmpm = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('sec'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pAño = document.getElementById('year');
		/*funciones que llenan el contenido con las variable anteriormente declaradas*/	
		
		var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;
		
		var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		pMes.textContent = meses[mes];
		
		pAño.textContent = año;

		/*haciendo reloj de 12 am - pm*/
		if (horas >= 12){
			horas = horas - 12;
			ampm = 'PM';
		}else{
			ampm = 'AM';
		};

		if (horas == 0){
			horas = 12;
		};

		pHoras.textContent = horas;

		if (minutos < 10){
			minutos = "0" + minutos;	
		} 
		pMinutos.textContent = minutos;

		if (segundos < 10){
			segundos = "0" + segundos;	
		}
		pSegundos.textContent = segundos;

		pAmpm.textContent = ampm;


	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);

}())