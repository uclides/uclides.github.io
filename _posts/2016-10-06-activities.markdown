---
layout: post
title: "Activities"
date: "2016-06-10 12:00:00"
categories: android
author: Uclides Gil
image: /img/category/android.png
page: "http://127.0.0.1:4000/android/activities"
lang: en
---

Our learning process will take place through practices. I believe that the best way to learn is by doing and practicing. This first issue might contain much information, but you will see that will be very useful. Android Studio already installed our first thing that we will do is to create our first project. We begin our IDE and select the appropriate option

Then proceed to place the name of the application, in this case we omit the domain company because in the first instance
we will conduct tests; in post following these issues will be explained. Then indicates the location of the project in our teams:

![minipic](http://i.imgur.com/Io7Ylwu.png)

Then we need to establish the compatibility of our new application, related compatibility with different versions of OS phones and tablets. As well as the minimum version that will support the application. We leave the default selection and continue

![directory](http://i.imgur.com/uMdFYaG.png)

Now we have to select the type of design of the main activity. By default selected an **empty Activity**

![directory](http://i.imgur.com/OYQ0aXQ.png)

Finally, we must define the name for our core business, both class and the layout. At times we leave the defaults. Then select the end for our IDE proceed to generate the necessary files for our new application.

![directory](http://i.imgur.com/hnN1dUC.png)

And created the application we will learn all the basics of it; starting to explain each of the elements that compose it. It is paramount to know what the basic structure of files from it.

![minipic](http://i.imgur.com/fIowg2l.png)


* **manifests:** AndroidManifest in this folder the file where all the settings and permissions for our application are set defined.

* **java:** defines packages that structure our application, they contain classes created by us.

* **res:** folder containing all the resources to be used widely. In turn that folder contains:

    * **drawable:** in it we have the graphics resources for our application

    * **layout:** It contains all the views of the graphical interface that will be displayed to the user.

    * **mipmap:** folder contains all the icons that will be used.

    * **values:** in it the values are arranged as the colors of the application **colors.xml**, the dimensions set for compatibility across devices **dimens.xml** and text to show in views **string.xml**. resources such as language settings and others may exist. Soon we will use them.

##### Activities

We begin with **actividad**, I can define it as an application component, which provides a screen that allows the user to interact in order to do something. As dial the phone, take a picture, send an email, among others. Each activity consists of a window where the user interface is presented. The window typically fills the screen, but can be smaller than the screen and float on top of other windows.

The first thing to know is that an activity is declared through XML. Which it is basically to be a markup language used to store data in readable form. If you do not know, please I invite you to read a little more about the [**here**](https://es.wikipedia.org/wiki/Extensible_Markup_Language).

Now, we have a little clearer the basics of an Android application. It is true that the above definitions are expressed simply and without delving much. If you want to investigate more about the basic structure of an application I invite you to do so; because while we get more information, our bases will be more solid.

And then comes the most interesting part of all, **el código**. Android Studio positions us in our class called default **MainActivity**. The content thereof is this:

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

Where the first line indicates the default package our application.
{% highlight java %}
package com.example.usuario.myapplication;
{% endhighlight %}

The next two lines refer to the imported classes to use for this class **"MainActivity"** 
{% highlight java %}
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
{% endhighlight %}

After the body of the class that extends defined **AppCompactActivity**
{% highlight java %}
public class MainActivity extends AppCompatActivity
{% endhighlight %}

Then the first method called onCreate which is invoked when starting the activity is presented. handing
as an argument an object of the Bundle class, which obtains the prior activity if previously been suspended. That is, if you start for the first time our object Bundle will not have anything we can use. But if for some reason we change application and return to ours if you should have valid information that we can use.

Then it calls super which belongs to the parent class for the execution of the application and then we pass through **setContentView** the file that has the view related to the activity.

{% highlight java %}
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
{% endhighlight %}

We know that an activity is usually linked to a view, in this case a **layout**. They are defined through XML as we mentioned above; They are in the folder **res >layout** of our project. If you kept the defaults when creating your application file is called **activity_main.xml**. We open the file and we can see the following:

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

For IDE version I own now **2.2 preview 3** it has been implemented **android.support.constraint.ConstraintLayout** which it is to be the manager of our design **layout**. Now, how we see our XML code there are different labels including **TextView** and the aforementioned **android.support.constraint.ConstraintLayout** within each tag attributes exist where the characteristics of each element in the view, defined in this case we will give importance to these:

{% highlight shell %}
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
{% endhighlight %}

The first defines the unique identifier, followed by the width and height to further our layout. The height and width are defined by ** match_parent** which refers to having the same size as his father **(clase ViewGroup.LayoutParams)**

It is important to mention that **‘@’** It indicates a reference to a resource. Overall this format: **@[package:]type/name**, where the package is optional and only displayed when not in our application, the type corresponds to one of those defined in the res folder, and the name indicates the resource identifier.

We are sticking with the **TextView** which has as attributes the width and height as **wrap_content** que its text is adapted according to the content that has, through **text** and the different types of position relative to some element in this case applies: down, left, right and up; respectively.

{% highlight shell %}
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello World!"
    app:layout_constraintBottom_toBottomOf="@+id/activity_main"
    app:layout_constraintLeft_toLeftOf="@+id/activity_main"
    app:layout_constraintRight_toRightOf="@+id/activity_main"
    app:layout_constraintTop_toTopOf="@+id/activity_main
{% endhighlight %}

We know how the basic activity and layout work. However, there a file where the basic and main features of our application are defined, is the AndroidManifest.xml ** ** and is located at the root of our project. Its configuration can be done through a graphical interface, but the syntax is recommended because it will often be easier and faster than from the XML itself

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

Our file contains default data necessary to carry out the construction of our application. For example, we attribute icon ** ** where we set our application icon to be displayed on the main menu of our launcher, as well as the application itself; we also have the name of the application by **label**. The type of theme to use with **theme**.

It is very important to note that in this file is where we establish the activities that will own our application, in our case we created a nothing. But we can create all necessary that requires our development. For this case we have:

{% highlight java %}
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
{% endhighlight %}

As we can see in the above code, we first define the class **.MainActivity** It refers to our activity. Then we define what kind of intent is related this activity, ie it allows us to specify the scope in which to run. In addition it is defined that will be our main activity and appear in the menu of operating system applications.

Now we can run our first application, for that we can be done in two ways. Through a mobile device with android operating system or the ADV tool that provides us this IDE. For the first option all you must have is a USB cable to connect your phone or tablet, have enabled debug options on the phone and allow installation of third-party application. They can verify the steps in the following [post]()

Now, if you do not have an Android phone must perform the following steps: 

In the top section of our IDE we position the icon **ADV manager**

![minipic](http://i.imgur.com/COpkS4j.png)

A new window where we must access the button where it says will be charged **create virtual device**. another window where we different default device configurations appear opens. In my case select **Nexus 5** but you can select any other. They can also create your device as you prefer in **new profile**. You must click Next to continue. 

![directory](http://i.imgur.com/9JepFGm.png)

Again another window where we select the version of the operating system that will have our virtual device is shown. Select one to continue.

![directory](http://i.imgur.com/cnatwN3.png)

As a last step we request the name you wish to place our device. It also allows us to configure the previously selected device type, OS version, type of horientación to start **(landscape/portrait)** and the type of graphics resources that we wish emulator. To create our device must click on finish.

![directory](http://i.imgur.com/cKvcYRE.png)

And our android virtual device created, proceed to start the application by pressing the button with the play symbol **(green color)** which is very close to the above to our virtual device.

When starting asked us where we want to test the application. We can select any option that we have set. Either the virtual or physical device; in my case I will select by my personal phone. Then we visualize our application running. 

![minipic](http://i.imgur.com/s9M1krK.png)

###### **Congratulations, you have your first application running.**

Thanks for getting this far, maybe I've been very extensive in this post, but it was necessary. I invite you to continue with the next post where each issue gets more interesting. :-)