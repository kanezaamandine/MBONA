import React, { useState } from 'react';
import { Heart, Shield, Users, Phone, Mail, MapPin, Clock, FileText, Star, Search } from 'lucide-react';

const SupportResources = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const resourcesList = [
    {
      id: 1,
      title: 'Trauma Counseling Services',
      category: 'counseling',
      description: 'Professional counseling services available 24/7 for survivors and families.',
      phone: '+250 788 123 456',
      email: 'counseling@mbona.rw',
      location: 'Kigali, Butare, Gisenyi',
      hours: '24/7',
      verified: true,
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Legal Aid Center',
      category: 'legal',
      description: 'Free legal assistance for adoption processes and family reunification.',
      phone: '+250 788 234 567',
      email: 'legal@mbona.rw',
      location: 'Kigali',
      hours: 'Mon-Fri 8AM-5PM',
      verified: true,
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Ibuka Survivors Foundation',
      category: 'organization',
      description: 'Supporting genocide survivors with counseling, education, and community programs.',
      phone: '+250 788 345 678',
      email: 'info@ibuka.rw',
      location: 'Kigali, Butare, Gikongoro',
      hours: 'Mon-Fri 8AM-6PM',
      verified: true,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'SEVOTA Women & Children Support',
      category: 'organization',
      description: 'Supporting women and children affected by trauma with counseling and education.',
      phone: '+250 788 456 789',
      email: 'contact@sevota.rw',
      location: 'Kigali, Butare',
      hours: 'Mon-Fri 9AM-5PM',
      verified: true,
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Family Reunification Support Group',
      category: 'support',
      description: 'Weekly support group for families going through the reunification process.',
      phone: '+250 788 567 890',
      email: 'support@mbona.rw',
      location: 'Kigali',
      hours: 'Saturdays 2PM-4PM',
      verified: true,
      rating: 4.9,
    },
    {
      id: 6,
      title: 'Emergency Crisis Line',
      category: 'crisis',
      description: '24/7 crisis support for immediate emotional and psychological assistance.',
      phone: '+250 788 678 901',
      email: 'crisis@mbona.rw',
      location: 'Nationwide',
      hours: '24/7',
      verified: true,
      rating: 5.0,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Resources', icon: Users },
    { value: 'counseling', label: 'Counseling', icon: Heart },
    { value: 'legal', label: 'Legal Aid', icon: FileText },
    { value: 'organization', label: 'Organizations', icon: Shield },
    { value: 'support', label: 'Support Groups', icon: Users },
    { value: 'crisis', label: 'Crisis Support', icon: Phone },
  ];

  const filteredResources = resourcesList.filter((res) => {
    const matchesQuery =
      res.title.toLowerCase().includes(query.toLowerCase()) ||
      res.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'all' || res.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  const renderStars = (rating) =>
    [...Array(5)].map((_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${idx < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Resources</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access professional counseling, legal aid, support groups, and community resources. You
            don't have to go through this journey alone.
          </p>
          <p className="text-sm text-orange-800 flex justify-center items-center gap-1">
            <Shield className="w-4 h-4" /> All services are confidential and designed to support
            your healing journey.
          </p>
        </div>
      </section>

      {/* Search and Category Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for support services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-input pl-10 w-full"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat.value
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Resources</h2>
            <p className="text-gray-600">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div key={res.id} className="card hover:shadow-xl transition-all duration-300 p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {res.title} {res.verified && <Shield className="w-4 h-4 text-green-500 inline ml-2" />}
                  </h3>
                  <div className="flex items-center space-x-1">{renderStars(res.rating)}</div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{res.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-orange-500" /> {res.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4 text-orange-500" /> {res.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-orange-500" /> {res.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" /> {res.hours}
                  </div>
                </div>

                <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" /> Contact This Resource
                </button>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or contact us for personalized assistance.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupportResources;
