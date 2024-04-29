# Image-to-Video Converter Server

Bienvenido al repositorio del servidor Image-to-Video Converter. Este servidor utiliza Node.js y FFmpeg para convertir una secuencia de imágenes PNG en un archivo de video WebM.

## Descripción

Este servidor está diseñado para facilitar la conversión de imágenes en secuencia en un video reproducible. Es ideal para aplicaciones que necesitan mostrar secuencias de imágenes como videos sin la necesidad de generar y almacenar previamente estos videos.

## Características

- **Conversión Automática**: Convierte secuencias de imágenes almacenadas en un directorio específico en un video WebM.
- **Entrega de Video**: Una vez procesado el video, se ofrece automáticamente para descarga a través de la ruta `/process-video`.
- **Simple y Eficaz**: Utiliza una interfaz simple basada en Express para manejar las solicitudes.

## Tecnologías Utilizadas

- **Node.js**: Como entorno de ejecución del servidor.
- **Express**: Framework web para manejar las solicitudes HTTP.
- **FFmpeg con Fluent-FFmpeg**: Para el procesamiento y conversión de imágenes a video. Esta herramienta maneja la secuencia de imágenes y la codificación de video.

## Instalación

Para ejecutar este servidor en tu propio entorno, sigue estos pasos:

1. Clona el repositorio:
   ```bash
    git clone https://github.com/SrWilly19/ServerMoneda.git

2. Navega al directorio del proyecto:
   ```bash
   cd image-to-video-server

3. Instala las dependencias necesarias:
   ```bash
   npm install

4. Asegúrate de que FFmpeg esté instalado en tu sistema. Si no es así, puedes instalarlo siguiendo las instrucciones específicas de tu sistema operativo.

5. Inicia el servidor:
   ```bash
   npm start

## Uso

- **Para iniciar la conversión de imágenes a video**: Accede a la URL `http://localhost:3000/process-video` desde tu navegador o cliente HTTP. Esto iniciará el proceso de conversión y, una vez finalizado, el video se descargará automáticamente.

## Contribuir

Si deseas contribuir a este proyecto, por favor considera enviar pull requests o abrir issues para discutir los cambios que propones.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

## Contacto

Si tienes preguntas o comentarios, no dudes en contactarme en [wahcoral.dev@gmail.com](mailto:wahcoral.dev@gmail.com).

---

¡Esperamos que este servidor te ayude a convertir imágenes en videos de manera eficiente y efectiva!



