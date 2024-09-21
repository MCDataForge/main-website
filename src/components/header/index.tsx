export default function Header(): JSX.Element {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/40">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto rounded-full"
              src="https://avatars.githubusercontent.com/u/96520794?s=400&u=2a54bfc2658a461d6339e3e4285ac247d431393a&v=4"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
