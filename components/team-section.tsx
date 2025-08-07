import dynamic from "next/dynamic"

// Import our OptimizedImage component
const OptimizedImage = dynamic(() => import('./optimized-image'), {
  loading: () => <div className="rounded-full bg-gray-200 h-40 w-40 animate-pulse"></div>,
  ssr: true
})

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="team-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 id="team-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the experts who will help you with all your technology needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Team members">
          <div className="flex flex-col items-center space-y-4" role="listitem" aria-labelledby="team-member-travis">
            <OptimizedImage
              src="/travis-roesner.png"
              alt="Travis Roesner, Founder & Lead Technician"
              type="thumbnail"
              position="above-fold"
              importance="high"
              className="rounded-full object-cover h-40 w-40"
              aria-labelledby="team-member-travis"
            />
            <div className="space-y-2 text-center">
              <h3 id="team-member-travis" className="text-xl font-bold">Travis Roesner</h3>
              <p className="text-sm text-gray-500">Founder & Lead Technician</p>
              <p className="mt-4 text-gray-500">
                With over 30 years of experience in technology, Travis specializes in making technology accessible
                to everyone. Travis has a gift for explaining complex concepts in simple terms.
              </p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  )
}
