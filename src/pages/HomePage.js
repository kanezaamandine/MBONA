import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Search, Shield, ArrowRight, Star, Clock, Globe } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Rebuilding Families,
              <br />
              <span className="text-orange-600">Restoring Hope</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A digital bridge connecting families, healing trauma, and restoring identity in Rwanda. 
              Where a child finds a parent, a survivor finds a sibling, and anyone can find their lost family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/adoption"
                className="btn btn-primary text-lg px-8 py-4 inline-flex items-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Adopt or Foster a Child
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/survivor-reconnection"
                className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Find Lost Family
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Intertwined Missions
            </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform serves family-based adoption, genocide survivor reconnection, and general missing relatives search, 
                creating a comprehensive support system for healing and restoration.
              </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Family-Based Adoption</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Connect orphaned children with loving families through our secure, 
                trauma-informed adoption portal. Partner with local orphanages and 
                community-based care models.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Child profiles with privacy-respecting details
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Application forms for families
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Legal guidance and emotional support
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Partner organization verification
                </li>
              </ul>
              <Link
                to="/adoption"
                className="btn btn-primary inline-flex items-center"
              >
                Explore Adoption
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            
            <div className="card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Search className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Survivor Reconnection</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A safe space for genocide survivors to post memories, names, photos, 
                or fragments of identity. AI-assisted matching helps identify potential family links.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Memory Wall for sharing stories
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  AI-assisted family matching
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Optional photo and document uploads
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-orange-500 mr-3" />
                  Verified contact system
                </li>
              </ul>
              <Link
                to="/survivor-reconnection"
                className="btn btn-secondary inline-flex items-center"
              >
                Find Lost Family
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

          
            <div className="card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Missing Relatives Search</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A comprehensive search platform for anyone looking for lost family members, 
                regardless of the circumstances. Open to all who need to reconnect with loved ones.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-blue-500 mr-3" />
                  Open to everyone, not just genocide survivors
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-blue-500 mr-3" />
                  Search by any year or circumstance
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-blue-500 mr-3" />
                  Support for migration-related searches
                </li>
                <li className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-blue-500 mr-3" />
                  Privacy-respecting and trauma-informed
                </li>
              </ul>
              <Link
                to="/survivor-reconnection"
                className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center"
              >
                Search for Family
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed with Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with trauma sensitivity, privacy, and accessibility in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trauma-Informed</h3>
              <p className="text-gray-600 text-sm">
                Everything is optional, private, and designed to avoid re-triggering trauma.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offline Mode</h3>
              <p className="text-gray-600 text-sm">
                Draft posts and view saved profiles even without internet connection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Notes</h3>
              <p className="text-gray-600 text-sm">
                Record voice messages for those who prefer speaking over typing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Access to counseling, legal aid, and community stories of hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt a child or reconnect with lost family, 
            we're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/adoption"
              className="btn bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4"
            >
              Start Adoption Process
            </Link>
            <Link
              to="/survivor-reconnection"
              className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
            >
              Search for Family
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

