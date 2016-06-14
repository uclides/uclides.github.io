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