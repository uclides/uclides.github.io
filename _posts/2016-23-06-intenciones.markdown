---
layout: post
title: "Intenciones"
date: "2016-06-23 12:00:00"
categories: android
author: Uclides Gil
image: /img/category/android.png
page: "http://127.0.0.1:4000/android/intents"
lang: es
---

Las intenciones son aquellos objetos que nos permiten interconectar componentes de la misma o de distintas aplicaciones. Ahora bien
podemos mencionar que principalmente se usan para iniciar actividades o enviar distintos eventos.

Explicaré su funcionamiento. Es hora de echar código:

Primero debemos crear un método que nos permita iniciar la intención para ello defino el mismo de la siguiente manera:

{% highlight java %}
 public void launchIntent(View view){
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse("https://uclides.github.io"));
        startActivity(intent);
    }
{% endhighlight %}

Es un tipo de método público que no retorna un resultado, me refiero a esto ya que se encuentra definido con el modificador de acceso **public** y el tipo de dato en **void**. Les invito a conocer los mismo de manera más detallada para poder comprender la estructura de las clases en java. Dentro de dicho método creamos un objeto tipo **Intent** llamado intent el cual le indicamos que tipo de intención será. Para este caso en un tipo de acción de vista:

{% highlight java %}
        Intent intent = new Intent(Intent.ACTION_VIEW);
{% endhighlight %}

Ya creado el objeto y el tipo debemos pasar el dato a colocar al momento de la llamada a través de **intent.setData()**. Le indicamos que será una llamada a una pagina mediante el elemento **Uri** realizando la llamada del método *parse* y pasando como argumento la url de ejemplo:

{% highlight java %}
        intent.setData(Uri.parse("https://uclides.github.io"));
{% endhighlight %}

Ahora bien, solo queda iniciar la intención mediante la llamada al método startActivity pasando como argumento el objeto **intent** previamente definido

{% highlight java %}
        startActivity(intent);
{% endhighlight %}

Ya con el método estructurado y de manera ejemplar crearemos un botón que nos permita ejecutar la intención creada anteriormente. Para ello nos debemos ubicar en el **layout** **activity_main.xml** o si le cambiaste el nombre navega hasta él y procederemos a agregar los siguiente 

{% highlight xml %}
        <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Lanzar Navegador"
        android:id="@+id/button"
        app:layout_constraintTop_toBottomOf="@id/texto1"
        app:layout_constraintLeft_toLeftOf="@id/texto1"
        app:layout_constraintRight_toRightOf="@id/texto1"
        android:onClick="launchIntent"/>
{% endhighlight %}

En este caso lo que definimos en nuestro XML es un botón de tipo **Button** en donde tiene como atributos el ancho y alto definido por el contenido, este caso se refiere al texto que contenga, el identificador del botón, y el tipo de posición en relación a los otros elementos. Para este caso indicamos que se encuentra debajo del elemento **texto1** y a la misma alineación derecha/izquierda que posea el elemento **texto1**

Como último atributo y más importante definimos el **onClick** en donde establecemos a que método se llamara al momento de realizar la llamada del evento **onClick**. **(Este evento es el que realizara el usuario al interactuar con la aplicación)**, le indicamos que debe llamar al método ** launchIntent** y listo.

Solamente nos falta ejecutar nuestra aplicación para ver nuestra primera intención en funcionamiento.

Este ejemplo sirve para evidenciar el poder que nos ofrecen las intenciones enviando mensajes orientados tanto a servicios y actividades. Dicho ejemplo se usa del **intent** para llamar a otra aplicación. **En este caso nos lista las aplicaciones disponibles para abrir páginas webs**. Pero los **intent** pueden ser utilizadas en muchísimas cosas más. Muy pronto las pondremos a prueba.

##### Felicitaciones :-)