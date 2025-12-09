import Stripe from "stripe";

// Client Stripe utilisé par tous les futurs SaaS HB Labs.
// Les clés seront injectées via les variables d'environnement
// par l'usine IA lors de la création du projet.

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});
