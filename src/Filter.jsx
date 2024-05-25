import React, { useState } from "react";

export default function App() {
  const [girls, setGirls] = useState([
    { name: 'Vince', address: 'Cahayag', phone: '0912311234' }
  ]);

  function handleAddGF(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value;
    const addressInput = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    
    setGirls([...girls, { name: nameInput, address: addressInput, phone: phone }]);

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
  }

  function handleRemoveGF(index) {
    setGirls(girls.filter((el, i) => i !== index));
  }

  return (
    <div>

    <div className="mt-4 p-10">
      <form onSubmit={handleAddGF} className="flex items-center">
        <input type="text" id="name" placeholder="Name" className="mr-2 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        <input type="text" id="address" placeholder="Address" className="mr-2 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        <input type="text" id="phone" placeholder="Phone" className="mr-2 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add</button>
      </form>
    </div>

    <div>
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Name</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Address</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Phone</th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {girls.map((gf, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b border-gray-200 text-center">{gf.name}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{gf.address}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{gf.phone}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">
              <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveGF(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
            

    </div>
  );
}
