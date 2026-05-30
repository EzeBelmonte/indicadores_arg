import { 
  BilleteraSection,
  CanastaSection,
  DolarSection, 
  EmaeSection,
  IpcSection, 
  JubilacionSection,
  MervalSection,
  PobrezaSection,
  PresentacionSection,
  RiesgoPaisSection,
  RipteSection,
  SalarioSection,
} from "@/features";


const Dashboard = () => {

  return (

    <main className="max-w-7xl mx-auto flex flex-col gap-10 px-4 py-6">

      <PresentacionSection />

      <DolarSection />

      <div className="grid grid-cols-[1fr_1fr] gap-10">
        <IpcSection />
        <RiesgoPaisSection />
      </div>

      <CanastaSection />

      <div className="grid grid-cols-2 gap-x-10">
        
        <div className="row-span-2">
          <SalarioSection />
        </div>

        <div className="flex flex-col gap-10">
          <RipteSection />
          <JubilacionSection />
        </div>

      </div>

      <div className="grid grid-cols-2 gap-x-10">
        <EmaeSection />
        <PobrezaSection />
      </div>

      <BilleteraSection />

      <MervalSection />

    </main>

  )
}

export default Dashboard;