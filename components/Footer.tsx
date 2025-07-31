export default function Footer() {
  return (
    <footer className="bg-brand/70 backdrop-blur py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between">
        <span className="font-nerko text-2xl">capy</span>
        <nav className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-accent">Home</a>
          <a href="#features" className="hover:text-accent">Features</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} capy. All rights reserved.</p>
      </div>
    </footer>
  );
}
