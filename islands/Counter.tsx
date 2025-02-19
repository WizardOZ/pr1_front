import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<boolean>;
}

export default function Counter(props: CounterProps) {
  return (
    <div>
      <Button onClick={() => props.count.value = !props.count.value}>mostrar mas</Button>
      {props.count.value &&  (<div class = "counter"><p><h3>Máster en Ciencia de Datos y Machine Learning</h3> <h4>"Universidad de Stanford | 2016 - 2018</h4>Especialización en modelos predictivos, aprendizaje profundo y procesamiento de grandes volúmenes de datos. Proyecto final enfocado en la detección de fraudes financieros mediante redes neuronales.<br></br><br></br><h3>Grado en Matemáticas y Estadística</h3><h4>Universidad de Barcelona | 2008 - 2012</h4>Formación en estadística avanzada, optimización y modelado matemático aplicado a la ciencia de datos.<br></br><br></br><h3>Certificación en Big Data y Computación en la Nube</h3><h4>Google Cloud & Coursera | 2019</h4>Desarrollo y despliegue de modelos escalables en entornos cloud con TensorFlow y Google BigQuery."</p></div>)
    }
    </div>
  );
}
