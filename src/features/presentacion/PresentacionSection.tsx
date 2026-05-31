import { Section, Image } from "@/components";
import logo from "@/assets/logo/logo.svg";

const PresentacionSection = () => {

  // Tamaño de imagen

  return (

    <Section id="inicio">

      <div className="flex flex-col items-center gap-6 px-4 pb-6">

        {/* Logo*/}
        <Image 
          src={logo}
          alt="Logo aplicación"
          className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[480px] transition-all duration-200"
        />

        {/* No usar <br/> para separar párrafos, usar: spcate-y-4 */}
        <div className="w-full max-w-4xl text-white font-semibold text-left space-y-4">

          <p className="text-2xl font-bold">BIENVENIDO</p>
          
          <p>Esta aplicación reúne los principales indicadores económicos y financieros de Argentina en un solo lugar. 
          Aquí podrás consultar datos actualizados sobre inflación, riesgo país, cotizaciones del dólar, mercado bursátil y 
          otras métricas relevantes para comprender la situación del país.</p>
          
          <p>Nuestro objetivo es ofrecer información clara, accesible y visual para ayudarte a seguir la evolución de la economía argentina 
          a través de datos públicos y fuentes confiables.</p>
          
          <p>Explorá los indicadores, analizá las tendencias y mantenete informado.</p>

        </div>  

      </div>


    </Section>

  );
};

export default PresentacionSection;