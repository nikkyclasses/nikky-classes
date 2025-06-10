import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
 <div>
  {/* Navigation */}
  <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nikky Classes
            </h1>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#classes" className="text-gray-700 hover:text-blue-600 transition duration-300">Classes</a>
          <a href="#staff" className="text-gray-700 hover:text-blue-600 transition duration-300">Our Team</a>
          <a href="#results" className="text-gray-700 hover:text-blue-600 transition duration-300">Results</a>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <section id="home" className="gradient-bg min-h-screen flex items-center pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shape Your Future with  
            <span className="text-yellow-300"> Nikky Classes</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Premier tuition classes for 8th, 10th, and 12th grade students. 
            Expert faculty, proven results, and personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 pulse-glow">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
              View Results
            </button>
          </div>
        </div>
        <div className="floating-animation">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students studying" className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
  {/* Stats Section */}
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div className="p-6">
          <div className="number-counter">500+</div>
          <p className="text-gray-600 font-medium">Students Taught</p>
        </div>
        <div className="p-6">
          <div className="number-counter">95%</div>
          <p className="text-gray-600 font-medium">Success Rate</p>
        </div>
        <div className="p-6">
          <div className="number-counter">8+</div>
          <p className="text-gray-600 font-medium">Years Experience</p>
        </div>
        <div className="p-6">
          <div className="number-counter">3</div>
          <p className="text-gray-600 font-medium">Expert Faculty</p>
        </div>
      </div>
    </div>
  </section>
  {/* Classes Section */}
  <section id="classes" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Classes</h2>
        <p className="text-xl text-gray-600">Comprehensive courses designed for academic Nikky</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Class 8 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Class 8 students" className="w-full h-48 object-cover" />
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Class 8</h3>
            </div>
            <p className="text-gray-600 mb-6">Foundation building with comprehensive coverage of all subjects. Perfect preparation for higher classes.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Math, Science, English, Social Studies</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Interactive Learning Methods</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Regular Assessments</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">₹3,000/month</span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
        {/* Class 10 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover transform scale-105">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 font-semibold">
            Most Popular
          </div>
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Class 10 students" className="w-full h-48 object-cover" />
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Class 10</h3>
            </div>
            <p className="text-gray-600 mb-6">Complete board exam preparation with focus on scoring high marks and building strong concepts.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Math, Science, English, Social Studies</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Board Exam Strategy</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Mock Tests &amp; Doubt Sessions</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-purple-600">₹4,500/month</span>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
        {/* Class 12 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Class 12 students" className="w-full h-48 object-cover" />
          <div className="p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Class 12</h3>
            </div>
            <p className="text-gray-600 mb-6">Advanced preparation for board exams and competitive entrance tests. Gateway to your dream college.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">PCM/PCB Streams Available</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">JEE/NEET Preparation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Career Counseling</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">₹6,000/month</span>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Staff Section */}
  <section id="staff" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Faculty</h2>
        <p className="text-xl text-gray-600">Experienced educators dedicated to your success</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Teacher 1 */}
        <div className="text-center card-hover">
          <div className="relative mb-6">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Rajesh Sharma" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-200" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Mathematics
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Sharma</h3>
          <p className="text-blue-600 font-semibold mb-3">Senior Mathematics Faculty</p>
          <p className="text-gray-600 mb-4">12+ years experience • IIT Delhi Alumni • Expert in JEE Mathematics</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">M.Tech IIT</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">500+ Students</span>
          </div>
        </div>
        {/* Teacher 2 */}
        <div className="text-center card-hover">
          <div className="relative mb-6">
            <img src="https://images.unsplash.com/photo-1494790108755-2616c2e9c999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Priya Singh" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-200" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
              Physics &amp; Chemistry
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Priya Singh</h3>
          <p className="text-purple-600 font-semibold mb-3">Science Faculty Head</p>
          <p className="text-gray-600 mb-4">10+ years experience • NEET Expert • Research Background</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Ph.D</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">95% Results</span>
          </div>
        </div>
        {/* Teacher 3 */}
        <div className="text-center card-hover">
          <div className="relative mb-6">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Mr. Amit Kumar" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-200" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
              English &amp; Social Studies
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Amit Kumar</h3>
          <p className="text-green-600 font-semibold mb-3">Language &amp; Humanities Expert</p>
          <p className="text-gray-600 mb-4">8+ years experience • Board Exam Specialist • Creative Teaching</p>
          <div className="flex justify-center space-x-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">M.A English</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Award Winner</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Results Section */}
  <section id="results" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Outstanding Results</h2>
        <p className="text-xl text-gray-600">Our students' success stories speak for themselves</p>
      </div>
      {/* Top Performers */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">🏆 Top Performers 2024</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Ananya Gupta" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <h4 className="font-bold text-lg">Ananya Gupta</h4>
            <p className="text-yellow-700 font-semibold">Class 12</p>
            <p className="text-3xl font-bold text-yellow-800 my-2">98.2%</p>
            <p className="text-sm text-gray-700">AIIMS Delhi</p>
          </div>
        </div>
      </div>
      {/* Class-wise Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Class 8 Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-bold mb-4 text-blue-600">Class 8 Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Aarav Singh</span>
              <span className="font-semibold">92%</span>
            </div>
            <div className="flex justify-between">
              <span>Ishita Verma</span>
              <span className="font-semibold">89%</span>
            </div>
            <div className="flex justify-between">
              <span>Arjun Patel</span>
              <span className="font-semibold">91%</span>
            </div>
            <div className="flex justify-between">
              <span>Sneha Jain</span>
              <span className="font-semibold">94%</span>
            </div>
            <div className="text-center pt-4 border-t">
              <span className="text-lg font-bold text-blue-600">Average: 91.5%</span>
            </div>
          </div>
        </div>
        {/* Class 10 Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-bold mb-4 text-purple-600">Class 10 Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Rohit Sharma</span>
              <span className="font-semibold">96.8%</span>
            </div>
            <div className="flex justify-between">
              <span>Priya Gupta</span>
              <span className="font-semibold">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Vikash Kumar</span>
              <span className="font-semibold">93.6%</span>
            </div>
            <div className="flex justify-between">
              <span>Meera Singh</span>
              <span className="font-semibold">95.4%</span>
            </div>
            <div className="text-center pt-4 border-t">
              <span className="text-lg font-bold text-purple-600">Average: 95.0%</span>
            </div>
          </div>
        </div>
        {/* Class 12 Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-bold mb-4 text-green-600">Class 12  Results</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Ananya Gupta</span>
              <span className="font-semibold">98.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Kavya Patel</span>
              <span className="font-semibold">97.4%</span>
            </div>
            <div className="flex justify-between">
              <span>Rahul Agarwal</span>
              <span className="font-semibold">96.8%</span>
            </div>
            <div className="flex justify-between">
              <span>Divya Sharma</span>
              <span className="font-semibold">97.6%</span>
            </div>
            <div className="text-center pt-4 border-t">
              <span className="text-lg font-bold text-green-600">Average: 97.5%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">🎓 Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student testimonial" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-lg">Ananya Gupta</h4>
                <p className="text-blue-600 font-medium">IIT Delhi - Computer Science</p>
                <p className="text-gray-700 mt-2">"Nikky Classes transformed my understanding of Mathematics and Physics. The personalized attention and innovative teaching methods helped me crack JEE with flying colors!"</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student testimonial" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-lg">Kavya Patel</h4>
                <p className="text-green-600 font-medium">AIIMS Delhi - MBBS</p>
                <p className="text-gray-700 mt-2">"Dr. Priya Singh's guidance in Biology and Chemistry was exceptional. The mock tests and doubt clearing sessions were instrumental in my NEET success!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Features Section */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Nikky Classes?</h2>
        <p className="text-xl text-gray-600">Comprehensive learning experience designed for success</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 card-hover">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Small Batch Size</h3>
          <p className="text-gray-600">Maximum 15 students per batch ensuring individual attention</p>
        </div>
        <div className="text-center p-6 card-hover">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Regular Assessment</h3>
          <p className="text-gray-600">Weekly tests and monthly evaluations to track progress</p>
        </div>
        <div className="text-center p-6 card-hover">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Study Material</h3>
          <p className="text-gray-600">Comprehensive notes and practice questions provided</p>
        </div>
        <div className="text-center p-6 card-hover">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Flexible Timing</h3>
          <p className="text-gray-600">Morning and evening batches available for convenience</p>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section */}
  <section id="contact" className="py-20 gradient-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-100">Ready to begin your journey to Nikky?</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-6">Visit Our Classes</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-100">123 Education Street, Malviya Nagar<br />Jaipur, Rajasthan 302017</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-100">+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-100">info@NikkyClasses.com<br />admissions@NikkyClasses.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Class Timings</h4>
                <p className="text-gray-100">Morning: 6:00 AM - 10:00 AM<br />Evening: 4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Free Demo Class</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter student name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter parent name" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Class</option>
                  <option>Class 8</option>
                  <option>Class 10</option>
                  <option>Class 12</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="student@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Any specific requirements or questions..." defaultValue={""} />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 pulse-glow">
              Book Free Demo Class
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nikky Classes
          </h3>
          <p className="text-gray-300 mb-4">Shaping bright futures through quality education and dedicated mentorship.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.292 1.190-.334 1.357-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="#classes" className="hover:text-white transition duration-300">Our Classes</a></li>
            <li><a href="#staff" className="hover:text-white transition duration-300">Faculty</a></li>
            <li><a href="#results" className="hover:text-white transition duration-300">Results</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Classes</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition duration-300">Class 8</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Class 10</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Class 12</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">JEE/NEET Prep</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li>📍 Malviya Nagar, Jaipur</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@NikkyClasses.com</li>
            <li>🕒 Mon-Sat: 6AM-8PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2024 Nikky Classes. All rights reserved. | Designed with ❤️ for students' success</p>
      </div>
    </div>
  </footer>
</div>

</>
  );
}

export default App;
