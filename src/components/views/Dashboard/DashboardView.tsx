import { Card } from "@components/ui/card";

import DashboardItemHistory from "@components/dashboard/DashboardItemHistory";
import ItemActiveTeamDashboard from "@components/dashboard/ItemActiveTeamDashboard";
import ObjectivesTableDashboard from "@components/dashboard/ObjectivesTableDashboard";

const DashboardView = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-7">
      <section className="w-full">
        <Card>
          <h3 className='font-bold text-lg'>Hoy</h3>
          <div className='flex flex-col gap-5'>
            <DashboardItemHistory />
            <DashboardItemHistory />
            <DashboardItemHistory />
          </div>
        </Card>
      </section>
      <Card className="w-full">
        <ObjectivesTableDashboard />
      </Card>
      <section className="w-full">
        <Card>
          <h3 className='font-bold text-lg'>Equipo activo</h3>
          <div className='flex flex-col gap-5'>
            <ItemActiveTeamDashboard />
            <ItemActiveTeamDashboard />
            <ItemActiveTeamDashboard />
          </div>
        </Card>
      </section>
    </div>
  );
}

export default DashboardView