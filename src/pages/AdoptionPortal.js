import React, { useState } from 'react';
import { Heart, Users, FileText, Shield, Clock, Star, Search } from 'lucide-react';


const AdoptionPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');

  
  const children = [
    {
      id: 1,
      name: 'Kaneza',
      age: 8,
      gender: 'female',
      location: 'Kigali',
      description: 'Kaneza is a bright and curious child who loves reading and drawing. She has been in our care for 2 years and is ready for a loving family.',
      needs: ['Educational support', 'Emotional care'],
      image: '/photo.png'
    },
    {
      id: 2,
      name: 'David',
      age: 12,
      gender: 'male',
      location: 'Butare',
      description: 'David is an active boy who enjoys sports and helping others. He has shown great leadership qualities and is looking for a family who can nurture his potential.',
      needs: ['Mentorship', 'Educational support'],
      image: '/photo.png'
    },
    {
      id: 3,
      name: 'Arlene',
      age: 6,
      gender: 'female',
      location: 'Gisenyi',
      description: 'Arlene is a gentle and caring child who loves animals and nature. She would thrive in a family that enjoys outdoor activities.',
      needs: ['Stable home environment', 'Pet-friendly family'],
      image: '/photo.png'
    }
  ];

  const filteredChildren = children.filter(child => {
    const matchesSearch = child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         child.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAge = ageFilter === 'all' || 
                      (ageFilter === '0-5' && child.age <= 5) ||
                      (ageFilter === '6-10' && child.age >= 6 && child.age <= 10) ||
                      (ageFilter === '11-15' && child.age >= 11 && child.age <= 15);
    const matchesGender = genderFilter === 'all' || child.gender === genderFilter;
    
    return matchesSearch && matchesAge && matchesGender;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Adopt or Foster a Child
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every child deserves a loving family. Browse profiles of children waiting for their forever home, 
              and begin your journey to becoming a parent.
            </p>
            <div className="privacy-notice max-w-2xl mx-auto">
              <p className="text-sm text-orange-800">
                <Shield className="w-4 h-4 inline mr-2" />
                All information is shared with consent and privacy protection. Children's safety is our top priority.
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            
            <div className="flex gap-4">
              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="form-input w-32"
              >
                <option value="all">All Ages</option>
                <option value="0-5">0-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
              </select>

              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="form-input w-32"
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Children Waiting for Families
            </h2>
            <p className="text-gray-600">
              {filteredChildren.length} child{filteredChildren.length !== 1 ? 'ren' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChildren.map((child) => (
              <div key={child.id} className="card hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  {child.image ? (
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <Heart className="w-16 h-16 text-orange-400" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{child.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {child.age} years old • {child.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {child.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Special Needs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {child.needs.map((need, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                        >
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="btn btn-primary w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Learn More & Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredChildren.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No children found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later.</p>
            </div>
          )}
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How the Adoption Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures the best match between children and families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Complete our comprehensive application form with your family information and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Study</h3>
              <p className="text-gray-600">
                Our trained social workers will visit your home to ensure a safe and loving environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Matching & Placement</h3>
              <p className="text-gray-600">
                We'll help you find the perfect match and support you through the placement process.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support for Adoptive Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide ongoing support to help your family thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Legal Guidance</h3>
              <p className="text-sm text-gray-600">Complete legal support throughout the adoption process.</p>
            </div>

            <div className="card text-center">
              <Heart className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Counseling</h3>
              <p className="text-sm text-gray-600">Professional counseling for both parents and children.</p>
            </div>

            <div className="card text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Groups</h3>
              <p className="text-sm text-gray-600">Connect with other adoptive families in your area.</p>
            </div>

            <div className="card text-center">
              <Star className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
              <p className="text-sm text-gray-600">Educational resources and training for adoptive parents.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionPortal;

