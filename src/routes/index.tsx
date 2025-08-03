import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen w-full bg-app-background-mint flex items-start justify-center">
      <h1 className="text-2xl font-app text-app-text-primary mb-4">⚡ Pokédex</h1>
    </div>
  );
}
