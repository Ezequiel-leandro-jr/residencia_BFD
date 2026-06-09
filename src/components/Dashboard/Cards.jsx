import React from 'react';
import { CheckCircle, Clock, FileText, Calendar, Filter, ChevronDown } from 'lucide-react';

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      
      {/* 120 Exames Concluídos - Cor: #2E7D4F */}
      <div 
        className="p-5 text-white rounded-2xl flex justify-between items-start border shadow-sm relative"
        style={{ backgroundColor: '#2E7D4F', borderColor: '#235f3c' }}
      >
        <div>
          <h3 className="text-4xl font-bold mb-1">120</h3>
          <p className="text-xs font-semibold text-emerald-50">Exames Concluídos</p>
        </div>
        <div className="p-1.5 rounded-full text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
          <CheckCircle className="w-5 h-5" />
        </div>
      </div>

      {/* 75 Aguardando Análise - Cor: #66C48A */}
      <div 
        className="p-5 text-white rounded-2xl flex justify-between items-start border shadow-sm"
        style={{ backgroundColor: '#66C48A', borderColor: '#52b076' }}
      >
        <div>
          <h3 className="text-4xl font-bold mb-1">75</h3>
          <p className="text-xs font-bold text-emerald-50">Aguardando Análise</p>
        </div>
        <div className="text-white p-1">
          <Clock className="w-6 h-6" />
        </div>
      </div>

      {/* 56 Laudos Gerados - Cor: #A8E6C1 */}
      <div 
        className="p-5 text-[#2E7D4F] rounded-2xl flex justify-between items-start border shadow-sm"
        style={{ backgroundColor: '#A8E6C1', borderColor: '#92d4ad' }}
      >
        <div>
          <h3 className="text-4xl font-bold mb-1">56</h3>
          <p className="text-xs font-bold text-[#378f5c]">Laudos Gerados</p>
        </div>
        <div className="text-[#2E7D4F] p-1">
          <FileText className="w-6 h-6" />
        </div>
      </div>

      {/* Período */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
        <div className="text-gray-700">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Período</p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xs font-bold text-gray-600">01/05/2025 - 31/05/2025</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-700" />
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Filtros</p>
            <p className="text-xs font-bold text-gray-600">Selecionar filtros</p>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>

    </div>
  );
}