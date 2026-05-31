import { Card, Key, Value } from "@/components";
import { S_Key, S_Value } from "../typography/sectionTypography";
import type { IPCData } from "../types/ipc.type";


type IPCProps = {
  data: IPCData;
  variant?: "default" | "featured";
  onClick?: () => void;
}


const IpcCard = ({ data, variant = "default", onClick }: IPCProps) => {

  const isDefault = variant === "default";

  const name = data.nombre_mes.toUpperCase();

  const Key_ = isDefault ? Key : S_Key;
  const Value_ = isDefault ? Value : S_Value;

  return (
    <Card
      onClick={onClick}
      variant={!isDefault ? "ipc" : "default"}
    >
      <div className="flex flex-col items-center">
        <Key_>{name}</Key_>
        
        <Value_>{data.valor}</Value_>
      </div>
    </Card>
  );
};

export default IpcCard;