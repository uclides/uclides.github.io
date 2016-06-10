---
layout: post
title: "Actividades"
date: "2016-06-10 12:00:00"
categories: android
author: Uclides Gil
image: /img/category/android.png
page: "http://127.0.0.1:4000/android/activities"
lang: es
---
Una actividad es un componente de aplicación que proporciona una pantalla que permite al usuario interactuar con el fin de hacer algo, tal como marcar el teléfono, tomar una foto, enviar un correo electrónico, entre otras. Cada actividad está compuesta por una ventana en donde se presenta la interfaz de usuario. La ventana normalmente llena la pantalla, pero puede ser menor que la pantalla y flotar en la parte superior de otras ventanas.

En este post aprenderemos los aspectos esenciales de las actividades; vamos a comenzar.

Lo primero que debemos saber es que una actividad es declarada a través de XML. El cual consiste básicamente en ser un lenguaje de marcas utilizado para almacenar datos en forma legible. Si no conoces, por favor te invito a leer un poco más sobre ellos. 
Ahora bien, para crear nuestra primera aplicación iniciamos nuestro Android Studio y creamos un nuevo proyecto:

![minipic](http://i.imgur.com/Io7Ylwu.png)

Luego procedemos a colocar el nombre a la aplicacion, en este caso omitimos el dominio de compañia ya que en primera instancia
vamos a realizar pruebas. En post siguientes se explicaran estos temas y luego nos indica la localidad del proyecto en nuestros equipos:

![directory](http://i.imgur.com/JBysBOz.png)

ademas tenemos que establecer la compatibilidad de nuestra nueva aplicación, compatibilidad con telefonos y tablets, la version minima que soporta la aplicación. Dejamos la selección por defecto y continuamos

![directory](http://i.imgur.com/uMdFYaG.png)

Para asi seleccionar el tipo de actividad que deseamos prediseñar en nuestra aplicación. Por defecto seleccionamos una **Actividad vacia**

![directory](http://i.imgur.com/OYQ0aXQ.png)

Finalmente debemos definir el nombre para nuestra actividad principal, tanto la clase como el layout. Por momentos dejamos los valores por defecto para seleccionamos finalizar para que nuestro IDE proceda a generar los archivos necesarios para nuestra nueva aplicación.

![directory](http://i.imgur.com/hnN1dUC.png)

Ya creada Android Studio nos posicionará en nuestra clase principal llamada por defecto **MainActivity**