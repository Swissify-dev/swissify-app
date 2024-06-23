import DashboardItemHistory from "@components/dashboard/DashboardItemHistory";
import ItemActiveTeamDashboard from "@components/dashboard/ItemActiveTeamDashboard";

const DashboardView = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className='border-solid border-1 border-gray-300'>
        <h3 className='font-bold text-lg'>Hoy</h3>
        <div className='flex flex-col gap-10'>
          <DashboardItemHistory />
          <DashboardItemHistory />
          <DashboardItemHistory />
        </div>
      </section>
      <section>
        <h1>2</h1>
      </section>
      <section className='border-solid border-1 border-gray-300'>
        <h3 className='font-bold text-lg'>Equipo activo</h3>
        <div className='flex flex-col gap-10'>
          <ItemActiveTeamDashboard />
          <ItemActiveTeamDashboard />
          <ItemActiveTeamDashboard />
        </div>
      </section>
    </div>
  );
}

export default DashboardView