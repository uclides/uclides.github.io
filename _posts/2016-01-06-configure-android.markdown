---
layout: post
title:  "Prepara tu equipo"	
date:   2016-06-01 12:00:00
categories: android
author: Uclides Gil
image: /img/android-studio.png
---


{% highlight java %}
import java.util.*;
 
class Palindrome
{
   public static void main(String args[])
   {
      String original, reverse = "";
      Scanner in = new Scanner(System.in);
 
      System.out.println("Enter a string to check if it is a palindrome");
      original = in.nextLine();
 
      int length = original.length();
 
      for ( int i = length - 1; i >= 0; i-- )
         reverse = reverse + original.charAt(i);
 
      if (original.equals(reverse))
         System.out.println("Entered string is a palindrome.");
      else
         System.out.println("Entered string is not a palindrome.");
 
   }
}
{% endhighlight %}

Iniciaremos configurando todo lo necesario para empezar a desarrollar nuestras aplicaciones en android. Para ello
necesitaremos un equipo que cumpla con los siguientes requisitos:

|                  Windows                  	| Mac                             	| Linux                           |	|																													  |
|:-----------------------------------------:	|---------------------------------	|---------------------------------|	|																													  |
| Microsoft® Windows® 7/8/10 (32- ó 64-bit) 	| - Mac® OS X® 10.8.5 ó mayor     	| - GNOME or KDE                  |	|																													  |
| - 2 GB RAM minimo                         	| - 2 GB RAM minimo               	| - 2 GB RAM minimo               |	|																													  |
| - 2 GB disponible en Disco Duro           	| - 2 GB disponible en Disco Duro 	| - libreria GNU C (glibc) 2.11   |	|																													  |
| - resolución minima 1280 x 800            	| - resolución minima 1280 x 800  	| - 2 GB RAM minimo               |	|																													  |
| - Java Development Kit (JDK) 8            	| - Java Development Kit (JDK) 6  	| - 2 GB disponible en Disco Duro |	|																													  |	
|                                           	|                                 	| - resolución minima 1280 x 800  |	| 																													  |
|                                           	|                                 	| - Java Development Kit (JDK) 8  |																																																	




Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
