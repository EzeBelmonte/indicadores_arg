import { 
  PresentacionSection,
  DolarSection, 
  
  IpcSection, 
  RiesgoPaisSection,
  
  CanastaSection,

  SalarioSection,
  RipteSection,
  JubilacionSection,

  EmaeSection,
  PobrezaSection,

  BilleteraSection,
 
  MervalSection,
} from "@/features";


const Dashboard = () => {

  return (
    <main className="max-w-7xl mx-auto flex flex-col gap-10 px-4 py-12 md:py-6">
      <PresentacionSection />

      <div>
      <DolarSection />
      </div>

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        <IpcSection />
        <RiesgoPaisSection />
      </div>

      <CanastaSection />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <SalarioSection />
        </div>

        <div className="flex flex-col gap-10">
          <RipteSection />
          <JubilacionSection />
        </div>
      </div>

      
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <EmaeSection />
        <PobrezaSection />
      </div>

      <BilleteraSection />

      <MervalSection />

    </main>

  )
}

export default Dashboard;