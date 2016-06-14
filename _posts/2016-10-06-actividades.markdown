---
layout: post
title: "Primeros pasos"
date: "2016-06-10 12:00:00"
categories: android
author: Uclides Gil
image: /img/category/android.png
page: "http://127.0.0.1:4000/android/activities"
lang: es
---
Nuestro proceso de aprendizaje se llevará a cabo a través de las practicas. Considero que la mejor manera de aprender es haciendo y practicando. Este primer tema quizás contenga mucha información, pero ya verán que será de gran utilidad. Ya con nuestro Android Studio instalado lo primero que vamos a realizar es crear nuestro primer proyecto. Iniciamos nuestro IDE y seleccionamos la opción correspondiente


Luego procedemos a colocar el nombre a la aplicacion, en este caso omitimos el dominio de compañia ya que en primera instancia
vamos a realizar pruebas; en post siguientes se explicaran estos temas. Luego nos indica la localidad del proyecto en nuestros equipos:

![minipic](http://i.imgur.com/Io7Ylwu.png)

A continuación tenemos que establecer la compatibilidad de nuestra nueva aplicación, compatibilidad relacionada con las distintas versiones del SO de telefonos y tablets. Asi como también la version minima que soportará la aplicación. Dejamos la selección por defecto y continuamos

![directory](http://i.imgur.com/uMdFYaG.png)

Ahora tenemos que seleccionar el tipo de diseño de la principal actividad. Por defecto seleccionamos una **Actividad vacia**

![directory](http://i.imgur.com/OYQ0aXQ.png)

Finalmente debemos definir el nombre para nuestra actividad principal, tanto la clase como el layout. Por momentos dejamos los valores por defecto. Luego seleccionamos finalizar para que nuestro IDE proceda a generar los archivos necesarios para nuestra nueva aplicación.

![directory](http://i.imgur.com/hnN1dUC.png)

Ya creada la aplicación vamos a conocer todos los aspectos básicos de la misma; iniciando por explicar cada uno de los elementos que la componen. Para ello lo primordial es conocer cuál es la estructura básica de archivos de ella.

![minipic](http://i.imgur.com/fIowg2l.png)


* **manifests:** en esta carpeta se define el archivo AndroidManifest en donde se establecen todas las configuraciones y permisos para nuestra aplicación.

* **java:** define los paquetes que estructuran nuestra aplicación, ellos contienen las clases creadas por nosotros.

* **res:** carpeta que contiene todos los recursos a usar de manera generalizada. A su vez dicha carpeta contiene:

    * **drawable:** en ella disponemos de los recursos graficos para nuestra aplicación

    * **layout:** contiene todas las vistas de la interfaz gráfica que serán mostradas al usuario.

    * **mipmap:** carpeta que contiene todos los iconos que serán usados.

    * **values:** en ella se disponen los valores como los colores de la aplicación **colors.xml**, las dimensiones a configurar para la compatibilidad en los distintos dispositivos **dimens.xml** y texto a mostrar en las vistas **string.xml**. Pueden existir recursos tales como configuraciones de idiomas y otras más. Pronto haremos uso de ellos.


##### Actividades

Iniciamos con la **actividad**, puedo definirla como un componente de aplicación, que proporciona una pantalla que permite al usuario interactuar con el fin de hacer algo. Tal como marcar el teléfono, tomar una foto, enviar un correo electrónico, entre otras. Cada actividad está compuesta por una ventana en donde se presenta la interfaz de usuario. La ventana normalmente llena la pantalla, pero puede ser menor que la pantalla y flotar en la parte superior de otras ventanas.

Lo primero que debemos saber es que una actividad es declarada a través de XML. El cual consiste básicamente en ser un lenguaje de marcas utilizado para almacenar datos en forma legible. Si no lo conoces, por favor te invito a leer un poco más sobre el [**aqui**](https://es.wikipedia.org/wiki/Extensible_Markup_Language).

Ahora bien, ya tenemos un poco más claro los aspectos básicos de una aplicación Android. Es cierto que las definiciones anteriores son expresadas de manera sencilla y sin profundizar mucho. Si ustedes desean investigar más sobre la estructura básica de una aplicación los invito a que lo hagan; ya que mientras obtengamos más información, nuestras bases serán más sólidas.

Y llegamos a la parte más interesante de todas, **el código**. Android Studio nos posicionará en nuestra clase principal llamada por defecto **MainActivity**. El contenido de la misma será este:

{% highlight java %}
package com.example.usuario.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
{% endhighlight %}

En donde la primera linea nos indica el paquete por defecto de nuestra aplicación.
{% highlight java %}
package com.example.usuario.myapplication;
{% endhighlight %}

Las dos siguientes lineas se refieren a las clases importadas a usar por esta clase **"MainActivity"** 
{% highlight java %}
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
{% endhighlight %}

Despues se define el cuerpo de la clase de la que extiende de **AppCompactActivity**
{% highlight java %}
public class MainActivity extends AppCompatActivity
{% endhighlight %}

A continuación, se presenta el primer método llamado onCreate el cual es invocado al momento de iniciar la actividad. Pasándole
como argumento un objeto de la clase Bundle, el cual obtiene el estado anterior de la actividad si previamente ha sido suspendida. Es decir, si se inicia por primera vez nuestro objeto Bundle no tendrá nada que podamos usar. Pero si por alguna razón cambiamos de aplicación y volvemos a la nuestra si debería poseer información valida que podamos usar.

Luego se llama a super que pertenece a la clase padre para realizar la ejecución de la aplicación y seguidamente le pasamos a través del **setContentView** el archivo que posee la vista a relacionar con la actividad.

{% highlight java %}
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
{% endhighlight %}

Ya sabemos que una actividad normalmente está ligada a una vista, en este caso un **layout**. Ellos están definidos a través de XML como bien mencionamos anteriormente; se encuentran en la carpeta **res >layout** de nuestro proyecto. Si mantuviste los valores por defecto al momento de crear la aplicación tu archivo se llama **activity_main.xml**. Abrimos el archivo y podemos observar lo siguiente:

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="com.example.usuario.myapplication.MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="@+id/activity_main"
        app:layout_constraintLeft_toLeftOf="@+id/activity_main"
        app:layout_constraintRight_toRightOf="@+id/activity_main"
        app:layout_constraintTop_toTopOf="@+id/activity_main" />

</android.support.constraint.ConstraintLayout>
{% endhighlight %}

Para la versión del IDE que poseo actualmente **2.2 preview 3** se ha implementado el **android.support.constraint.ConstraintLayout** el cual consiste en ser el gestor de diseño de nuestro **layout**. Ahora bien, cómo podemos observar en nuestro código XML existen distintas etiquetas entre ellas **TextView** y la mencionada anteriormente **android.support.constraint.ConstraintLayout** dentro de cada etiqueta existen atributos en donde se definen las características de cada elemento que compone la vista, en este caso vamos a dar importancia  a estas:

{% highlight shell %}
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
{% endhighlight %}

La primera define el identificador único, seguido del ancho y posteriormente el alto para nuestro layout. El alto y ancho se encuentran definido por ** match_parent** el cual hace referencia a que tengan las mismas medidas que su padre **(clase ViewGroup.LayoutParams)**

Es importante mencionar que la a **‘@’** nos indica una referencia a un recurso. En general tiene este formato: **@[package:]type/name**, donde el paquete es opcional y sólo se indica cuando no pertenece a nuestra aplicación, el tipo corresponde a uno de los definidos en la carpeta res, y el nombre indica el identificador del recurso.

Seguimos con el **TextView** donde tiene como atributos el ancho y el alto como **wrap_content** que se adapta según el contenido que posea, el texto del mismo a través de **text** y los distintos tipos de posición en relación a algún elemento para este caso aplica: abajo, izquierda, derecha y arriba; respectivamente.

{% highlight shell %}
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello World!"
    app:layout_constraintBottom_toBottomOf="@+id/activity_main"
    app:layout_constraintLeft_toLeftOf="@+id/activity_main"
    app:layout_constraintRight_toRightOf="@+id/activity_main"
    app:layout_constraintTop_toTopOf="@+id/activity_main
{% endhighlight %}

Ya conocemos de manera básica como funcionan la actividad y su layout. Ahora bien, existen un archivo en donde se definen las características básicas y principales de nuestra aplicación, es el **AndroidManifest.xml** y se encuentra ubicado en la raíz de nuestro proyecto. Su configuración puede realizarse a través de una interfaz gráfica, pero es recomendable conocer la sintaxis ya que en muchas ocasiones será más fácil y rápido hacerlo desde el propio XML

{% highlight java %}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.usuario.myapplication">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
{% endhighlight %}

Nuestro archivo contiene datos por defecto necesarios para llevar a cabo la construcción de nuestra aplicación. Por ejemplo, tenemos el atributo **icon** en donde establecemos el icono de nuestra aplicación que se mostrara en el menú principal de nuestro launcher, así como de la aplicación en sí; también disponemos del nombre de la aplicación mediante **label**. El tipo de tema a usar con **theme**.

Es muy importante indicar que en este archivo es donde establecemos las actividades que va a poseer nuestra aplicación, en nuestro caso hemos creado una nada más. Pero podemos crear todas las necesarias que requiera nuestro desarrollo. Para este caso disponemos de:

{% highlight java %}
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
{% endhighlight %}

Como podemos observar en el código anterior, primero definimos que la clase **.MainActivity** hace referencia a nuestra actividad. Luego definimos a qué tipo de intención está relacionada esta actividad, es decir esto nos permite concretar el ámbito en el que se va a ejecutar. Además se define que será nuestra actividad principal y aparecerá en el menú de aplicaciones del sistema operativo.

Ya podemos ejecutar nuestra primera aplicación, para ello lo podemos realizar de dos maneras. A través de un dispositivo móvil con sistema operativo android o por la herramienta ADV que nos provee este IDE. Para la primera opción lo único que deben poseer es un cable USB para conectar su teléfono o Tablet, tener habilitada las opciones de depuración en el teléfono y permitir instalación de aplicación de terceros. Pueden verificar los pasos en el siguiente [post]()

Ahora, si no poseen un teléfono con Android deben realizar los siguientes pasos: 

En la sección superior de nuestro IDE nos posicionamos en el icono del **ADV manager**

![minipic](http://i.imgur.com/COpkS4j.png)

Se cargará una nueva ventana en donde debemos acceder al botón donde dice **crear dispositivo virtual**. Se abrirá otra ventana en donde nos aparece las distintas configuraciones de dispositivos por defecto. En mi caso seleccione **Nexus 5** pero ustedes pueden seleccionar cualquier otra. También pueden crear su dispositivo como ustedes prefieran en **nuevo perfil**. Debe hacer click en siguiente para continuar. 

![directory](http://i.imgur.com/9JepFGm.png)

Nuevamente se mostrará otra ventana en donde debemos seleccionar la versión del sistema operativo que tendra nuestro dispositivo virtual. Seleccionamos uno y continuamos.

![directory](http://i.imgur.com/cnatwN3.png)

Como ultimo paso nos solicitan el nombre que le deseamos colocar a nuestro dispositivo. Tambien nos permite configurar el tipo de dispositivo seleccionado previamente, la versión del SO, el tipo de horientación al iniciar **(horizontal/vertical)** y el tipo de recursos graficos que deseamos emular. Para crear nuestro dispositivo debemos dar click en finalizar.

![directory](http://i.imgur.com/cKvcYRE.png)

Ya con nuestro dispositivo android virtual creado, procedemos a iniciar la aplicación pulsando el botón con el símbolo play **(color verde)** que encuentra muy cerca del anterior para crear nuestro dispositivo virtual.

Al momento de iniciar nos solicitará por donde deseamos probar la aplicación. Podemos Seleccionar cualquier opción que tengamos configurada. Bien sea por el dispositivo virtual o físico; en mi caso seleccionaré mediante mi telefono personal. Seguidamente visualizaremos nuestra aplicación ejecutándose. 

![minipic](http://i.imgur.com/s9M1krK.png)

###### **Felicitaciones, ya tienes tu primera aplicacíon ejecutandose.**

Gracias por llegar hasta acá, quizás he sido muy extenso en este post, pero era necesario. Te invito a continuar con los siguientes post en donde cada tema se pone más interesante. :-)