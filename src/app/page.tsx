import Example from "@/components/example/example";
import FloatingToggle from "@/components/ui/toggle/floating-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Example />
        <FloatingToggle />
      </div>
    </main>
  );
}
