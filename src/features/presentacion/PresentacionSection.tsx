import { Section, Image } from "@/components";
import logo from "@/assets/logo/logo.svg";

const PresentacionSection = () => {

  // Tamaño de imagen

  return (

    <Section id="inicio">

      <div className="flex flex-col items-center p-4">

        {/* Logo*/}
        <Image 
          src={logo}
          alt="Logo aplicación"
          className="w-86"
        />

        <div className="w-210 items-start text-white font-semibold">

          <p className="text-2xl">BIENVENIDO</p>
          <br/>
          <p>Esta aplicación reúne los principales indicadores económicos y financieros de Argentina en un solo lugar. 
          Aquí podrás consultar datos actualizados sobre inflación, riesgo país, cotizaciones del dólar, mercado bursátil y 
          otras métricas relevantes para comprender la situación del país.</p>
          <br/>
          <p>Nuestro objetivo es ofrecer información clara, accesible y visual para ayudarte a seguir la evolución de la economía argentina 
          a través de datos públicos y fuentes confiables.</p>
          <br/>
          <p>Explorá los indicadores, analizá las tendencias y mantenete informado.</p>

        </div>  

      </div>


    </Section>

  );
};

export default PresentacionSection;