"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-emerald-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold mb-2">NOVIX</h4>
          <p className="text-sm">Empowering mental wellness</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">SERVICE</h4>
          <ul className="space-y-1 text-sm">
            <li>Therapy</li>
            <li>Support</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">BUSINESS</h4>
          <ul className="space-y-1 text-sm">
            <li>Partner With Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">DOCTOR</h4>
          <ul className="space-y-1 text-sm">
            <li>Join As Expert</li>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs mt-8 text-gray-300">
        © {year} NOVIX — All rights reserved.
      </p>
    </footer>
  );
}
