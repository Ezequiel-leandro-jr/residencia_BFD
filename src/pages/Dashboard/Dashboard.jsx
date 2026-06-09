import React from 'react';
import Cards from '../../components/Dashboard/Cards';
import StatusChart from '../../components/Dashboard/StatusChart';
import LineChart from '../../components/Dashboard/LineChart';
import BarChart from '../../components/Dashboard/BarChart';
import AlertsChart from '../../components/Dashboard/AlertsChart';

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f1f3f4] min-h-screen w-full flex flex-col gap-6 font-sans">
      
      {/* Linha dos KPIs Superiores */}
      <Cards />

      {/* Grid do Meio: Status (1/3) e Linhas (2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <StatusChart />
        </div>
        <div className="lg:col-span-2">
          <LineChart />
        </div>
      </div>

      {/* Grid Inferior: Tipos de Exames (1/3) e Alertas (2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <BarChart />
        </div>
        <div className="lg:col-span-2">
          <AlertsChart />
        </div>
      </div>

    </div>
  );
}