import Header from '@/components/header';

export default function Page(): JSX.Element {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative isolate h-screen overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img
            src="https://wallpapers-clan.com/wp-content/uploads/2023/10/minecraft-grass-tree-desktop-wallpaper-preview.jpg"
            alt="Minecraft background"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          <div
            className="absolute h-full w-full overflow-hidden bg-black/40 -z-10 mt-6"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Explore soon with us more data!
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  We manage for you the best data!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  We provide the best data for you to explore and use in your
                  projects. We have a wide range of data that you can use for
                  your projects.
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
