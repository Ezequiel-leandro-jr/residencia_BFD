import React from 'react';
import { XCircle, AlertTriangle, FileText, Clock } from 'lucide-react';

const alerts = [
  { id: 1, text: 'Exames não processados corretamente', count: 12, icon: <XCircle className="w-5 h-5 text-red-500" />, textCol: 'text-red-500' },
  { id: 2, text: 'Pacientes que não retiraram os exames', count: 8, icon: <AlertTriangle className="w-5 h-5 text-amber-500" />, textCol: 'text-amber-500' },
  { id: 3, text: 'Aguardando análise IA e revisão médica', count: 4, icon: <FileText className="w-5 h-5 text-orange-500" />, textCol: 'text-orange-500' },
  { id: 4, text: 'Exames em processamento', count: 15, icon: <Clock className="w-5 h-5 text-blue-500" />, textCol: 'text-blue-500' },
];

export default function AlertsChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[340px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-800 font-bold text-sm">Alertas e Pendências</h3>
        <span className="text-gray-300 cursor-pointer">•••</span>
      </div>
      
      <div className="flex flex-col gap-2.5 flex-1 justify-center">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-xl border border-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded-full shadow-sm flex items-center justify-center">
                {alert.icon}
              </div>
              <span className="text-xs font-semibold text-gray-600">{alert.text}</span>
            </div>
            <span className={`text-sm font-bold pr-2 ${alert.textCol}`}>{alert.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}