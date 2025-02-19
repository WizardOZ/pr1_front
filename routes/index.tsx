import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(false);
  return (
    <div style="background-color:#f7cdcd">
      {/* Cabecera Info personal */}
      <section class="px-20 py-10 mx-auto"> 
        <div>
          <h2 class="title">Pedro Zuñeda Diego</h2>
          <img
              src="/perfil.jpg"
              alt="Imagen profesional"
            />
        </div>
        <div>
          <p>
            Data Science con mas 10 años como profesional.<br></br> 
            Inventor de la Digital Wheel.
          </p>
        </div>
        <span>Madrid, Madrid, España</span>
        <footer>
          <a target="_blank" href={"mailto:pedro.zunedadiego@gmail.com"} title={"Mail"}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
          <a href={"tel:+34915934413"} title={"Telefono"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>          </a>
          <a target="_blank" href={"https://es.linkedin.com/in/pedrozunedadiego"} title={"Linkedin"}>
            <svg height="16" width="16" viewBox="0 0 24 24"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
          <a target="_blank" href={"https://github.com/pzunedad"} title={"GitHub"}>
            <svg width="16" height="16" viewBox="0 0 24 24"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          </a>
        </footer>
      </section>
      {/* Sobre mi */}
      <section class="px-20 py-10 mx-auto">
        <h1 class="title">Sobre mí</h1>
        <p>
        Soy Pedro Zuñeda Diego, un apasionado de la ciencia de datos con más de 10 años de experiencia en el sector. A lo largo de mi carrera, he desarrollado soluciones innovadoras que han impulsado la toma de decisiones estratégicas basadas en datos.<br></br>

        Como inventor de la Digital Wheel, me especializo en la aplicación de modelos analíticos avanzados y tecnologías emergentes para optimizar procesos y generar impacto real en las organizaciones.<br></br>

        Resido en Madrid, España, y sigo explorando nuevas fronteras en la inteligencia artificial, el machine learning y la analítica de datos para transformar el mundo digital.<br></br>


        </p>

      </section>
      {/* Experiencia Laboral */}
      <section class="px-20 py-10 mx-auto">
        <h1 class="title">Experiencia Laboral</h1>
        <ul>
          <li class="li_group">
            <header>
              <div>
                <h3>
                  Data Insights
                </h3>
              </div>
              <div>
                <h4>
                  Lead Data Scientist
                </h4>
                <p>
                  2019 - Actual
                </p>
              </div>
            </header>
            <footer>
              <p>
                Lideré el desarrollo de modelos de Machine Learning para optimizar estrategias de negocio, logrando reducir costos operativos en un 30%. Implementé pipelines de datos escalables en la nube, mejorando la eficiencia del procesamiento en un 50%. Fomenté buenas prácticas en ciencia de datos y colaboré con equipos interdisciplinarios para transformar problemas empresariales en soluciones basadas en datos.
              </p>
            </footer>
          </li>
          <li class="li_group">
            <header>
              <div>
                <h3>
                FinTech Analytics
                </h3>
              </div>
              <div>
                <h4>
                  Senior Data Scientist
                </h4>
                <p>
                  2015 - 2019
                </p>
              </div>
            </header>
            <footer>
              <p>
                Desarrollé modelos de predicción de riesgo crediticio, incrementando la precisión en un 20% y reduciendo pérdidas por impagos. Automatizamos el análisis de grandes volúmenes de datos en tiempo real con Apache Spark. Implementé dashboards en Power BI para mejorar la toma de decisiones ejecutivas.
              </p>
            </footer>
          </li>
          <li class="li_group">
            <header>
              <div>
                <h3>
                  Health Data Solutions
                </h3>
              </div>
              <div>
                <h4>
                  Junior Data Scientist
                </h4>
                <p>
                  2012 - 2015
                </p>
              </div>
            </header>
            <footer>
              <p>
                Analicé datos médicos para detectar patrones en enfermedades crónicas, optimizando modelos de predicción en un 15%. Desarrollé scripts de limpieza y transformación de datos que redujeron en un 40% el tiempo de procesamiento. Colaboré con médicos y analistas en la creación de herramientas basadas en IA para mejorar diagnósticos.
              </p>
            </footer>
          </li>
        </ul>
      </section>
      {/* Formación */}
      <section class="px-20 py-10 mx-auto">
        <div>
          <Counter count={count} />
        </div>
      </section>
    


    </div>
  );
}
