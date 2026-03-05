# Trabajo Práctico 3 - Módulo 3

## 📋 Descripción General

Este proyecto contiene 3 actividades prácticas relacionadas con:
- Desarrollo de servidores con **Express.js**
- Manejo de parámetros de rutas y consultas
- Lectura y escritura de archivos de texto con **Node.js**

---

## 🚀 Actividades

### Actividad 1: Manejo de Parámetros de Ruta

Demuestra el uso de **parámetros de ruta dinámicas** en Express.

**Ruta disponible:**
- `GET /user/:id` - Retorna el perfil de un usuario según su ID

**Ejemplo de uso:**

### Solicitud
http://localhost:3000/user/123

### Respuesta
Perfil del usuario con ID: 123

El servidor estará disponible en `http://localhost:3000`

---

### Actividad 2: Manejo de Parámetros de Consulta

**Ubicación:** 

Demuestra el uso de **parámetros de consulta** (query parameters) en Express.

**Ruta disponible:**
- `GET /profile?edad=<valor>` - Retorna el perfil con la edad especificada

**Ejemplo de uso:**

### Solicitud
http://localhost:3000/profile?edad=42

### Respuesta
Edad del perfil: 42

El servidor estará disponible en `http://localhost:3000`

---

### Ejemplo: Gestión de Superhéroes

**Ubicación:** `superheroes/`

Un ejemplo que demuestra:
- **Lectura y escritura de archivos** usando el módulo `fs`
- **Definición de clases** en JavaScript
- **Uso de módulos personalizados**
- **Ordenamiento y manipulación** de datos

---

## 📦 Dependencias

Todas las actividades y ejemplos usan las siguientes dependencias:

- **Express.js** - Framework web para Node.js
- **Node.js File System (fs)** - Módulo nativo para manejo de archivos