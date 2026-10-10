import { useState } from 'react'
import './App.css'

function App() {
  // Reemplazá esta ruta por tu imagen dentro de public/.
  const profileImage = './public/IMG_20250430_155138.jpg'

  // Actualizá este enlace con tu número de WhatsApp.
  const whatsapp = 'https://wa.me/59892783602'
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center justify-between py-4">
            <a href="#inicio" onClick={closeMenu} className="text-2xl font-extrabold tracking-tight text-white">
              <span className="text-cyan-400">FB</span><span className="ml-2">Web Studio</span>
            </a>

            <div className="hidden items-center gap-1 text-sm lg:flex">
              <NavLink href="#servicio">Servicios</NavLink>
              <NavLink href="#soluciones">Soluciones</NavLink>
              <NavLink href="#proceso">Proceso</NavLink>
              <NavLink href="#publico">¿Para quiénes?</NavLink>
              <NavLink href="#preguntas">Preguntas frecuentes</NavLink>
            </div>

            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="hidden rounded-lg bg-cyan-400 px-4 py-2 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 lg:inline-block">
              Hablemos de tu proyecto
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <span className="text-xl">×</span> : <span className="text-xl">☰</span>}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 py-4 lg:hidden">
              <div className="flex flex-col gap-1">
                <NavLink href="#servicio" onClick={closeMenu}>Servicios</NavLink>
                <NavLink href="#soluciones" onClick={closeMenu}>Soluciones</NavLink>
                <NavLink href="#proceso" onClick={closeMenu}>Proceso</NavLink>
                <NavLink href="#publico" onClick={closeMenu}>¿Para quiénes?</NavLink>
                <NavLink href="#preguntas" onClick={closeMenu}>Preguntas frecuentes</NavLink>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-extrabold text-slate-950 transition hover:bg-cyan-300">
                  Hablemos de tu proyecto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-16 text-white sm:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_390px] lg:gap-14">
            <div>
              <span className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Desarrollo web · Diseño · Soluciones digitales
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Tu presencia digital, <span className="text-cyan-400">hecha para crecer.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Creo páginas web modernas, claras y adaptables para presentar tu negocio, mostrar tus servicios y convertir visitas en oportunidades.
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Desde una landing page hasta un sitio web completo: trabajamos para que tu proyecto tenga una presencia online profesional y alineada con sus objetivos.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-cyan-400 px-7 py-3.5 font-extrabold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300">
                  Contame tu idea <span aria-hidden="true">→</span>
                </a>
                <a href="#soluciones" className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10">
                  Explorar servicios
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span>✓ Diseño adaptable a móviles</span>
                <span>✓ Comunicación directa</span>
                <span>✓ Soluciones a medida</span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-2xl bg-slate-800">
                  <img src={profileImage} alt="Fernando Bueno" className="aspect-square w-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <p className="text-lg font-bold text-white">Fernando Bueno</p>
                  <p className="mt-1 text-sm text-slate-400">Desarrollo web · Diseño · Soluciones digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO */}
      <section id="servicio" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <SectionEyebrow>Qué puedo aportar</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Una web no es solo una tarjeta de presentación.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tu sitio puede explicar lo que hacés, transmitir confianza y ayudar a que potenciales clientes encuentren la información que necesitan para dar el siguiente paso.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard number="01" title="Diseño centrado en las personas" text="Estructuras claras y una navegación intuitiva para que los visitantes encuentren lo que buscan." />
            <FeatureCard number="02" title="Diseño adaptable" text="Una experiencia pensada para funcionar en celulares, tablets y computadoras." />
            <FeatureCard number="03" title="Identidad visual coherente" text="Colores, tipografía y composición alineados con la personalidad de tu proyecto." />
            <FeatureCard number="04" title="Contenido bien organizado" text="Jerarquía visual y textos claros para comunicar tus servicios y diferenciales." />
            <FeatureCard number="05" title="Rendimiento y simplicidad" text="Soluciones cuidadas, evitando elementos innecesarios que distraigan de tus objetivos." />
            <FeatureCard number="06" title="Contacto accesible" text="Accesos visibles a WhatsApp, formularios u otros canales relevantes para tu negocio." />
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-xl text-white">✓</div>
              <div>
                <h3 className="font-bold text-slate-900">Un sitio listo para compartir</h3>
                <p className="mt-1 leading-7 text-slate-600">La entrega y publicación se definen según el alcance del proyecto. Podemos conversar sobre dominio, alojamiento y mantenimiento para encontrar una opción adecuada a tus necesidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section id="soluciones" className="scroll-mt-24 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <SectionEyebrow>Soluciones</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">¿Qué tipo de web necesitás?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Cada proyecto tiene objetivos diferentes. Estas son algunas opciones posibles; podemos ajustar el alcance según tu idea y presupuesto.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <ServiceCard title="Landing page" tag="Una página, un objetivo" text="Una página enfocada en presentar un servicio, promocionar una oferta o conseguir consultas." features={["Presentación clara de tu propuesta", "Llamadas a la acción visibles", "Diseño adaptable a móviles"]} />
            <ServiceCard title="Sitio web para negocios" tag="Tu negocio online" text="Un sitio para explicar quién sos, qué ofrecés y cómo pueden contactarte tus clientes." features={["Secciones de servicios y contacto", "Identidad visual consistente", "Navegación sencilla"]} />
            <ServiceCard title="Portfolio profesional" tag="Mostrá tu trabajo" text="Una presencia online para presentar proyectos, habilidades, experiencia y formas de contacto." features={["Proyectos y trabajos destacados", "Perfil profesional", "Enlaces a tus redes y contacto"]} />
            <ServiceCard title="Rediseño de sitio web" tag="Mejorá lo que ya tenés" text="Una renovación visual y estructural para que tu web sea más clara, actual y fácil de usar." features={["Revisión de estructura y contenido", "Mejoras de diseño responsive", "Priorización de objetivos"]} />
          </div>
        </div>
      </section>

      {/* SERVICIOS ADICIONALES */}
      <section id="adicionales" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <SectionEyebrow>Opcionales</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Podemos complementar tu proyecto.</h2>
              <p className="mt-5 leading-8 text-slate-600">Además del diseño y desarrollo, podemos conversar sobre elementos complementarios que ayuden a mantener una presencia digital coherente.</p>
            </div>
            <div className="space-y-3">
              <AdditionalItem text="Integración de botones de WhatsApp y redes sociales." />
              <AdditionalItem text="Formularios de contacto y consultas." />
              <AdditionalItem text="Galerías de imágenes o portfolios de proyectos." />
              <AdditionalItem text="Carga y organización inicial del contenido proporcionado." />
              <AdditionalItem text="Orientación para publicar y actualizar el sitio." />
              <AdditionalItem text="Mantenimiento o mejoras posteriores, según acuerdo." />
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCIA */}
      <section id="transparencia" className="scroll-mt-24 bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">◇</div>
          <SectionEyebrow light>Trabajo transparente</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-extrabold">Un proceso claro desde el primer contacto.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">Antes de comenzar, definimos los objetivos, las secciones, los materiales disponibles y el alcance del proyecto. Así podemos acordar qué se incluye, los plazos estimados y los posibles costos adicionales.</p>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">El dominio, el alojamiento, las herramientas de terceros y el mantenimiento se conversan por separado cuando corresponda. No se incluyen automáticamente si no fueron acordados.</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Consultar sobre mi proyecto</a>
        </div>
      </section>

      {/* PÚBLICO */}
      <section id="publico" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <SectionEyebrow>¿Para quiénes?</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Una solución para cada etapa de tu proyecto.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Tanto si estás dando tus primeros pasos como si ya tenés un negocio en marcha, una web puede ayudarte a presentar mejor lo que hacés.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TargetCard text="Emprendimientos que quieren tener presencia online." />
            <TargetCard text="Pequeñas empresas y comercios que necesitan mostrar sus servicios." />
            <TargetCard text="Profesionales independientes que quieren presentar su trabajo." />
            <TargetCard text="Personas que necesitan una landing page para una campaña o servicio." />
            <TargetCard text="Negocios con una web antigua que quieren renovarla." />
            <TargetCard text="Creadores y trabajadores freelance que necesitan un portfolio." />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="scroll-mt-24 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionEyebrow>Nuestro proceso</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">De la idea a la web, paso a paso.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Un proceso ordenado ayuda a tomar decisiones, evitar confusiones y mantener el proyecto enfocado en sus objetivos.</p>
          </div>
          <div className="mt-12 space-y-4">
            <ProcessStep number="01" title="Conversamos sobre tu idea" text="Definimos qué necesitás, para quién es el sitio y qué querés conseguir." />
            <ProcessStep number="02" title="Acordamos el alcance" text="Organizamos las secciones, funciones, materiales, plazos y presupuesto." />
            <ProcessStep number="03" title="Diseño y estructura" text="Definimos la jerarquía visual y cómo se presentará la información." />
            <ProcessStep number="04" title="Desarrollo" text="Construimos el sitio y adaptamos su presentación a diferentes pantallas." />
            <ProcessStep number="05" title="Revisión" text="Revisamos el resultado y los ajustes contemplados en el acuerdo." />
            <ProcessStep number="06" title="Entrega y publicación" text="Coordinamos la entrega y, si fue acordado, la publicación del sitio." />
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section id="preguntas" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Lo que conviene saber antes de empezar.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <FAQCard question="¿Cuánto cuesta una página web?" answer="Depende del tipo de sitio, la cantidad de secciones, las funciones y los materiales disponibles. Después de conocer tu idea, podemos definir un alcance y presupuesto." />
            <FAQCard question="¿Cuánto demora el desarrollo?" answer="El plazo depende de la complejidad del proyecto y de cuándo estén disponibles los textos, imágenes y otros materiales necesarios. Se acuerda antes de comenzar." />
            <FAQCard question="¿Necesito tener dominio y alojamiento?" answer="No necesariamente desde el primer momento. Podemos conversar sobre las opciones de publicación y aclarar qué servicios tienen costos propios." />
            <FAQCard question="¿Puedo pedir cambios?" answer="Sí. La cantidad y el tipo de revisiones se definen al acordar el proyecto para que ambas partes tengan claras las expectativas." />
            <FAQCard question="¿La web funcionará en celulares?" answer="El diseño se plantea para adaptarse a distintos tamaños de pantalla, incluyendo celulares, tablets y computadoras." />
            <FAQCard question="¿Cómo comienzo?" answer="Escribime por WhatsApp con una breve descripción de tu idea. Podemos conversar sobre el objetivo, las necesidades y los próximos pasos." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="scroll-mt-24 bg-gradient-to-br from-cyan-600 to-blue-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-cyan-100">Demos el primer paso</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Tu próximo proyecto puede empezar acá.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">Contame qué tenés en mente y qué te gustaría lograr. Vamos a explorar una solución web que tenga sentido para tu proyecto.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-8 py-4 font-extrabold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-cyan-50">Hablemos por WhatsApp ↗</a>
            <a href="#soluciones" className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/20">Volver a los servicios</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Fernando Bueno · Desarrollo web y soluciones digitales</p>
        <p className="mt-2 text-slate-600">Diseño web · Desarrollo · Experiencia de usuario</p>
        <a href="#inicio" className="mt-4 inline-block text-cyan-400 transition hover:text-cyan-300">Volver al inicio ↑</a>
      </footer>
    </main>
  )
}

function NavLink({ href, children, onClick }) {
  return <a href={href} onClick={onClick} className="shrink-0 rounded-lg px-3 py-2 font-medium text-slate-300 transition hover:bg-white/10 hover:text-white">{children}</a>
}

function SectionEyebrow({ children, light = false }) {
  return <span className={`text-sm font-bold uppercase tracking-widest ${light ? 'text-cyan-300' : 'text-cyan-700'}`}>{children}</span>
}

function FeatureCard({ number, title, text }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
      <span className="text-sm font-bold text-cyan-700">{number}</span>
      <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  )
}

function ServiceCard({ title, tag, text, features }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
      <div className="mb-4 h-2 w-10 rounded-full bg-cyan-500" />
      <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">{tag}</p>
      <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature) => <li key={feature} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="font-bold text-cyan-700">✓</span><span>{feature}</span></li>)}
      </ul>
    </div>
  )
}

function AdditionalItem({ text }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-200 hover:bg-cyan-50">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">✓</span>
      <span className="text-slate-700">{text}</span>
    </div>
  )
}

function TargetCard({ text }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-200 hover:shadow-sm">
      <div className="flex gap-3"><span className="mt-1 text-cyan-700">●</span><p className="font-medium leading-7 text-slate-700">{text}</p></div>
    </div>
  )
}

function ProcessStep({ number, title, text }) {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-md">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700 font-bold text-white">{number}</span>
      <div><h3 className="font-bold text-slate-900">{title}</h3><p className="mt-1 leading-7 text-slate-600">{text}</p></div>
    </div>
  )
}

function FAQCard({ question, answer }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-slate-900">{question}</h3>
      <p className="mt-2 leading-7 text-slate-600">{answer}</p>
    </div>
  )
}

export default App
