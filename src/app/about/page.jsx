function About() {
  return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
            Welcome to our website! We are dedicated to providing the best service possible.
        </p>
        <p className="mb-4">
            Our team is composed of experienced professionals who are passionate about what they do.
        </p>
        <p className="mb-4">
            We believe in continuous improvement and always strive to exceed our customers' expectations.
        </p>
        <p className="mb-4">
            Our mission is to deliver high-quality products that bring value to our customers. We are committed to innovation and excellence in everything we do.
        </p>
        <p className="mb-4">
            We value integrity, transparency, and accountability. Our goal is to build long-lasting relationships with our clients based on trust and mutual respect.
        </p>
        <p className="mb-4">
            Thank you for choosing us. We look forward to serving you and helping you achieve your goals.
        </p>
        <p className="mb-4">
            This app is built with React js, Tailwind CSS, Next js , mongoDb and clerk. You can find the source code on <a href="https://github.com/kareem1207/Movie-Recommendation" target="_blank"className="hover:underline text-purple-600 visited:text-purple-600"> Github </a>
        </p>
    </div>
</div>
  )
}

export default About;