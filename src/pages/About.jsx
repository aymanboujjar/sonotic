import SectionTitle from '../components/SectionTitle'
import { TransText } from '../components/TransText'
import { translations } from '../data/translations'

const About = () => {
  const values = [
    {
      icon: '✓',
      key: 'quality',
    },
    {
      icon: '✓',
      key: 'reliability',
    },
    {
      icon: '✓',
      key: 'innovation',
    },
    {
      icon: '✓',
      key: 'service',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <TransText
              fr={translations.about.title.fr}
              ar={translations.about.title.ar}
              en={translations.about.title.en}
            />
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            <TransText
              fr={translations.about.subtitle.fr}
              ar={translations.about.subtitle.ar}
              en={translations.about.subtitle.en}
            />
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={<TransText fr={translations.about.historyTitle.fr} ar={translations.about.historyTitle.ar} en={translations.about.historyTitle.en} />}
            subtitle={<TransText fr={translations.about.historySubtitle.fr} ar={translations.about.historySubtitle.ar} en={translations.about.historySubtitle.en} />}
          />
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                <TransText
                  fr={translations.about.history1.fr}
                  ar={translations.about.history1.ar}
                  en={translations.about.history1.en}
                />
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <TransText
                  fr={translations.about.history2.fr}
                  ar={translations.about.history2.ar}
                  en={translations.about.history2.en}
                />
              </p>
              <p className="text-gray-700 leading-relaxed">
                <TransText
                  fr={translations.about.history3.fr}
                  ar={translations.about.history3.ar}
                  en={translations.about.history3.en}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                <TransText
                  fr={translations.about.missionTitle.fr}
                  ar={translations.about.missionTitle.ar}
                  en={translations.about.missionTitle.en}
                />
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                <TransText
                  fr={translations.about.mission.fr}
                  ar={translations.about.mission.ar}
                  en={translations.about.mission.en}
                />
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                <TransText
                  fr={translations.about.visionTitle.fr}
                  ar={translations.about.visionTitle.ar}
                  en={translations.about.visionTitle.en}
                />
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                <TransText
                  fr={translations.about.vision.fr}
                  ar={translations.about.vision.ar}
                  en={translations.about.vision.en}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SONOTIC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={<TransText fr={translations.about.valuesTitle.fr} ar={translations.about.valuesTitle.ar} en={translations.about.valuesTitle.en} />}
            subtitle={<TransText fr={translations.about.valuesSubtitle.fr} ar={translations.about.valuesSubtitle.ar} en={translations.about.valuesSubtitle.en} />}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-industrial-dark mb-3">
                  <TransText
                    fr={translations.about.values[value.key].title.fr}
                    ar={translations.about.values[value.key].title.ar}
                    en={translations.about.values[value.key].title.en}
                  />
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  <TransText
                    fr={translations.about.values[value.key].desc.fr}
                    ar={translations.about.values[value.key].desc.ar}
                    en={translations.about.values[value.key].desc.en}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morocco Focus */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              <TransText
                fr={translations.about.expertiseTitle.fr}
                ar={translations.about.expertiseTitle.ar}
                en={translations.about.expertiseTitle.en}
              />
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              <TransText
                fr={translations.about.expertise.fr}
                ar={translations.about.expertise.ar}
                en={translations.about.expertise.en}
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

