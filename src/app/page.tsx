'use client';

import { useState } from 'react';
import propertiesData from '@/data/properties.json';

type Property = {
  id: string;
  title: string;
  city: string;
  location: string;
  locality: string;
  price: string;
  type: string;
  workstations: number;
  image?: string;
};

const properties: Property[] = propertiesData;

export default function Home() {
  const [cityFilter, setCityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const cities = ['all', ...Array.from(new Set(properties.map((p) => p.city)))];
  const types = ['all', ...Array.from(new Set(properties.map((p) => p.type)))];

  const filtered = properties.filter((p) => {
    const cityMatch = cityFilter === 'all' || p.city === cityFilter;
    const typeMatch = typeFilter === 'all' || p.type === typeFilter;
    return cityMatch && typeMatch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-[#003366] text-white py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Prudential Properties</h1>
          <p className="text-sm text-gray-200 mt-1">
            Furnished & managed office spaces across Hyderabad
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium text-[#003366] mb-1">City</label>
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-900 [color-scheme:light] focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c === 'all' ? 'All Cities' : c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#003366] mb-1">Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-900 [color-scheme:light] focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t === 'all' ? 'All Types' : t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No properties match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {property.image ? (
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex flex-col items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 21V7a1 1 0 011-1h6a1 1 0 011 1v14M4 21h16M12 21V3.5a1 1 0 011-1h5a1 1 0 011 1V21M8 10h.01M8 14h.01M9 21v-3h2v3"
                  />
                </svg>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {property.type ? `${property.type} office` : 'Coming Soon'}
                </span>
              </div>
            )}                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#003366]">{property.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {property.location}, {property.city}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{property.locality}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#c5a572] font-semibold">{property.price}</span>
                    <span className="text-sm text-gray-600">{property.workstations} workstations</span>
                  </div>
                  <span className="inline-block mt-3 text-xs font-medium px-2 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] capitalize">
                    {property.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}