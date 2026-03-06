import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body" style={{ width: '18rem' }}>
          <h3 className="card-title">Supabase + React</h3>
          <h4 className="card-subtitle">Instruments</h4>
          <ul>
            {instruments.map((instrument) => (
              <li key={instrument.name}>{instrument.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
