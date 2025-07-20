# Implementación en SnapClose

Lo que ha pasado es que me he levantado, he desayunado y ahora me siento mejor. También me tomé 400 mg de ibuprofeno; el dolor de cabeza se me ha ido por completo. Lo malo es que tengo un sueño del copón, son las 11:50 h y aún no he empezado a trabajar.

## Notas generales

Siempre se nos queda un rato ahí muerto antes de la cena. Quizá merece la pena que me haga un buen segundo café y me prepare para hacer dos horas seguidas después. Yo creo que, si estoy de 3 a 5 de la tarde, le pego un arreón bueno a la página que tengo que hacer. Lo que sí haré es echarle un ojo ahora mismo; quizá me surge alguna idea sobre cómo abordar el diseño.

![[../Media &Co. (.old)/tab-double.png]]

Es un doble _tab_. El primero debería ser sencillo, pero estoy pensando que voy a necesitar ACF si no quiero liar un follón de secciones. El problema viene cuando cada sección es diferente. Algo a comunicar a diseño debe ser que de ahora en adelante prestemos un poco más de atención a la consistencia, de forma que sea más sencillo implementar sin necesidad de utilizar condicionales.

![[../Media &Co. (.old)/tab-double-text.png]]

En ocasiones, la columna que contiene el vídeo presenta un bloque de texto sobre éste. La única manera de dar cabida a ambas situaciones —con y sin bloque de texto— es mediante un condicional.

## Ideas y requisitos técnicos

Quizá es un buen momento para probar [Pods](https://wordpress.org/plugins/pods/), una alternativa a ACF Pro. Aún así, de todos modos, tengo que implementar el diseño. En caso de que Pods sea suficiente, los pasos serían:

1. Implementar un diseño estático.
2. Instalar Pods y probarlo. Mirar si tiene opción para _repeater field_, parece que hay algo de documentación [aquí](https://docs.pods.io/fields/simple-repeatable-fields/).
3. Generar los _fields_ necesarios en Pods.
4. Incrustar la configuración en el diseño estático.
5. Generar una lógica con JavaScript para hacer que los _tabs_ funcionen.

En caso de no usar Pods:

1. Implementar un diseño estático. Nombrar secciones de forma que se puedan localizar.
2. Duplicar la implementación tantas veces como sea necesario.
3. Generar una lógica con JavaScript.

En definitiva, hay dos vías de implementación: la que prioriza escalabilidad y la que prioriza tiempo. Implementar un diseño estático es un paso común a ambas, así que por ahí puedo empezar.

En Avada no voy a poder implementar bien un _repeater field_. Lo que sí podría hacer es mostrar elementos mediante un _shortcode_ generado en PHP que se encargue de gestionar la lógica. De irme por esta vía de implementación, lo correcto sería:

- Utilizar _postcards_, de forma que pueda llamar al CPT '_tutorial'_ e idealmente aplicar una animación de entrada a la columna.
- Completar cada _postcard_ con una estructura en PHP que permita llamar a cada vídeo.

### Poniendo la instalación a mi gusto

Alguien habilitó en Avada el carácter _responsive_ de la tipografía. Me gustaría deshabilitarlo para poner establecer mis propias reglas de tamaño tipográfico.

Hay una forma de resolver esto en Avada, y es forzando lo siguiente: ```--typography_sensitivity: 0;```.

Esto hace que la definición del tamaño de tipografía no se vea afectado por el factor de escalado que incorpora Avada.

Una forma de aplicarlo por página, de forma que sobreescriba los valores por defecto es la siguiente:

```css
:root {
  --typography_sensitivity: 0 !important;
}
```

Eso, aplicado como inline dentro de un _tag_ de ``style`` lo resolvería, pero si queremos aplicarlo desde una hoja de estilos, de forma más apropiada, se vería así:

```css
/* siendo n el id de la página */
.page-id-n * {
  --typography_sensitivity: 0 !important;
} 
```