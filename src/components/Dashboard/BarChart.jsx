import React from 'react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Biópsia', valor: 115, color: '#43a047' },
  { name: 'Citopatologia', valor: 198, color: '#5c9ce6' },
  { name: 'Imuno-histoq.', valor: 142, color: '#fbc02d' },
  { name: 'Congelação', valor: 75, color: '#f57c00' },
  { name: 'Revisão de lâmina', valor: 105, color: '#a7f3d0' },
  { name: 'Peça cirúrgica', valor: 125, color: '#e07160' },
];

export default function BarChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[340px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-bold text-sm">Tipos de Exames</h3>
        <span className="text-gray-300 cursor-pointer">•••</span>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <ReBarChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 10 }}>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 9, fontWeight: 600 }} angle={0} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} />
          <Tooltip />
          <Bar dataKey="valor" radius={[10, 10, 0, 0]} maxBarSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}