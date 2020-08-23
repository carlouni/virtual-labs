# Virtual Labs WP Plugin
The plugin display a list of virtual labs available.

## How to run demo with docker
I have created a docker image **carlouni/wordpress** for demo and development environment.

See links below for more details:

> Docker Hub: https://hub.docker.com/r/carlouni/wordpress
> Github: https://github.com/carlouni/docker-wordpress 


### Run on Linux / Mac
```
git clone https://github.com/carlouni/virtual-labs.git
cd virtual-labs/
docker run --rm --name apnic-virtual-labs -p 8000:80 -v "$PWD":/var/www/html/wp-content/plugins/ carlouni/wordpress
```
Once the services are up, go to http://localhost:8000/

![Virtual Labs Screeshot](/images/virtual-labs.png "Virtual Labs Screeshot")
