import { useMervalSector} from "../hooks/useMerval";
import { CardTitleSecond } from "@/components";
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

  console.log(JSON.stringify(data, null, 2));

  return (

    <div className="flex flex-col gap-12">

      {data.map((sector) => (

        <div key={sector.name}>

          <CardTitleSecond className="mb-4">{sector.name}</CardTitleSecond>

          <div className="grid grid-cols-2 gap-7">
            {sector.data.map((stock) => (

              <div>
                <MervalCard
                  key={stock.symbol}
                  data={stock}
                />
              </div>

            ))}
          </div>

        </div>
        
      ))}

    </div>

  );
};

export default MervalSector;