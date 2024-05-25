import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: 'Vince',
    netWorth: 10000000,
    address: 'Cahayag',
  });

  function handleNameChange(event) {
    setPerson(p => ({ ...p, name: event.target.value }));
  }

  function handleAddressChange(event) {
    setPerson(p => ({ ...p, address: event.target.value }));
  }

  function handleNetWorthChange(event) {
    setPerson(p => ({ ...p, netWorth: event.target.value }));
  }

  return (
    <div>
      <h1>Person Info</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{person.address}</td>
          </tr>
          <tr>
            <th>Net Worth</th>
            <td>{person.netWorth}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={person.name} onChange={handleNameChange} /><br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={person.address} onChange={handleAddressChange} /><br />
          <label htmlFor="netWorth">Net Worth</label>
          <input type="text" id="netWorth" value={person.netWorth} onChange={handleNetWorthChange} />
        </div>
      </div>
    </div>
  );
}
