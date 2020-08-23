# Virtual Labs WP Plugin
The plugin display a list of virtual labs available.

## How to run demo with docker
I have created a docker image **carlouni/wordpress** for demo and development environment.

See links below for more details:

> Docker Hub: https://hub.docker.com/r/carlouni/wordpress
> Github: https://github.com/carlouni/docker-wordpress 


### Run demo on Linux / Mac
```
$ git clone https://github.com/carlouni/virtual-labs.git
$ cd virtual-labs/
$ docker run --rm --name apnic-virtual-labs -p 8000:80 -v "$PWD":/var/www/html/wp-content/plugins/ carlouni/wordpress
```
Once the services are up, go to http://localhost:8000/

![Virtual Labs Screeshot](/images/virtual-labs.png "Virtual Labs Screeshot")

### Development environment
See below list of main folders

```
src/ # Reac App source code
virtual-labs/ # WP plugin
```

#### Start development environment
It's similar to running the demo. However, you need to install the dependencies of the React App.
1. Pull React App dependencies
```
$ npm install
```
2. Start docker server if you haven't started it before.
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
1. Copy the folder **virtual-labs** into your WP plugin folder and activate the plugin. Alternativelly, create a zip version of the folder **virtual-labs.zip** and upload it from admin panel.
2. Create a new WP page and in the plain text content editor include the **[virtual-labs]** shortcode and save.
3. You might need to add some styling or include **Bootstrap 4 styles** to your site.