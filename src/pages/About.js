
import React from 'react';
import { Heart, Users, Shield, Star,  Globe, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Mbona
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We believe that every child deserves a family, and every survivor deserves to reconnect 
              with their lost loved ones. Our platform is built on the foundation of hope, healing, and human connection.
            </p>
            <div className="privacy-notice max-w-2xl mx-auto">
              <p className="text-sm text-orange-800">
                <Shield className="w-4 h-4 inline mr-2" />
                Founded on principles of trauma-informed care, privacy, and dignity for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To create a digital sanctuary where families can be reunited, children can find loving homes, 
                and survivors can share their stories in a safe, trauma-informed environment. We believe that 
                technology can be a force for healing and human connection.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform serves three intertwined missions: connecting orphaned children with loving families, 
                helping genocide survivors reconnect with lost family members, and providing a safe space for anyone 
                searching for missing relatives through shared memories and AI-assisted matching.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Rwanda where no child grows up without a family, where no survivor has to search alone, 
                and where technology serves as a bridge to healing and restoration rather than a barrier.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where the wounds of the past can begin to heal through the power of 
                human connection, supported by compassionate technology and community care.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our launch, we've been humbled by the stories of hope and healing that have emerged from our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Families Reunited</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Children Placed</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600 font-medium">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Trauma-Informed Care</h3>
              <p className="text-gray-600 text-sm">
                Every feature is designed with sensitivity to trauma, ensuring users feel safe and in control.
              </p>
            </div>

            <div className="card text-center">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dignity & Respect</h3>
              <p className="text-gray-600 text-sm">
                We treat every user with the dignity and respect they deserve, regardless of their circumstances.
              </p>
            </div>

            <div className="card text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community-Centered</h3>
              <p className="text-gray-600 text-sm">
                Our platform is built by and for the community, ensuring it meets real needs and values.
              </p>
            </div>

            <div className="card text-center">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600 text-sm">
                User privacy and data protection are fundamental to our platform's design and operation.
              </p>
            </div>

            <div className="card text-center">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hope & Healing</h3>
              <p className="text-gray-600 text-sm">
                We believe in the power of hope and the possibility of healing through human connection.
              </p>
            </div>

            <div className="card text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in everything we do, from technology to user experience to support.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, searching for family, or want to support our work, 
            there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/adoption"
              className="btn bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4"
            >
              Start Your Journey
            </a>
            <a
              href="/support"
              className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
            >
              Get Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
