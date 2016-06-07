---
layout: post
title:  "Prepara tu equipo"	
date:   2016-06-01 12:00:00
categories: android
author: Uclides Gil
image: /img/android-studio.png
---

Iniciaremos configurando todo lo necesario para empezar a desarrollar nuestras aplicaciones en android. Para ello
necesitaremos un equipo que cumpla con los siguientes requisitos mínimos:

|                  Windows                   | #   |              Mac               | #   |             Linux              |
|:-----------------------------------------: |---  |:-----------------------------: |---  |:-----------------------------: |
| Microsoft® Windows® 7/8/10 (32- ó 64-bit)  | #   |   Mac® OS X® 10.8.5 ó mayor    | #   |          GNOME or KDE          |
|              2 GB RAM minimo               | #   |        2 GB RAM minimo         | #   |        2 GB RAM minimo         |
|       2 GB disponible en Disco Duro        | #   | 2 GB disponible en Disco Duro  | #   |  libreria GNU C (glibc) 2.11   |
|        resolución minima 1280 x 800        | #   |  resolución minima 1280 x 800  | #   |        2 GB RAM minimo         |
|        Java Development Kit (JDK) 8        | #   |  Java Development Kit (JDK) 6  | #   | 2 GB disponible en Disco Duro  |
|                                            | #   |                                | #   |  resolución minima 1280 x 800  |
|                                            | #   |                                | #   |  Java Development Kit (JDK) 8  |
|                                            | #   |                                | #   |                                |
|                                            |     |                                |     |                                |



#### Descargar elementos necesarios

En primera instancia debemos descargar la libreria java JDK (Java Development Kit) necesaria para poder ejecutar el Android Studio. Puedes descargar la versión compatible con tu sistema operativo [**aca**](https://www.oracle.com/technetwork/es/java/javase/downloads/index.html){:target="_blank"}. 

Actualmente la version disponible es la **Java SE 8u91 / 8u92**, ingresamos en el enlace JDK como se aprecia en la imagen:

![minipic](http://i.imgur.com/5OnfUPQ.png)

Antes de proceder a descargar es necesario aceptar los terminos de licencia de Oracle y luego si seleccionar el archivo correspondiente a nuestro Sistema Operativo. Imagen de referencia:

![minipic](http://i.imgur.com/SmFdcLa.png)

Solo queda realizar la descarga de Android Studio a través de su página oficial [**aqui**](https://developer.android.com/studio/index.html){:target="_blank"},

#### Instalación y configuración en Windows

Para configurar nuestro entorno primero debemos instalar el JDK para ello iniciamos el archivo descargado previamente. 

![minipic](http://i.imgur.com/qSqd8BK.png)

Seguimos los pasos que nos indica el instalador. Nos da la bienvenida y seleccionamos siguiente, luego nos indica cuales son los paquetes que se procederán a instalar. Presionamos siguiente y continuamos

![minipic](http://i.imgur.com/ymXW2hS.png)

La siguiente pantalla nos indica la ruta en donde se procederá a instalar. **Debemos recordar esta ruta para luego agregarla a las variables de entorno**.

![minipic](http://i.imgur.com/YgOlgxP.png)

Finalmente recibimos el mensaje indicando que se ha instalado correctamente nuestro Kit de desarrollo Java.

![minipic](http://i.imgur.com/38QRPkP.png)

##### Configurar variable de entorno

Para ello es necesario conocer la ruta donde fue instalado el JDK podemos acceder al directorio como por ejemplo en mi caso de ** C:\Program Files (x86)\Java\jdk1.8.0_91\bin** 

![directory](http://i.imgur.com/aeDWhi0.png)

Ya conocida la ruta en donde se encuentran nuestros binarios nos debemos dirigir a las configuraciones avanzadas del sistema > variables de entorno. Para ello existen diversas maneras quizás cambien según la versión del Windows que posea. Para este ejemplo uso Windows 7 y lo realizo de la siguiente manera:

click derecho en **MI PC > Propiedades > Configuración avanzada del sistema > variables de entorno**. En las imágenes se aprecian los pasos:


![minipic](http://i.imgur.com/xlw6AYr.png)

![minipic](http://i.imgur.com/9tArBye.png)

![minipic](http://i.imgur.com/fXz5fGm.png)

Luego seleccionamos la variable **Path** y accedemos a ella. Al final de la línea creamos un nuevo valor. Debemos colocar un punto y coma **";"** para agregar una nueva ruta, en este caso la actual de nuestra ruta de instalación del JDK. en mi caso **"C:\Program Files (x86)\Java\jdk1.7.0_71\bin"**. aceptamos y aplicamos. 

![minipic](http://i.imgur.com/k6KEgGS.png)

Luego de esto podemos abrir un **Procesador de Comandos de Windows** (cmd) y verificar que ya disponemos de java en nuestro equipo; escribimos lo siguiente en nuestra consola **"java -version"** e imprimirá un mensaje como el siguiente:

![minipic](https://i.imgur.com/WhaG3Gf.png)

¡Listo!  ya disponemos de java instalado y configurado en nuestro equipo. Ahora continuamos con el siguiente paso.

##### Instalar Android Studio

La instalación de nuestro IDE Android es muy sencilla, nos dirigimos a la carpeta donde previamente lo hemos descargado y procedemos a iniciar el proceso. En dicho proceso solo debemos seguir los pasos por defecto que nos indica la interfaz; quizás tome algún tiempo mientras carga todos los complementos. 

Al momento de iniciar por primera vez Android Studio nos pedirá descargar los paquetes esenciales para su funcionamiento, dejemos que los realice sin problema alguno. Puede tomar un poco de tiempo dependiendo de la conexión a internet que poseas.
Ahora bien, les recomiendo obtener todos los paquetes disponibles relacionados a las distintas versiones que posee Android para el desarrollo de las aplicaciones y tener nuestro entorno completo y al día para los temas que se verán muy pronto. Para ello debemos seguir los siguientes pasos: 

Al momento de crear un nuevo proyecto nos dirigimos a la sección de Configuración > SDK Manager y accedemos a ella

![minipic](https://i.imgur.com/4lowGVK.png)

Se abrirá otra ventana en donde tenemos que ingresar a **Launch Standalone SDK Manager**

![minipic](https://i.imgur.com/3US3126.png)

Seleccionamos todos los paquetes y luego aceptamos los paquetes a instalar. 

![minipic](https://i.imgur.com/O8GYmv6.png)

Esperamos a que se descarguen todos y tendremos a nuestro IDE completamente actualizado. :-)

#### Instalación y configuración en Linux

Para configurar en Linux he realizado la prueba en mi equipo. Personalmente uso Ubuntu para así facilitar un poco las cosas
y no complicar mucho el proceso de instalación, **ustedes puedes utilizar cualquier otra distribución de Linux**, las que mas 
les guste o se encuentren más familiarizada. Ahora bien los pasos podrían cambiar dependiendo a cual distro usen. Como poseo
**Ubuntu 14.04** en este momento esos son los pasos que indicaré. 



En primera instancia vamos a instalar la última versión de Java JDK disponible para la plataforma, para el caso de Ubuntu realizaremos lo siguiente:

Añadimos el repositorio para disponer de Java
{% highlight shell %}
sudo add-apt-repository ppa:webupd8team/java
{% endhighlight %}

actualizamos nuestro sistema
{% highlight shell %}
sudo apt-get update
{% endhighlight %}

Para la versión 8:
{% highlight shell %}
sudo apt-get install oracle-java8-installer
{% endhighlight %}

Para la versión 7:
{% highlight shell %}
sudo apt-get install oracle-java7-installer
{% endhighlight %}

Finalmente verificamos que la instalación se ha realizado correctamente con
{% highlight shell %}
java -version
{% endhighlight %}


##### Instalar Android Studio (Ubuntu)

Ubuntu nos permite utilizar una herramienta que nos facilita este proceso, se llama ubuntu make. Primero instalaremos dicho 
paquete y luego procederemos a descargar Android Studio desde allí. Para obtener Ubuntu Make necesitamos lo siguiente:

Añadimos el repositorio para Ubuntu Make
{% highlight shell %}
sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
{% endhighlight %}


Actualizamos nuestro Sistema
{% highlight shell %}
sudo apt-get update
{% endhighlight %}


Instalar Make
{% highlight shell %}
sudo apt-get install Ubuntu-make
{% endhighlight %}


Ya instalado, procedemos a instalar Android Studio de la siguiente manera:
{% highlight shell %}
umake android-studio
{% endhighlight %}


Si necesitas permisos puedes usar:
{% highlight shell %}
sudo umake android-studio
{% endhighlight %}


Aceptas todas las condiciones necesarias que te indique la consola, y listo. Tienes el IDE completamente instalado. Para poner al día tu IDE en la sección de Windows te explico cómo; son los mismo pasos a realizar.

**Estamos listo para iniciar con nuestro aprendizaje.**






