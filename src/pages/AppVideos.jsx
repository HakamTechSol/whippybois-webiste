import { useEffect } from 'react'

const appVideos = [
  {
    title: 'Customer App',
    description: 'A quick look at the Whippy Bois customer app.',
    src: '/videos/customer.mp4',
  },
  {
    title: 'Driver App',
    description: 'A quick look at the Whippy Bois driver app.',
    src: '/videos/driver.mp4',
  },
]

export default function AppVideos() {
  useEffect(() => {
    const previousTitle = document.title
    const robotsMeta = document.querySelector('meta[name="robots"]')
    const previousRobotsContent = robotsMeta?.getAttribute('content')
    const pageRobotsMeta = robotsMeta ?? document.createElement('meta')

    pageRobotsMeta.setAttribute('name', 'robots')
    pageRobotsMeta.setAttribute('content', 'noindex, nofollow')
    if (!robotsMeta) document.head.appendChild(pageRobotsMeta)
    document.title = 'Whippy Bois App Videos'

    return () => {
      document.title = previousTitle
      if (previousRobotsContent === null || previousRobotsContent === undefined) {
        pageRobotsMeta.remove()
      } else {
        pageRobotsMeta.setAttribute('content', previousRobotsContent)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fffaf4] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <img src="/logo.png" alt="Whippy Bois" className="mx-auto h-16 w-auto sm:h-20" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Whippy Bois Apps
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            App video previews
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Watch how the Whippy Bois customer and driver apps work.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {appVideos.map((video) => (
            <section
              key={video.title}
              className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg shadow-orange-950/5"
            >
              <div className="aspect-video bg-gray-950">
                <video
                  className="h-full w-full"
                  controls
                  preload="metadata"
                  playsInline
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900">{video.title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{video.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
