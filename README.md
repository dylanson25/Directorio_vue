# CRUD Directorio contenerizado con docker

## Descripción

En esta rama se encuentran los archivos de configuración para contenizar la aplicación en Dockerfile

## Herramientas utilizadas
- [Docker](https://www.docker.com)

## Imagenes de Docker utilizadas
- [NGINX](https://hub.docker.com/_/nginx)
- [NODE](https://hub.docker.com/_/node)

## Correr el proyecto

1. Entrar en el directorio del [Directorio_Client](https://github.com/dylanson25/Directorio_vue/tree/directorio_with_WS_Docker/Directorio_Client)
- Ejecutar el siguiente comando en la terminal para hacer la contruccion del archivo Dockerfile del directorio actual
```
docker build -t directorio-client .
```
- Ejecutar el siguiente comando para levantar el docker
```
docker run --name directorio-server -d -p 8080:80 directorio-client
```

2. Entrar en el directorio del [Directorio_Server](https://github.com/dylanson25/Directorio_vue/tree/directorio_with_WS_Docker/Directorio_server)
- Ejecutar el siguiente comando en la terminal para hacer la contruccion del archivo Dockerfile del directorio actual
```
docker build  -t ws-directorio .
```
- Ejecutar el siguiente comando para levantar el docker
```
winpty docker run --name ws-directorio-server  -it -p 8081:8081 ws-directorio
```

