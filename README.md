# APP Sedes

Aplicacion de sedes hecha en Laravel 10 y Next 15


## Contenido

- **frontend-next-react** -> Aplicacion frontend
- **backend-laravel-php** -> Aplicacion backend

Cada carpeta contiene su readme del paso a paso de como instalar y ejecutar el proyecto. Recomendable empezar por el back para luego ser consumido por el front.

El proyecto tambien soporta Docker, si deseas instalarla por medio de docker. Sigue los siguientes pasos (de lo contrario, dentro de cada proyecto esta la doc de como instalar el front y el back:

## Instalación

Sigue estos pasos para instalar por medio de docker el proyecto:

### 1. Instala docker

Aqui se encuentra el recurso para instalar docker en tu maquina: https://docs.docker.com/desktop/setup/install/windows-install/


### 2. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/kmilo1717/LocationsApp.git
```

```bash
cd LocationsApp
```

### 3. Construye los dockers

Debes construir docker por docker, siendo db->backend->frontend

```bash
docker-compose up --build
```


Para ver tu proyecto en el navegador, por defecto se va a desplegar en: [localhost:3000/](http://localhost:3000)
