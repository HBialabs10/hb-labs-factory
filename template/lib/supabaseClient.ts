import { createClient } from "@supabase/supabase-js";

// Le client Supabase utilisé par tous les futurs SaaS HB Labs.
// Les variables d'environnement seront automatiquement remplacées
// par l'usine IA lors de la création du SaaS.

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
