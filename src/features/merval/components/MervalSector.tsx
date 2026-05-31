import { useMervalSector} from "../hooks/useMerval";
import MervalCard from "./MervalCard";


const MervalSector = () => {

  const {
    data = [],
    isPending,
    error,
  } = useMervalSector();

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

    <div className="flex flex-col gap-12">
      {data.map((sector) => (
        <div key={sector.name}>
          <h3 className="mb-4">{sector.name}</h3>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
            {sector.data.map((stock) => (

              <MervalCard
                key={stock.symbol}
                data={stock}
              />
        
            ))}
          </div>
        </div>
      ))}
    </div>

  );
};

export default MervalSector;