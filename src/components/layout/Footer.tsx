
const Footer = () => {

  return (

    <section className="w-full mx-auto bg-black/80 text-gray-500 text-[0.8rem] grid grid-cols-[1fr_auto_1fr] gap-6 p-7">
      {/* Fuentes */}
      <div className="space-y-1">
        <h4>Datos obtenidos de:</h4>
        
        <div>
          <p>· ArgenStats</p>
          <p>· Argly</p>
          <p>· Yahoo Finance</p>
          <p>· API Datos</p>
          <p>· Dólar API</p>
          <p>· datos.gob.ar</p>
          <p>· INDEC</p>
        </div>
      </div>

      {/* Linea separadora */}
      <div className="w-px bg-gray-800" />

      {/* Mensaje */}
      <div className="space-y-4">
        <p>· Proyecto personal desarrollado para visualizar indicadores económicos de Argentina.</p>

        <p>· La información mostrada tiene fines informativos y no constituye asesoramiento financiero.</p>
      </div>
    </section>

  );
};

export default Footer;
