angular.module('starter.controllers', ['ionic','ngCordova'])


.controller('entrarCtrl', function($scope, $state){
	$scope.entrar=function(){
		$state.go('login');
	}
})

//juntar login con md5
.controller('loginCtrl', function($scope,$state,$ionicPopup,$rootScope,$http){
	$scope.ingresar=function(run, password){
    console.log(run, password);
    $scope.rest=true;
    //$state.go('menu_parquimetrero');
    var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    pass2 =(MD5(password));
    console.log(pass2);
    //http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/
    //http://localhost/estacionamientoParra2/backend/web/index.php?r=api/
    $http.get("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/loginparquimetrero&usu="+run+"&pas="+pass2).success(function(data){
        $rootScope.sesion=data;
        console.log(data["respuesta"]);
        console.log(data);
        console.log("if error");
        if(data["respuesta"]=="false"){
           var alertPopupEr=$ionicPopup.alert({
                      title:'Parking APP',
                      template: ' Error al iniciar sesion, verifique sus datos'
                })   
           $state.go('login');
        }
        if(data["respuesta"]=="true"){
        $scope.nombre=$rootScope.sesion["tabla"][0]["nombre_parquimetrero"];
        console.log($scope.nombre);     
          var alertPopup=$ionicPopup.alert({
                title:'Parking APP',
                template: ' Bienvenido '+$scope.nombre
              })
          $state.go('menu_parquimetrero');
          }
      })
  };
  $scope.recuperarClave=function() {
    $state.go('recuperaClave');
  }
  
})



.controller('temporizadorCtrl', function($scope,$state,$ionicPopup,$cordovaBarcodeScanner,$rootScope,$http,$cordovaGeolocation) {
	$scope.leerCodigo = function(){
     var posicion = {enableHighAccuracy: false,
                  timeout:1000,
                  maximumAge:0};
  //$cordovaGeolocation.getCurrentPosition(posicion).then(function (position){
    var latitud ='-36.606643';//position.coords.latitude; //'-36.606643';
    var longitud ='-72.103416';//position.coords.longitude; //'-72.103416';//
    console.log(latitud);
    console.log(longitud);
    $scope.cupos=[];
 	 $http.get("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/obtenercupo").success(function(data){
        console.log("data");
        console.log(data);
        $scope.cupos=data;
        for (i=0;i<data.length;i++){
        	$scope.valLat=data[i]["latitud"]
        	$scope.valLong=data[i]["longitud"]
        	if ($scope.valLat==latitud && $scope.valLong==longitud){
        		$scope.idfCupo=data[i]["id_cupo"];
        		console.log("data id"+data[i]["id_cupo"]);
        		console.log($scope.idfCupo);
        		$rootScope.idCupo=$scope.idfCupo;
        		 console.log("root1"+$rootScope.idCupo);

        	}
		}

        
  }).error(function(error,status,headers,config){
            var alertPopup = $ionicPopup.alert({
            title: 'Parking APP',
            template: 'Error al obtener datos del servidor'
                  });
            });
     
    //});
	  $cordovaBarcodeScanner.scan().then ( function(imagenEscaneada){
		$scope.patente=imagenEscaneada.text;
        //$scope.patente="GTCC-46"
      console.log("root2"+$rootScope.idCupo);
      console.log($rootScope.idCupo);
      $scope.fecha=new Date();
      var hora=$scope.fecha.getHours() + ":" + $scope.fecha.getMinutes()+ ":" + $scope.fecha.getSeconds();
      $scope.rut=$rootScope.sesion["tabla"][0]["rut_parquimetrero"];
      $scope.idCupo=$rootScope.idCupo;
      console.log($scope.idCupo);
      $scope.datos={}
      var verPopup=$ionicPopup.show({
				title:'Parking APP',
				cssClass:'popup', 
        template:'<input type="text" ng-model="datos.patente" ng-init="datos.patente=patente" ng-disabled="!modTexto">',
				scope:$scope,
				buttons:[
				{ text: 'Enviar', 
				type: 'button-positive',
				onTap: function(e) {
				
           $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/registrarcobro",{
          	
            rutParquimetrero: $scope.rut,
            hora:hora,
            ideCupo:$rootScope.idCupo,
            obtPatente: $scope.patente
            }).success(function(data,status,headers,config){
           console.log(data["respuesta"]);
            console.log(data);
            if(data["respuesta"]=="true"){
           		 var alertPopup=$ionicPopup.alert({
            		title:'Parking APP',
            		template: ' Patente enviada correctamente'
            		})
           		}
            }).error(function(error,status,headers,config){
            var alertPopup = $ionicPopup.alert({
            title: 'Parking APP',
            template: 'Error al registrar'
                  });
         });


          
					
				}	
 				},
 				{ text: 'Modificar', type: 'button-assertive',onTap: function(e) {
   				$scope.modTexto = true;

             if ($scope.datos.valor==$scope.valor) {
            e.preventDefault();
           } else {
             var alertPopup=$ionicPopup.alert({title:'Parking APP',subTitle: 'Modificado a' ,template:$scope.datos.valor})
             e.preventDefault();

           }
          
 				}

 				},
 				{ text: 'Volver',
 	    type: 'button-balanced',
      	onTap: function(e){
        $scope.modTexto = false;
 		   return verPopup.close();
 	}
 }]
});
      verPopup.then(function(res){
        console.log('Presionado!', res);
      })
		
    },
		function (error){
			var alertPopup=$ionicPopup.alert({
				title:'Parking APP',
				template: 'Ha ocurrido un error'+ error
			})
		});
	}


	$scope.volverMenu=function(){
		$state.go('menu_parquimetrero');
	};
  })

//iniciar Turno
.controller('iniciarTurnoCtrl',function($scope,$state,$http,$rootScope,$ionicPopup){
  $scope.fecha=new Date();
  var DMA =  $scope.fecha.toISOString().slice(0, 10);
  var hora=$scope.fecha.getHours() + ":" + $scope.fecha.getMinutes()+ ":" + $scope.fecha.getSeconds();
  $scope.zonas=[];
  $scope.val={};
  $http.get("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/recuperarzona").success(function(data){
        console.log(data);
        $scope.zonas=data;
  });
  $scope.registraTurno=function(){
    $scope.rut=$rootScope.sesion["tabla"][0]["rut_parquimetrero"];
    $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/almacenarcontrol",{
             

             fechaControl: DMA,
             horaInicio: hora,
             rutParquimetrero: $scope.rut,
             idZona: $scope.val.seleccion


            }).success(function(data,status,headers,config){
           console.log(data["respuesta"]);
            console.log(data);
            $rootScope.zonaParquimetrero=$scope.val.seleccion;
            if(data["respuesta"]=="true"){
               var alertPopup=$ionicPopup.alert({
                title:'Parking APP',
                template: ' Turno iniciado correctamente'
                })
               $state.go('menu_parquimetrero');
              }
            }).error(function(error,status,headers,config){
            var alertPopup = $ionicPopup.alert({
            title: 'Parking APP',
            template: 'Error al iniciar turno'
                  });
         });

    console.log(DMA);
    console.log(hora);
    console.log($scope.val.seleccion);

  };
  $scope.volverMenu=function(){
    $state.go('menu_parquimetrero');

  }
})

//terminar Turno
.controller('terminarTurnoCtrl',function($scope,$state,$http,$rootScope,$ionicPopup){
  $scope.fecha=new Date();
  var DMA =  $scope.fecha.toISOString().slice(0, 10);
  var hora=$scope.fecha.getHours() + ":" + $scope.fecha.getMinutes()+ ":" + $scope.fecha.getSeconds();

   $scope.terminarTurno=function(){
    $scope.rut=$rootScope.sesion["tabla"][0]["rut_parquimetrero"];
   $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/actualizarcontrol",{
             

             fechaControl: DMA,
             horaF: hora,
             rutParquimetrero: $scope.rut
            

            }).success(function(data,status,headers,config){
           console.log(data["respuesta"]);
            console.log(data);
            if(data["respuesta"]=="true"){
               var alertPopup=$ionicPopup.alert({
                title:'Parking APP',
                template: ' Turno terminado correctamente'
                })
               $state.go('entrar');
              }
            }).error(function(error,status,headers,config){
            var alertPopup = $ionicPopup.alert({
            title: 'Parking APP',
            template: 'Error al terminar turno'
                  });
         });
            console.log(DMA);
             console.log(hora);
  };
  $scope.volverMenu=function(){
    $state.go('menu_parquimetrero');
  }
})

//liberar Estacionamiento
.controller('liberarEstacionamientoCtrl',function($scope,$state,$http,$rootScope,$ionicPopup){
  //Actualizacion de los Datos
  $scope.primerInicio=function(){
     $scope.cupos={};
    $scope.nuevosCupos={}; 
    $scope.idCobro={};
    console.log("actualiza tablas");
    var zonaP=$rootScope.zonaParquimetrero;
    console.log(zonaP);
    //http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/
    //http://localhost/estacionamientoParra2/backend/web/index.php?r=api/vehiculosestacionados &zon="+zona
   $http.get("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/vehiculosestacionados&zona="+ zonaP)
   .success(function(data){        
        //$rootScope.zonasOcupadas=data;
        console.log(data["respuesta"]);
        console.log(data);
        $scope.cupos=data["tabla"];
        //$rootScope.cuposEstacionados=$scope.cupos;
        console.log($scope.cupos);
        if(data["respuesta"]=="true"){ 
          //otras funcion si es correcto
          }else{
           console.log(error);
          }
     });
  };

  $scope.actualizar=function(){
    $scope.cupos={};
    $scope.nuevosCupos={}; 
    $scope.idCobro={};
    console.log("actualiza tablas");
    var zonaP=$rootScope.zonaParquimetrero;
    console.log(zonaP);
    //http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/
    //http://localhost/estacionamientoParra2/backend/web/index.php?r=api/vehiculosestacionados &zon="+zona
   $http.get("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/vehiculosestacionados&zona="+ zonaP)
   .success(function(data){        
        //$rootScope.zonasOcupadas=data;
        console.log(data["respuesta"]);
        console.log(data);
        $scope.cupos=data["tabla"];
        //$rootScope.cuposEstacionados=$scope.cupos;
        console.log($scope.cupos);
        if(data["respuesta"]=="true"){ 
          var alertPopup=$ionicPopup.alert({
                title:'Parking APP',
                template: 'Se Actualizaron los vehiculos estacionados.'
              })
          //otras funcion si es correcto
          }else{
            var alertPopupEror=$ionicPopup.alert({
                title:'Parking APP',
                template: 'Error no se pudo actualizar los vehículos estacionados'
              })
           console.log(error);
          }
     });
  };
  $scope.primerInicio();

  $scope.liberar=function(cobroCupo){
  	console.log("recibo cobro");
    console.log(cobroCupo);
    console.log("ID Cobro");
    console.log(cobroCupo.id_cobro);
    console.log("hora inicio");
    console.log(cobroCupo.hora_inicio);
    console.log("id cupo");
    console.log(cobroCupo.id_cupo);
    console.log("hora prueba");
    /*trasforamcion de horas a minutos*/
    var fhours=cobroCupo.fecha+","+cobroCupo.hora_inicio;
    var Xm=new Date(fhours);
    var hours= Xm.getHours();
    var horaAminI=hours*60;
    var segInicio=Xm.getSeconds();
    var segAmin=segInicio/60;
    var minInicio=Xm.getMinutes();
    var horaInicioMin=horaAminI+minInicio+segAmin;
    console.log(hours);
    console.log("nueva fecha creada desde BDD");
    console.log(Xm);
    console.log("hora inicio a minutos");
    console.log(horaInicioMin);
    //obtengo la hora en que libero el vehiculo
    $scope.fecha=new Date();
    var horaT=$scope.fecha.getHours() + ":" + $scope.fecha.getMinutes()+ ":" + $scope.fecha.getSeconds();
    console.log("hora termino");
    console.log(horaT);
    /*modificar hora de inicio para calculo*/
    var Ht=$scope.fecha.getHours();
    var horaAminT=Ht*60;
    var Hs=$scope.fecha.getSeconds();
    var segAminT=Hs/60;
    var HmT=$scope.fecha.getMinutes();
    var horaTerminoMin=horaAminT+HmT+segAminT;
    var difHora=horaTerminoMin-horaInicioMin;
    console.log("hora termino a minutos");
    console.log(horaTerminoMin);
    var d=Math.round(difHora);
    var montoPagar=d*cobroCupo.tarifa;
    var verPopup=$ionicPopup.show({
        title:'Parking APP',
        cssClass:'popup', 
        template:"<style>.popup { text-align: center; }</style><p>¿Está seguro que desea liberar el vehículo patente " +cobroCupo.patente+" Monto: $"+montoPagar+"  ?<p/>",
        scope:$scope,
        buttons:[
        { text: 'Si', 
        type: 'button-balanced',
        onTap: function(e) {
    console.log("diferencia de hora");
    console.log(difHora);
    console.log("hora entero");
    console.log(d);
    console.log("monto a pagar");
    console.log(montoPagar);    
    console.log("tarifa");
    console.log(cobroCupo.tarifa);                     
    console.log("Patente");
    console.log(cobroCupo.patente);
    /*preparacion de lo datos para actualizarlos en la BDD*/
    /*para cobro*/
    console.log("-------------");
    console.log("post para actualizar");
    //var montInfraccion=cobroCupo.monto_infraccion
    estadoInf=cobroCupo.estado_infraccion;
    $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/actualizarcobro",{
      idcobro: cobroCupo.id_cobro,
      idcupo:cobroCupo.id_cupo,
      horatermino: horaT,
      EstadoInfraccion: cobroCupo.estado_infraccion,
      montoT:montoPagar,
      montoInf:cobroCupo.monto_infraccion
      }).success(function(data,status,headers,config){
              console.log("respuestas");   
             console.log(data["respuestaCobro"]);
             console.log(data["respuestaCupo"]);
              console.log(data);
              if(data["respuestaCobro"]=="true" && data["respuestaCupo"]=="true"){
                $scope.primerInicio();
                 var alertPopup=$ionicPopup.alert({
                  title:'Parking APP',
                  template: 'Liberacion completada correctamente'
                  })
                }
              }).error(function(error,status,headers,config){
              var alertPopup = $ionicPopup.alert({
              title: 'Parking APP',
              template: 'Error al liberar vehículo'
                    });
           });
}
},
        { text: 'No',
      type: 'button-assertive',
        onTap: function(e){
       return verPopup.close();
  }
 }]
});
  }
    $scope.multar=function(cobroCupo){
    var verPopup=$ionicPopup.show({
        title:'Parking APP',
        cssClass:'popup', 
        template:"<style>.popup { text-align: center; }</style><p>¿Está seguro que desea multar el vehículo patente " +cobroCupo.patente+"  ?<p/>",
        scope:$scope,
        buttons:[
        { text: 'Si', 
        type: 'button-balanced',
        onTap: function(e) {
    console.log("recibo cobro");
    console.log(cobroCupo);
    console.log("ID Cobro");
    console.log(cobroCupo.id_cobro);
    console.log("hora inicio");
    console.log(cobroCupo.hora_inicio);
    console.log("id cupo");
    console.log(cobroCupo.id_cupo);
    console.log("hora prueba");
    /*trasforamcion de horas a minutos*/
    var fhours=cobroCupo.fecha+","+cobroCupo.hora_inicio;
    var Xm=new Date(fhours);
    var hours= Xm.getHours();
    var horaAminI=hours*60;
    var segInicio=Xm.getSeconds();
    var segAmin=segInicio/60;
    var minInicio=Xm.getMinutes();
    var horaInicioMin=horaAminI+minInicio+segAmin;
    console.log(hours);
    console.log("nueva fecha creada desde BDD");
    console.log(Xm);
    console.log("hora inicio a minutos");
    console.log(horaInicioMin);
    //obtengo la hora en que libero el vehiculo
    $scope.fecha=new Date();
    var horaT=$scope.fecha.getHours() + ":" + $scope.fecha.getMinutes()+ ":" + $scope.fecha.getSeconds();
    console.log("hora termino");
    console.log(horaT);
    /*modificar hora de inicio para calculo*/
    var Ht=$scope.fecha.getHours();
    var horaAminT=Ht*60;
    var Hs=$scope.fecha.getSeconds();
    var segAminT=Hs/60;
    var HmT=$scope.fecha.getMinutes();
    var horaTerminoMin=horaAminT+HmT+segAminT;
    var difHora=horaTerminoMin-horaInicioMin;
    console.log("hora termino a minutos");
    console.log(horaTerminoMin);
    var d=Math.round(difHora);
    var montoPagar=d*cobroCupo.tarifa;
    console.log("diferencia de hora");
    console.log(difHora);
    console.log("hora entero");
    console.log(d);
    console.log("monto a pagar");
    console.log(montoPagar);    
    console.log("tarifa");
    console.log(cobroCupo.tarifa);                     
    console.log("Patente");
    console.log(cobroCupo.patente);
    /*preparacion de lo datos para actualizarlos en la BDD*/
    /*para cobro*/
    console.log("-------------");
    console.log("post para actualizar");
    //var montInfraccion=cobroCupo.monto_infraccion
    estadoInf=cobroCupo.estado_infraccion;
    $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/actualizarmulta",{
      idcobro: cobroCupo.id_cobro,
      idcupo:cobroCupo.id_cupo,
      horatermino: horaT,
      EstadoInfraccion: cobroCupo.estado_infraccion,
      montoT:montoPagar,
      montoInf:cobroCupo.monto_infraccion
      }).success(function(data,status,headers,config){
              console.log("respuestas");   
             console.log(data["respuestaCobro"]);
             console.log(data["respuestaCupo"]);
              console.log(data);
              if(data["respuestaCobro"]=="true" && data["respuestaCupo"]=="true"){
                $scope.primerInicio();
                 var alertPopup=$ionicPopup.alert({
                  title:'Parking APP',
                  template: 'Multa ingresada correctamente'
                  })
                }
              }).error(function(error,status,headers,config){
              var alertPopup = $ionicPopup.alert({
              title: 'Parking APP',
              template: 'Error actualizacion de multa'
                    });
           });
}
},
        { text: 'No',
      type: 'button-assertive',
        onTap: function(e){
       return verPopup.close();
  }
 }]
});
  }
$scope.registrarInfraccion=function(){
    $state.go('registrar_Infraccion');
  }

  $scope.volverMenu=function(){
    $state.go('menu_parquimetrero');
  }

})

//nuevo Cliente
.controller('nuevoClienteCtrl',function($scope,$state,$http,$ionicPopup){
  $scope.clientes=[];
  $scope.nuevoCliente={};
  $scope.registrar=function(){
    console.log($scope.nuevoCliente.run);
    console.log($scope.nuevoCliente.password);
    var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    pass2 = MD5($scope.nuevoCliente.password);
    //http://localhost/estacionamientoParra2/backend/web/index.php?r=api/
    //http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/
    $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/registrarnuevocliente",{
      runCliente: $scope.nuevoCliente.run,
      nombreCliente: $scope.nuevoCliente.nombre,
      apellidoCliente: $scope.nuevoCliente.apellido,
      emailCliente: $scope.nuevoCliente.email,
      passwordCliente: pass2,
      telefonoCliente: $scope.nuevoCliente.telefono,
      patenteCliente: $scope.nuevoCliente.patente,
      marcaCliente: $scope.nuevoCliente.marca,
      modeloCliente: $scope.nuevoCliente.modelo
    }).
    success(function(data,status,headers,config){
      console.log(data["respuesta"]);
      console.log(data);
        $scope.clientes.push($scope.nuevoCliente);
        $scope.nuevoCliente={};
        var alertPopup=$ionicPopup.alert({
            title:'Parking APP',
            template: ' Nuevo cliente registrado '
            })
        $state.go('menu_parquimetrero');
    }).error(function(error,status,headers,config){
      console.log(error);
      var alertPopup = $ionicPopup.alert({
            title: 'Parking APP',
            template: 'Error al registrar'
          });
    });

  }
  $scope.cancelar = function(){
    $state.go('menu_parquimetrero');
  }
})


//cambiar contraseña
.controller('cambiarContraseniaCtrl',function($scope,$state,$rootScope,$http,$ionicPopup){
  $scope.claves=[];
  $scope.nuevoPass={};
  $scope.cambiarPass=function(){
    //revisar datos desde el formulario
    console.log($scope.nuevoPass.claveActual);
    console.log("--------");
    console.log($scope.nuevoPass.nuevaClave1);
    console.log("--------");
    console.log($scope.nuevoPass.nuevaClave2);
    console.log("--------");

    //recupero los datos de la sesion
    $scope.pass=$rootScope.sesion["tabla"][0]["password_parquimetrero"];
    $scope.run=$rootScope.sesion["tabla"][0]["rut_parquimetrero"];
    //reviso datos en consola
    console.log($scope.pass);
    console.log("--------");
    console.log($scope.run);
    console.log("--------");
    //verifico datos
    console.log("--------IF 1--------");
    var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    $scope.newpass=MD5($scope.nuevoPass.claveActual);
    console.log($scope.newpass);
    if ($scope.newpass == $scope.pass) {
      console.log("----entro al IF 1---pass principal coinciden");
      if ($scope.nuevoPass.nuevaClave1 == $scope.nuevoPass.nuevaClave2) {
        console.log("----entro al IF 2---pass nuevas coinciden");
        $scope.passEncritada=MD5($scope.nuevoPass.nuevaClave1);
        console.log("----nueva pass encriptada-----");
        console.log($scope.passEncritada);
        console.log("-------------");
        console.log("envia los datos");
        //http://localhost/estacionamientoParra2/backend/web/index.php?r=api/
        //http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/
        $http.post("http://parra.chillan.ubiobio.cl:8070/mcastill/estacionamientoParra/backend/web/index.php?r=api/cambioclave",{
          runPaquimetrero: $scope.run,
          nuevaPassword: $scope.passEncritada          
        }).success(function(data,status,headers,config){
          console.log(data["respuesta"]);
          console.log(data);
          $scope.claves.push($scope.nuevoPass);
          $scope.nuevoPass={};
          var alertPopup=$ionicPopup.alert({
                title:'Parking APP',
                template: 'Cambio de clave exitoso'
              })
          $state.go('entrar');
        }).error(function(error,status,headers,config){
            console.log(error);
            var alertPopup2 = $ionicPopup.alert({
              title: 'Parking APP',
              template: 'Error, no se realizo el cambio de clave'
              });
            
        });
        $state.go('cambiarContrasenia');


      }else{
        console.log("error de coincidencias de nueva claves");
        var alertPopup3 = $ionicPopup.alert({
              title: 'Parking APP',
              template: 'Claves nuevas no coinciden'
              });
        $state.go('cambiarContrasenia');
      }

    }else{
      var alertPopup4 = $ionicPopup.alert({
              title: 'Parking APP',
              template: ' Clave actual incorrecta'
          });
      $state.go('cambiarContrasenia');
    }
   
  }
  $scope.volverMenu=function(){
    $state.go('menu_parquimetrero');
  };
})
//redireccionamiento Menu
.controller('menuCtrl',function($scope,$state){
	$scope.iniciaTemp = function(){
		$state.go('inicar_temporizador');
	}
  $scope.iniciarTurno=function(){
    $state.go('iniciarTurno');
  }
  $scope.terminarTurno=function(){
    $state.go('terminarTurno');
  }
  $scope.liberarEstacionamiento=function(){
    $state.go('liberarEstacionamiento');
  }
  $scope.registrarInfraccion=function(){
    $state.go('registrar_Infraccion');
  }
  $scope.cambiarContrasenia=function(){
    $state.go('cambiarContrasenia');
  }
  $scope.nuevoCliente=function(){
    $state.go('nuevo_cliente');
  }
  $scope.salir=function(){
    $state.go('entrar');
  }
});
