// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers','ionic','ngCordova'])


.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $rootScope.sesion=[];
    $rootScope.nombreParquimietrero=[];
    $rootScope.rutParquimetrero=[];
    $rootScope.zonaParquimetrero=[];
    $rootScope.idCupo=[];
    $rootScope.cuposEstacionados=[];
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  //login
  .state('entrar',{
	url:"/entrar",
	templateUrl: "templates/login.html",
  cache:false,
	controller: "loginCtrl"
  })

  //Recuperacion de clave
  .state('recuperaClave',{
  url:"/recuperaClave",
  templateUrl:"templates/recuperaClave.html",
  })


  //menu parquimetrero
   .state('menu_parquimetrero',{
  url:"/menu_parquimetrero",
  templateUrl: "templates/menu_parquimetrero.html",
  controller: "menuCtrl"
  })

 //funcion 1 menu
  .state('inicar_temporizador',{
	url:"/inicar_temporizador",
	templateUrl: "templates/inicar_temporizador.html",
	controller: "temporizadorCtrl"
  })

  // funcion 2 menu
  .state('iniciarTurno',{
    url:"/iniciarTurno",
    templateUrl:"templates/iniciarTurno.html",
    controller:"iniciarTurnoCtrl"
  })

  // funcion 3 menu
  .state('terminarTurno',{
    url:"/terminarTurno",
    templateUrl:"templates/terminarTurno.html",
    controller:"terminarTurnoCtrl"
  })
  //funcion 4 menu
  .state('liberarEstacionamiento',{
    url:"/liberarEstacionamiento",
    templateUrl:"templates/liberarEstacionamiento.html",
    controller:"liberarEstacionamientoCtrl"
  })
 
  //funcion 5 menu
  .state('nuevo_cliente',{
	url:"/nuevo_cliente",
	templateUrl:"templates/nuevo_cliente.html",
  controller:"nuevoClienteCtrl"
  })

  //funcion 6 menu
  .state('cambiarContrasenia',{
  url:"/cambiarContrasenia",
  templateUrl:"templates/cambiarContrasenia.html",
  controller:"cambiarContraseniaCtrl"
  })

  //por defecto
  .state('index',{
	url:"/index",
	templateUrl: "templates/bienvenida.html",
	controller: "entrarCtrl"
  });

  // if none of the above states are matched, use this as the fallback
  //dejar entrar despues
  $urlRouterProvider.otherwise('/entrar');

});
