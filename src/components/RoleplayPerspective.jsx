import React, { useState } from 'react';

export default function RoleplayPerspective() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">CD AI Systems</h2>
      <p className="mb-4">
        Et digitalt værktøjssystem til fagpersoner og forældre, der arbejder med børn med særlige behov.
      </p>

      <div className="space-y-2">
        <button
          onClick={() => setSelectedRole('Barn')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Se fra barnets perspektiv
        </button>
        <button
          onClick={() => setSelectedRole('Voksen')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Se fra den voksnes perspektiv
        </button>
      </div>

      {selectedRole && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <h3 className="font-semibold">Valgt rolle: {selectedRole}</h3>
          <p>
            {selectedRole === 'Barn'
              ? '“Jeg prøver, men alle bliver sure på mig.”'
              : '“Han bliver vred bare jeg siger noget – jeg forstår det ikke.”'}
          </p>
        </div>
      )}
    </div>
  );
}

