# Virtual Labs WP Plugin
The plugin display a list of virtual labs available.

## How to run demo with docker
I have created a docker image **carlouni/wordpress** for demo and development environment.

See links below for more details:

> Docker Hub: https://hub.docker.com/r/carlouni/wordpress
> 
> Github: https://github.com/carlouni/docker-wordpress 


### On Linux and Mac
```
$ git clone https://github.com/carlouni/virtual-labs.git
$ cd virtual-labs/
$ docker run --rm --name apnic-virtual-labs -p 8000:80 -v "$PWD":/var/www/html/wp-content/plugins/ carlouni/wordpress
```
Once services are up, go to http://localhost:8000/

![Virtual Labs Screenshot](/images/virtual-labs.png "Virtual Labs Screenshot")

### On Windows Powershell
Steps are similar to that of Linux and Mac. Though, you need to use **${PWD}** to refer to your current directory.
```
> git clone https://github.com/carlouni/virtual-labs.git
> cd virtual-labs/
> docker run --rm --name apnic-virtual-labs -p 8000:80 -v ${PWD}:/var/www/html/wp-content/plugins/ carlouni/wordpress
```
Once services are up, go to http://localhost:8000/

### Development environment
See below the project's folder structure

![Folder Structure](/images/folders.png "Folder Structure")

#### Start development environment
It's similar to running the demo. However, you need to install the dependencies of the React App.
1. Pull React App dependencies
```
$ npm install
```
2. Start docker container if you haven't started it before.
```
$ docker run --rm --name apnic-virtual-labs -p 8000:80 -v "$PWD":/var/www/html/wp-content/plugins/ carlouni/wordpress
```
3. Start watcher so it builds automatically when making changes to React App
```
$ npm run watch
```
4. After you are done with your changes, run a production build.
```
$ npm run build
```

### Deployment
1. Copy the folder **virtual-labs** into your WP plugin folder and activate the plugin. Alternatively, create a zip version of the folder **virtual-labs.zip** and upload it from admin panel.
![Plugin Folder](/images/plugin.png "Plugin Folder")
2. Create a new WP page and in the plain text content editor include the **[virtual_labs]** shortcode and save.
![WP Shortcode](/images/shortcode.png "WP Shortcode")
3. You might need to add some styling or include **Bootstrap 4 styles** to your site.