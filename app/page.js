import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("usuarios").select("id").limit(1);

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>ShareControl</h1>
      <p>Teste de conexão Supabase</p>
      <pre>{JSON.stringify({ ok: !error, error, data }, null, 2)}</pre>
    </main>
  );
}
