import { Card, CardTitle, Key } from "@/components";
import type { IPCData } from "../types/ipc.type";
import { IpcActualValue, IpcValue } from "../typography/IpcTypography";


interface IpcProps {
  data: IPCData;
  variant?: "default" | "featured";
  onClick?: () => void;
}


const IpcCard = ({ data, variant = "default", onClick }: IpcProps) => {

  const isDefault = variant === "default";

  const name = data.nombre_mes.toUpperCase();

  // Componentes dinámicos
  const KeyComponent = isDefault ? Key : CardTitle;
  const ValueComponent = isDefault ? IpcValue : IpcActualValue;


  return (
    <Card
      className="flex flex-col items-center "
      onClick={onClick}
      variant={!isDefault ? "ipc" : "default"}
    >

      <div className="flex flex-col items-center">

        <KeyComponent>{name}</KeyComponent>

        <ValueComponent>{data.valor}</ValueComponent>

      </div>

    </Card>
  );
};

export default IpcCard;