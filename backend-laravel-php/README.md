# Backend Laravel

Aplicacion de sedes hecha en Laravel 10


## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Composer](https://getcomposer.org)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local (ignora si ya lo hiciste):

```bash
git clone https://github.com/kmilo1717/LocationsApp.git
```

### 2. Acceder el repositorio


Segundo, debes ingresar a la carpeta

```bash
cd LocationsApp/backend-laravel-php
```
### 3. Instalar dependencias

Tercero, instalar dependencias

```bash
composer install
```

## Lanzamiento

### 3. Despliega la app

Por ultimo, depliega la app con el siguiente comando

```bash
php artisan serve
```

Para ver tu proyecto en el navegador, por defecto se va a desplegar en: [localhost:8000/api/](http://localhost:3000/)

## Rutas

**GET /locations** Header: x-api-key=<api_key> will return { code: number, name: string, image: string, creeationDate: string }

