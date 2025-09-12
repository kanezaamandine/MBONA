import React, { useState } from 'react';
import { Heart, Shield, Users, Phone, Mail, MapPin, Clock, FileText, Star, Search } from 'lucide-react';

const SupportResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Trauma Counseling Services',
      category: 'counseling',
      description: 'Professional counseling services available 24/7 for survivors and families.',
      contact: '+250 788 123 456',
      email: 'counseling@mbona.rw',
      location: 'Kigali, Butare, Gisenyi',
      hours: '24/7',
      verified: true,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Legal Aid Center',
      category: 'legal',
      description: 'Free legal assistance for adoption processes and family reunification.',
      contact: '+250 788 234 567',
      email: 'legal@mbona.rw',
      location: 'Kigali',
      hours: 'Mon-Fri 8AM-5PM',
      verified: true,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Ibuka Survivors Foundation',
      category: 'organization',
      description: 'Supporting genocide survivors with counseling, education, and community programs.',
      contact: '+250 788 345 678',
      email: 'info@ibuka.rw',
      location: 'Kigali, Butare, Gikongoro',
      hours: 'Mon-Fri 8AM-6PM',
      verified: true,
      rating: 4.7
    },
    {
      id: 4,
      title: 'SEVOTA Women & Children Support',
      category: 'organization',
      description: 'Supporting women and children affected by trauma with counseling and education.',
      contact: '+250 788 456 789',
      email: 'contact@sevota.rw',
      location: 'Kigali, Butare',
      hours: 'Mon-Fri 9AM-5PM',
      verified: true,
      rating: 4.6
    },
    {
      id: 5,
      title: 'Family Reunification Support Group',
      category: 'support',
      description: 'Weekly support group for families going through the reunification process.',
      contact: '+250 788 567 890',
      email: 'support@mbona.rw',
      location: 'Kigali',
      hours: 'Saturdays 2PM-4PM',
      verified: true,
      rating: 4.9
    },
    {
      id: 6,
      title: 'Emergency Crisis Line',
      category: 'crisis',
      description: '24/7 crisis support for immediate emotional and psychological assistance.',
      contact: '+250 788 678 901',
      email: 'crisis@mbona.rw',
      location: 'Nationwide',
      hours: '24/7',
      verified: true,
      rating: 5.0
    }
  ];

  const categories = [
    { value: 'all', label: 'All Resources', icon: Users },
    { value: 'counseling', label: 'Counseling', icon: Heart },
    { value: 'legal', label: 'Legal Aid', icon: FileText },
    { value: 'organization', label: 'Organizations', icon: Shield },
    { value: 'support', label: 'Support Groups', icon: Users },
    { value: 'crisis', label: 'Crisis Support', icon: Phone }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Support Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access professional counseling, legal aid, support groups, and community resources. 
              You don't have to go through this journey alone.
            </p>
            <div className="privacy-notice max-w-2xl mx-auto">
              <p className="text-sm text-orange-800">
                <Shield className="w-4 h-4 inline mr-2" />
                All services are confidential and designed to support your healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for support services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category.value
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-orange-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available Resources
            </h2>
            <p className="text-gray-600">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {resource.title}
                      {resource.verified && (
                        <Shield className="w-4 h-4 text-green-500 inline ml-2" />
                      )}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(resource.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {resource.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{resource.contact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{resource.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{resource.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    <span>{resource.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <button className="btn btn-primary w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Contact This Resource
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or contact us for personalized assistance.</p>
            </div>
          )}
        </div>
      </section>

      
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you're in crisis or need immediate support, these resources are available 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-red-100 border-red-200">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Crisis Hotline</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Immediate emotional and psychological support available 24/7.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-2">+250 788 678 901</div>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>

            <div className="card bg-orange-100 border-orange-200">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Trauma Counseling</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Professional trauma-informed counseling services.
              </p>
              <div className="text-2xl font-bold text-orange-600 mb-2">+250 788 123 456</div>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>

            <div className="card bg-blue-100 border-blue-200">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Legal Emergency</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Emergency legal assistance for urgent situations.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-2">+250 788 234 567</div>
              <p className="text-sm text-gray-600">Mon-Fri 8AM-5PM</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Self-Care Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take care of yourself with these helpful resources and activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <Heart className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Breathing Exercises</h3>
              <p className="text-sm text-gray-600">Guided breathing techniques for stress relief and calm.</p>
            </div>

            <div className="card text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Groups</h3>
              <p className="text-sm text-gray-600">Connect with others who understand your journey.</p>
            </div>

            <div className="card text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Journaling</h3>
              <p className="text-sm text-gray-600">Express your thoughts and feelings safely.</p>
            </div>

            <div className="card text-center">
              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Safety Planning</h3>
              <p className="text-sm text-gray-600">Create a plan for when you need extra support.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Get Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Taking the first step to get support can be difficult. Here's how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reach Out</h3>
              <p className="text-gray-600">
                Contact any of the resources listed above. All conversations are confidential and judgment-free.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Connected</h3>
              <p className="text-gray-600">
                We'll connect you with the right professional or support group for your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Begin Healing</h3>
              <p className="text-gray-600">
                Start your journey toward healing with professional support and community care.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You're Not Alone
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you need immediate support or ongoing care, we're here to help you through this journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+250788678901"
              className="btn bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Crisis Line
            </a>
            <a
              href="mailto:support@mbona.rw"
              className="btn border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportResources;
