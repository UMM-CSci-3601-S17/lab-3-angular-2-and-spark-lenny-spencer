#Answers to Questions  
##Exploring the project  
###Notice anything new in our `.gitignore?` There are actually multiple `.gitignore` files in this project, can you find them all?  

We found three `.gitignore` files. We ultimatley used `find` in bash the find them.
There is one `.gitignore` file in the main folder, one in the client and one in the server folders. 

The main `.gitignore` file does not contain gitignores for: `build/`, `!gradle-wrapper.jar`, and `node_modules/`. 
But, it does contain `nohup.out`, `yarn.error.log` and `yarn.stdout.log`.  

The server `.gitignore` only contatins `build/`.
The client `.gitignore` contains `node_modules`, `node`, `yarn`, and `yarn-server-pid.lock`.   

###Note also that there are now multiple `build.gradle` files as well! Why is this?  
There are three `build.gradle` files: one in client, one in server, and one high level file.
The server `build.gradle` builds the server, it can be either run with or without tests. 
The client `build.gradle` builds the client, it can be either run with or without tests.
Finally, the high level `build.gradle` allows for building and running of both the client and server   

##Exploring the client  
###What are a couple of these new tools? What do you think they do?  
There are now typescript files, along with some bash files to run and stop the client.
There are yarn file to manage dependencies. There is karma to do testing.   
###How does the navbar work in this project? Is our SparkJava server the only thing doing routing?  
No, angular also does *"routing"*.
Even though it is all the same webpage, Angular makes what appears like multiple webpages,
it creates links, and even generates distinct URLs.  


