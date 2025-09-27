import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-blue-800 to-indigo-700">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Justin Wang
          </h1>
          <div className="flex justify-center mb-6">
            <Image
              src="/IMG_5376.JPG"
              alt="Justin Wang"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-2xl"
            />
          </div>
          <div className="flex justify-center items-center space-x-8 text-xl text-blue-100">
            <span className="bg-navy-800 px-6 py-2 rounded-full">17 (Senior)</span>
            <span className="bg-navy-800 px-6 py-2 rounded-full">New Jersey</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Academics Section */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Academic Excellence</h2>
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-white">3.92</div>
                    <div className="text-emerald-100">GPA</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white">5.56</div>
                    <div className="text-emerald-100">Unweighted</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">AP Test Scores</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/90 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-600">5</div>
                    <div className="text-sm text-gray-700">Calculus AB</div>
                  </div>
                  <div className="bg-white/90 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-600">5</div>
                    <div className="text-sm text-gray-700">APUSH</div>
                  </div>
                  <div className="bg-white/90 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-600">5</div>
                    <div className="text-sm text-gray-700">AP World</div>
                  </div>
                  <div className="bg-white/90 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-emerald-600">5</div>
                    <div className="text-sm text-gray-700">AP Lang</div>
                  </div>
                  <div className="bg-white/90 rounded-xl p-4 text-center col-span-2">
                    <div className="text-3xl font-bold text-blue-600">4</div>
                    <div className="text-sm text-gray-700">Sci A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Skills & Interests</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">Programming</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">Mathematics</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">Problem Solving</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">Critical Thinking</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Hobbies & Activities</h3>
                <div className="grid grid-cols-2 gap-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">🏀 Basketball</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">🏓 Pickleball</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">🎮 Gaming</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium">🏓 Ping Pong</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-center font-medium col-span-2">💭 Philosophy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Goals */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">🏆 Achievements</h3>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">High GPA</div>
                <div className="text-orange-100 text-sm">3.92 GPA</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">AP Excellence</div>
                <div className="text-orange-100 text-sm">Multiple 5s</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">🎯 Goals</h3>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">College Prep</div>
                <div className="text-cyan-100 text-sm">Senior Year</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">STEM Focus</div>
                <div className="text-cyan-100 text-sm">Math & Science</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">🌟 Personality</h3>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">Analytical</div>
                <div className="text-green-100 text-sm">Math & Logic</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-white font-semibold">Active</div>
                <div className="text-green-100 text-sm">Sports & Games</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy-800 to-blue-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for the Future</h3>
            <p className="text-blue-100 text-lg">
              A dedicated student with a passion for learning, sports, and intellectual pursuits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
