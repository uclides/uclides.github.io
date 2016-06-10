---
layout: post
title:  "Prepare your computer"	
date:   2016-06-01 12:00:00
categories: android
author: Uclides Gil
image: /img/android-studio.png
page: "http://127.0.0.1:4000/android/configure-your-computer"
lang: en
---

We begin by setting everything you need to start developing our apps on android. For it
need a computer that meets the following minimum requirements:

##### Windows
* Microsoft® Windows® 7/8/10 (32- ó 64-bit)
* 2 GB RAM minimum
* 2 GB available in HDD
* minimum resolution 1280 x 800 
* Java Development Kit (JDK) 8

##### Mac
* Mac® OS X® 10.8.5 or higher
* 2 GB RAM minimum
* 2 GB available in HDD
* minimum resolution 1280 x 800
* Java Development Kit (JDK) 6

##### Linux
* GNOME or KDE
* 2 GB RAM minimum
* library GNU C (glibc) 2.11
* 2 GB RAM minimum
* 2 GB available in HDD 
* minimum resolution 1280 x 800 
* Java Development Kit (JDK) 8


#### Download necesary elements

In first instance we have download the JDK java library (Java Development Kit) necesary to execute the Android Studio. You can download the version compatible with your operative system [**here**](https://www.oracle.com/technetwork/es/java/javase/downloads/index.html){:target="_blank"}. 

The version currently available is **Java SE 8u91 / 8u92**, we entered the JDK link as shown in the picture:

![minipic](http://i.imgur.com/5OnfUPQ.png)

Before downloading you must accept the terms of license Oracle and then if you select the appropriate file to your operating system. Reference image:

![minipic](http://i.imgur.com/SmFdcLa.png)

There is only downloading Android Studio through its official website [**here**](https://developer.android.com/studio/index.html){:target="_blank"},

#### Windows Installation and Configuration

To set up our first environment you must install the JDK for it initiated the previously downloaded file. 

![minipic](http://i.imgur.com/qSqd8BK.png)

We follow the steps that indicates the installer. We welcome and selected next, then tells us what are the packages that proceed to install. We press next and continue

![minipic](http://i.imgur.com/ymXW2hS.png)

The next screen indicates the path where it will proceed to install. **We must remember this route and then add it to environment variables**.

![minipic](http://i.imgur.com/YgOlgxP.png)

Finally we received the message that has been successfully installed our Java Development Kit.

![minipic](http://i.imgur.com/38QRPkP.png)

##### Set environment variable

This requires knowing the path where the JDK was installed can access the directory such as in my case **C:\Program Files (x86)\Java\jdk1.8.0_91\bin** 

![directory](http://i.imgur.com/aeDWhi0.png)

Already known the path where our binaries we must turn to advanced system settings> environment variables. For this there are various ways may change depending on the version of Windows you have. For this example I use Windows 7 and I performed as follows:

right click on **My Computer > Properties > Advanced System Settings > environment variables**. In the images are seen steps:

![minipic](http://i.imgur.com/xlw6AYr.png)

![minipic](http://i.imgur.com/9tArBye.png)

![minipic](http://i.imgur.com/fXz5fGm.png)

Then select the variable **Path** and access it. At the end of the line we create a new value. We must put a semicolon **";"** to add a new route, in this case of our current installation path of the JDK. in my case **"C:\Program Files (x86)\Java\jdk1.7.0_71\bin"**. We accept and apply. 

![minipic](http://i.imgur.com/k6KEgGS.png)

After that we can open a **Windows Command Processor** (cmd) and verify that already have java in our team; We wrote the following in our console **"java -version"** and it will print a message like the following:

![minipic](https://i.imgur.com/WhaG3Gf.png)

¡Ready! already have java installed and configured on our team. Now we continue with the next step.

##### Install Android Studio

The installation of our Android IDE is very simple, we go to the folder where you have previously downloaded and proceed to start the process. In this process we just follow the steps default indicates the interface; it may take some time while charging all supplements. 

When starting for the first time Android Studio will ask to download the packages essential for its operation, let the place without any problems. It may take some time depending on the internet connection you have. Now, I recommend you get all available packages related to the different versions that Android has for the development of applications and have our entire environment and a day to topics that will be very soon. To do this we must take the following steps: 

When creating a new project we turn to the section Settings> SDK Manager and access it

![minipic](https://i.imgur.com/4lowGVK.png)

another window where we have to enter opens to **Launch Standalone SDK Manager**

![minipic](https://i.imgur.com/3US3126.png)

Select all packages and then accept the packages to install. 

![minipic](https://i.imgur.com/O8GYmv6.png)

We hope that everyone will have to download and completely updated our IDE. :-)

#### Linux installation and configuration

To configure Linux I have done the test on my computer. I personally use Ubuntu to facilitate things a bit
and not greatly complicate the installation process, **you can use any other Linux distribution**, which more
they like or are more familiar. Now the steps may change depending on which distro to use. as possess
**Ubuntu 14.04** at this time these are the steps that indicate. 



In the first instance we will install the latest version of Java JDK available for the platform, in the case of Ubuntu we will make the following:

Add the repository to have Java
{% highlight shell %}
sudo add-apt-repository ppa:webupd8team/java
{% endhighlight %}

We update our system
{% highlight shell %}
sudo apt-get update
{% endhighlight %}

For version 8:
{% highlight shell %}
sudo apt-get install oracle-java8-installer
{% endhighlight %}

For version 7:
{% highlight shell %}
sudo apt-get install oracle-java7-installer
{% endhighlight %}

Finally we verify that the installation was successful with
{% highlight shell %}
java -version
{% endhighlight %}


##### Install Android Studio (Ubuntu)

Ubuntu allows us to use a tool that facilitates this process, is called ubuntu make. First install this
package and then proceed to download Android Studio from there. For Ubuntu Make need the following:

Add the repository for Ubuntu Make
{% highlight shell %}
sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
{% endhighlight %}


We update our system
{% highlight shell %}
sudo apt-get update
{% endhighlight %}


Install Make
{% highlight shell %}
sudo apt-get install Ubuntu-make
{% endhighlight %}


Already installed, we proceed to install Android Studio as follows:
{% highlight shell %}
umake android-studio
{% endhighlight %}


If you need permissions you can use:
{% highlight shell %}
sudo umake android-studio
{% endhighlight %}


Accept all the conditions that prompted the console, and ready. You have fully installed the IDE. To update your IDE on Windows section I explain how; They are the same steps to perform.

**We are ready to start with our learning.**






