import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<boolean>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="counter-container">
      <div>
        <h1 class="title">Formación </h1>
        <button onClick={() => props.count.value = !props.count.value}>
          {props.count.value ? "Mostrar menos (-)" : "Mostrar más (+)"}
        </button>
      </div>
      {props.count.value && (
        <div class="counter">
          <h3>Máster en Ciencia de Datos y Machine Learning</h3>
          <h4>Universidad de Stanford | 2016 - 2018</h4>
          <p>Especialización en modelos predictivos, aprendizaje profundo y procesamiento de grandes volúmenes de datos. Proyecto final enfocado en la detección de fraudes financieros mediante redes neuronales.</p>
          <br></br>
          <h3>Grado en Matemáticas y Estadística</h3>
          <h4>Universidad de Barcelona | 2008 - 2012</h4>
          <p>Formación en estadística avanzada, optimización y modelado matemático aplicado a la ciencia de datos.</p>
          <br></br>
          <h3>Certificación en Big Data y Computación en la Nube</h3>
          <h4>Google Cloud & Coursera | 2019</h4>
          <p>Desarrollo y despliegue de modelos escalables en entornos cloud con TensorFlow y Google BigQuery.</p>
        </div>
      )}
    </div>
  );
}
