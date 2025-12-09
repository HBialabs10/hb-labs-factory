export const metadata = {
  title: "HB Labs SaaS Template",
  description: "Template de base pour la génération de SaaS automatiques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
