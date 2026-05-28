import { useAniosIPC } from "../hooks/useIPC";
import SameDataComposedChart from "@/components/graphics/SameDataComposedChart";


const IpcHistorial = () => {

  const {
    data = [],
    isPending,
    error,
  } = useAniosIPC();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No hay datos</p>;
  }

  return (

    <div>

      <SameDataComposedChart data={data} />

    </div>

  );
};

export default IpcHistorial