---
layout: post
title: "Ciclo de vida de una actividad"
date: "2016-06-12 12:00:00"
categories: android
author: Uclides Gil
image: /img/category/android.png
page: "http://127.0.0.1:4000/android/activities"
lang: es
---

A continuación, veremos un resumen sobre el ciclo de vida de una actividad. En donde cada Actividad puede encontrarse en los siguientes estados:

* **Activa o en ejecución** es cuando ocupa el primer plano. La pantalla está visible y posee interacción del usuario.

* **Pausada** es cuando ha perdido el foco pero todavía es parcialmente visible. Típicamente ocurre cuando se abre un diálogo encima de la pantalla.

* **Detenida* es cuando la actividad no es visible para el usuario.

Ahora bien, es sistema tiene la capacidad de poder terminar una Actividad en cualquier momento, él puede invocar a su método **finish()** o matando su proceso. Pero cuando escaseen los recursos es necesario finalizar algunas aplicaciones para continuar su funcionamiento. Para ello finalizará con aquellas que están paradas, luego con las pausadas y, ya en una situación crítica, con aquellas activas.

En cada caso cuando una Actividad termina debe guardar su estado para que cuando sea lanzada pueda ser recuperado. Cuando se realizan cambios de estado la plataforma invoca determinados métodos de la actividad para que esta pueda realizar las operaciones oportunas.

Los métodos disponibles para tales acciones son:

{% highlight java %}
  @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // The activity is being created.
    }
    @Override
    protected void onStart() {
        super.onStart();
        // The activity is about to become visible.
    }
    @Override
    protected void onResume() {
        super.onResume();
        // The activity has become visible (it is now "resumed").
    }
    @Override
    protected void onPause() {
        super.onPause();
        // Another activity is taking focus (this activity is about to be "paused").
    }
    @Override
    protected void onStop() {
        super.onStop();
        // The activity is no longer visible (it is now "stopped")
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        // The activity is about to be destroyed.
    }
{% endhighlight %}

Podemos realizar un seguimiento del ciclo de vida de una actividad. Por ejemplo:

* El ciclo completo de vida de la actividad desde la llamada a **onCreate()** hasta el final a través de la llamada al método **onDestroy()**.

* El ciclo durante el que la actividad es visible, aunque sea parcialmente, desde **onStart()** hasta **onStop()**.

* El ciclo durante el que la actividad está en primer plano y tiene el foco de atención, desde **onResume()** hasta **onPause()**.

Finalmente les dejo una imagen como referencia a dicho ciclo de vida. Donde ustedes podran conocer de manera grafica los diversos estados de un Actividad. 

![minipic](https://2.bp.blogspot.com/-r47WtxEaNHA/TWassofX3II/AAAAAAAABEw/p_i25PEi4pQ/s1600/activity_lifecycle.png)