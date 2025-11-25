# 📦 Sistema de Izaje – Modelo Matemático y Experimental

Este proyecto permite **analizar, comparar y visualizar** el desempeño de un sistema de izaje mediante dos enfoques:

- **Modelo Teórico (Diseño Ideal)**
- **Modelo Experimental (Datos Reales)**

El software ofrece un menú principal desde el cual se accede a ambos modelos y a la comparación gráfica entre ellos.

## 📘 Contexto del Proyecto

El objetivo principal es **determinar y comparar la eficiencia** de un sistema de izaje (tipo torre grúa) bajo diferentes condiciones de carga.

Para esto se contrasta:

- Un **modelo matemático teórico**, basado en el diseño mecánico ideal.
- Un **modelo experimental**, construido a partir de mediciones reales tomadas bajo tres escenarios de carga.

### ⚙️ Descripción del Sistema Físico

La torre grúa emplea:

- Motorreductor N20
  - 300 rpm
  - Torque nominal: **1.5 kg·cm**

- Sistema de engranajes **72/16**
  - Relación total: **4.5 : 1**

- Tambor de izaje
  - Radio: **0,02 m**

- Alimentación: **Batería de 9 V**

El sistema eleva cargas de **100 g**, **200 g** y **300 g** a una altura constante de **0,4 m**.

## 🧮 Variables Calculadas

Para cada escenario experimental el programa determina:

1. **Fuerza requerida para el izaje**

$$
F = m \cdot g
$$

2. **Velocidad lineal de elevación**

$$
v = \frac{altura}{tiempo}
$$

3. **Potencia eléctrica de entrada**

$$
P_{in} = V \cdot I
$$

4. **Potencia mecánica de salida**

$$
P_{out} = \frac{m \cdot g \cdot altura}{tiempo}
$$


5. **Eficiencia real del sistema**

$$
\eta = (\frac{P_{out}}{P_{in}}) \cdot 100
$$

> **Nota:** _Los valores se redondean con 3 decimales._

## 🖥️ Funcionamiento del Programa

El programa presenta **tres formularios**, uno por cada escenario experimental.
Cada formulario solicita:

- Masa (kg)
- Tensión (V)
- Corriente (A)
- Tiempo (s)

Cada escenario incluye un botón **"Calcular"**, que ejecuta internamente las formulas planteadas anteriormente.

Los resultados se muestran inmediatamente debajo de cada formulario junto con un botón de información donde se puede visualizar la formula aplicada.

## 📊 Gráficas Generadas

El sistema genera dos tipos principales de gráficas (requiere al menos un escenario diligenciado):

1. **Eficiencia vs Carga**

    Compara:
    - **Modelo Teórico**
    - **Escenarios Experimentales**
    
    Permite visualizar la diferencia entre el comportamiento ideal y el real del sistema.

2. **Potencia de Entrada – Potencia de Salida vs Carga**

    Compara únicamente **los tres escenarios experimentales**.

    Permite evaluar el desempeño energético del sistema según la carga aplicada.

## 📂 Estructura del Proyecto

~~~
|-- app
    |-- diseno
        |-- page.tsx
    |-- fundamento
        |-- page.tsx
    |-- modelo
        |-- page.tsx
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
|-- components
    |-- modelo
        |-- Formula.tsx
        |-- TooltipFormula.tsx
    |-- Alerta.jsx
    |-- Header.tsx
    |-- Navbar.tsx
|-- public
    |-- capturas
        |-- diseno.png
        |-- eficiencia_carga.png
        |-- experimentos.png
        |-- fundamento.png
        |-- inicio.png
        |-- modelo_mat.png
        |-- modelo_mat_experimental.png
        |-- modelo_mat_teorico.png
        |-- pOut_pIn_carga.png
    |-- energia.jpg
    |-- logo-em.png
    |-- logo-uts.png
    |-- plano1.jpg
    |-- plano2.jpg
    |-- plano3.jpg
    |-- plano4.jpg
    |-- potencia.jpg
    |-- proyecto.png
    |-- teorico.jpg
    |-- trabajo.jpg
|-- .gitignore
|-- eslint.config.mjs
|-- next.config.ts
|-- next-env.d.ts
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- README.md
|-- tsconfig.json
~~~

## ▶️ Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**
    ```bash
    git clone https://github.com/ltortiz/torre_grua.git
    cd torre-grua
    ```

2. **Instalar dependencias**
    ```bash
    npm install
    ```

3. **Ejecutar en modo desarrollo**
    ```bash
    npm run dev
    ```

4. **Abrir en el navegador**
    
    [http://localhost:3000](http://localhost:3000)

## 🖼️ Capturas de Pantalla

![Inicio.](/public/capturas/inicio.png)
**Figura 1. Pantalla de inicio**

![Fundamento.](/public/capturas/fundamento.png)
**Figura 2. Pantalla de fundamento**

![Modelo Matemático.](/public/capturas/modelo_mat.png)
**Figura 3. Pantalla de modelo matemático**

![Modelo Matemático Teórico.](/public/capturas/modelo_mat_teorico.png)
**Figura 4. Pantalla de modelo matemático teórico**

![Modelo Matemático Experimental.](/public/capturas/modelo_mat_experimental.png)
**Figura 5. Pantalla de modelo matemático experimental**

![Diseño.](/public/capturas/diseno.png)
**Figura 6. Pantalla de diseño**

### 📌 Ejemplo:

**Formulario de Escenario Experimental**

![Modelo Matemático Experimental Real.](/public/capturas/experimentos.png)

**Gráfica de Eficiencia vs Carga**

![Eficiencia vs Carga.](/public/capturas/eficiencia_carga.png)

**Gráfica de Potencia Salida - Potencia Entrada vs Carga**

![Potencia Salida - Potencia Entrada vs Carga.](/public/capturas/pOut_pIn_carga.png)

## 📄 Licencia

Este proyecto es de código abierto y puede ser utilizado, copiado, modificado
y distribuido libremente con fines educativos, académicos o personales.

No se otorgan garantías de ningún tipo.  
El autor no se hace responsable por el uso o mal funcionamiento del software.

Si utiliza este proyecto, se agradece el reconocimiento al autor original.