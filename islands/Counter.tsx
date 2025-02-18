import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<boolean>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex flex-col gap-8 py-6">
      <Button onClick={() => props.count.value = !props.count.value}>mostrar mas</Button>
      {props.count.value &&  <p class="text-3xl tabular-nums ">Máster en Ciencia de Datos y Machine Learning <br></br> "Universidad de Stanford | 2016 - 2018<br></br>Especialización en modelos predictivos, aprendizaje profundo y procesamiento de grandes volúmenes de datos. Proyecto final enfocado en la detección de fraudes financieros mediante redes neuronales.<br></br><br></br>Grado en Matemáticas y Estadística<br></br>Universidad de Barcelona | 2008 - 2012<br></br>Formación en estadística avanzada, optimización y modelado matemático aplicado a la ciencia de datos.<br></br><br></br>Certificación en Big Data y Computación en la Nube<br></br>Google Cloud & Coursera | 2019<br></br>Desarrollo y despliegue de modelos escalables en entornos cloud con TensorFlow y Google BigQuery."</p>
    }
    </div>
  );
}
