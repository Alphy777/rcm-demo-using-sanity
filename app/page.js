
import { client } from '../sanity/lib/client'
import { urlFor } from '../sanity/lib/image'
import ScrollToTopButton from './ScrollToTopButton'
import SubscribeButton from './SubscribeButton'

async function getData() {
  const services = await client.fetch(`*[_type == "service"]`)
  const stats = await client.fetch(`*[_type == "stat"]`)
  const reviews = await client.fetch(`*[_type == "review"]`)
  const aiServices = await client.fetch(`*[_type == "aiservice"]`)
  return { services, stats, reviews, aiServices }
}

export default async function Home() {
  const { services, stats, reviews, aiServices } = await getData()
  

  return (
    <main>
      {/* NAVBAR */}
      <nav className="bg-[#091c47] text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">RCM Services</h1>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#ai" className="hover:text-blue-300">AI</a>
          <a href="#reviews" className="hover:text-blue-300">Reviews</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#091c47] text-white py-24 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop Revenue Leakage.</h2>
        <p className="text-lg mb-8 text-blue-200">Turn lost revenue into recovered cash with AI-powered RCM solutions.</p>
        <button className="bg-white text-[#091c47] font-bold px-6 py-3 rounded-full hover:bg-blue-100">
          Schedule a Discovery Session
        </button>
      </section>

      {/* STATS */}
      <section className="bg-[#091c47] text-white py-10 px-8">
        <div className="flex justify-center gap-16 flex-wrap">
          {stats.map((stat) => (
            <div key={stat._id} className="text-center">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-blue-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-8 bg-[#F5F4EB]">
        <h2 className="text-3xl font-bold text-center text-[#091c47] mb-12">
          Revenue Cycle Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service._id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-[#091c47] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI SERVICES */}
      <section id="ai" className="py-16 px-8 bg-[#F5F4EB] ">
        <h2 className="text-3xl font-bold text-center text-[#091c47] mb-4">
          AI Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Intelligent systems that streamline coding, billing, and eligibility — driving faster payments and fewer write-offs.
        </p>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {aiServices.map((aiservice) => (
            <div key={aiservice._id} className="w-full md:w-1/2 lg:w-1/4 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-[#091c47] mb-3">{aiservice.title}</h3>
              <p className="text-gray-600 text-sm">{aiservice.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* REVIEW */}
      <section id="reviews" className="py-16 px-8 bg-[#F5F4EB]">
        <h2 className="text-3xl font-bold text-center text-[#091c47] mb-12">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review._id} className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <img
                src={urlFor(review.image).width(100).height(100).url()}
                alt={review.title}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-200"
              />
              <h3 className="text-lg font-bold text-[#091c47] mb-3">{review.title}</h3>
              <p className="text-gray-600 text-sm">{review.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-8 bg-[#091c47] text-white">
        <h2 className="text-3xl font-bold text-center mb-4">
          Stay Updated!
        </h2>
        <p className="text-center text-blue-200 mb-8">
          Subscribe to our newsletter for the latest RCM insights.</p>
        <SubscribeButton />
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#091c47] text-white text-center py-8">
        <p>© 2025 RCM Services. All rights reserved.</p>
      </footer>

      <ScrollToTopButton />
    </main>
  )
}