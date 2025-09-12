import React, { useState } from 'react';
import { Search, Heart, Users, FileText, Shield, Clock, MapPin, Camera, Mic, Upload } from 'lucide-react';

const SurvivorReconnection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPostForm, setShowPostForm] = useState(false);


  const memories = [
    {
      id: 1,
      name: 'Jean Baptiste',
      age: 45,
      location: 'Kigali',
      year: 1994,
      category: 'seeking',
      description: 'Looking for my sister Marie who was 8 years old in 1994. We were separated in Nyamata. She had a small scar on her left hand.',
      memories: ['We lived near the church', 'She loved to sing', 'Our father was a teacher'],
      contact: 'jb@example.com',
      datePosted: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Claudine',
      age: 38,
      location: 'Butare',
      year: 1994,
      category: 'found',
      description: 'Found my brother after 30 years! We were reunited through this platform. Thank you to everyone who helped.',
      memories: ['Our family home in Gikongoro', 'We used to play hide and seek', 'Our mother made the best isombe'],
      contact: 'claudine@example.com',
      datePosted: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Anonymous',
      age: 42,
      location: 'Gisenyi',
      year: 1994,
      category: 'seeking',
      description: 'Looking for any information about my parents. I was 6 years old and taken to an orphanage. I remember our house had a red roof.',
      memories: ['Red roof house', 'Near a big tree', 'I had a toy car'],
      contact: 'anonymous@example.com',
      datePosted: '2024-01-08',
      verified: false
    },
    {
      id: 4,
      name: 'Sarah Mukamana',
      age: 28,
      location: 'Kigali',
      year: 2010,
      category: 'general',
      description: 'Looking for my father who went to work in Uganda in 2010 and never returned. His name is Emmanuel Nkurunziza. He was working as a teacher.',
      memories: ['He taught at a primary school', 'He loved reading books', 'He had a motorcycle'],
      contact: 'sarah.m@example.com',
      datePosted: '2024-01-20',
      verified: true
    },
    {
      id: 5,
      name: 'Peter',
      age: 35,
      location: 'Musanze',
      year: 2015,
      category: 'general',
      description: 'My brother disappeared during a business trip to Kenya in 2015. His name is John Uwimana. He was a trader and was supposed to return after 2 weeks.',
      memories: ['He was selling electronics', 'He had a shop in Musanze', 'He was married with 2 children'],
      contact: 'peter.u@example.com',
      datePosted: '2024-01-18',
      verified: true
    },
    {
      id: 6,
      name: 'Grace',
      age: 22,
      location: 'Huye',
      year: 2018,
      category: 'general',
      description: 'Looking for my mother who left for South Africa for work and we lost contact. Her name is Immaculée Mukamana. She was working as a domestic worker.',
      memories: ['She used to call every Sunday', 'She sent money for school fees', 'She had a friend named Agnes'],
      contact: 'grace.m@example.com',
      datePosted: '2024-01-12',
      verified: false
    }
  ];

  const filteredMemories = memories.filter(memory => {
    const matchesSearch = memory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.memories.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || memory.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All Posts', icon: Users },
    { value: 'seeking', label: 'Seeking Family', icon: Search },
    { value: 'general', label: 'Missing Relatives', icon: Users },
    { value: 'found', label: 'Reunited Stories', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Lost Family
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A safe space for everyone to share memories, search for lost family members, 
              and celebrate reunions. Whether you're a genocide survivor or looking for any missing relative, 
              every memory matters, every connection counts.
            </p>
            <div className="privacy-notice max-w-2xl mx-auto">
              <p className="text-sm text-orange-800">
                <Shield className="w-4 h-4 inline mr-2" />
                Everything is optional and private. You control what you share and who can see it.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, location, or memories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            
            <div className="flex gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

          
          <div className="text-center">
            <button
              onClick={() => setShowPostForm(!showPostForm)}
              className="btn btn-primary"
            >
              <FileText className="w-4 h-4 mr-2" />
              Share Your Memory
            </button>
          </div>
        </div>
      </section>

      
      {showPostForm && (
        <section className="py-8 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Memory</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Your Name (Optional)</label>
                    <input
                      type="text"
                      className="form-input optional-field"
                      placeholder="You can remain anonymous"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Age (Optional)</label>
                    <input
                      type="number"
                      className="form-input optional-field"
                      placeholder="e.g., 28"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Type of Search (Optional)</label>
                  <select className="form-input optional-field">
                    <option value="">Select type of search</option>
                    <option value="genocide-survivor">Genocide Survivor (1994)</option>
                    <option value="missing-relative">Missing Relative (Any Year)</option>
                    <option value="lost-contact">Lost Contact</option>
                    <option value="adoption-search">Adoption Search</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Location/Village (Optional)</label>
                  <input
                    type="text"
                    className="form-input optional-field"
                    placeholder="e.g., Nyamata, Gikongoro"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">What do you remember? (Optional)</label>
                  <textarea
                    className="form-input form-textarea optional-field"
                    placeholder="Share any memories about your family, home, or the person you're looking for..."
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Details (Optional)</label>
                  <textarea
                    className="form-input form-textarea optional-field"
                    placeholder="Names, physical descriptions, special memories, or any identifying information..."
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Information (Optional)</label>
                  <input
                    type="email"
                    className="form-input optional-field"
                    placeholder="How can people reach you if they have information?"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button type="button" className="btn btn-secondary">
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photo
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <Mic className="w-4 h-4 mr-2" />
                    Voice Note
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </button>
                </div>

                <div className="privacy-notice">
                  <p className="text-sm text-orange-800">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Your information will only be shared with people you choose. You can edit or delete your post at any time.
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowPostForm(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Share Memory
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Memory Wall
            </h2>
            <p className="text-gray-600">
              {filteredMemories.length} memor{filteredMemories.length !== 1 ? 'ies' : 'y'} found
            </p>
          </div>

          <div className="space-y-6">
            {filteredMemories.map((memory) => (
              <div key={memory.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {memory.name}
                      {memory.verified && (
                        <Shield className="w-5 h-5 text-green-500 inline ml-2" />
                      )}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {memory.age} years old in {memory.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {memory.location}
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          memory.category === 'seeking' 
                            ? 'bg-orange-100 text-orange-800' 
                            : memory.category === 'general'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {memory.category === 'seeking' ? 'Genocide Survivor' : 
                           memory.category === 'general' ? 'Missing Relative' : 'Reunited'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{memory.datePosted}</span>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {memory.description}
                </p>

                {memory.memories && memory.memories.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Memories:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {memory.memories.map((mem, index) => (
                        <li key={index} className="text-sm">{mem}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {memory.contact && (
                  <div className="pt-4 border-t">
                    <button className="btn btn-primary">
                      <Heart className="w-4 h-4 mr-2" />
                      Contact {memory.name}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredMemories.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No memories found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or be the first to share a memory.</p>
            </div>
          )}
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everyone is Welcome
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is open to everyone looking for lost family members, regardless of the circumstances. 
              Whether you're a genocide survivor, looking for a missing relative, or searching for someone you lost contact with, 
              we're here to help you reconnect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Genocide Survivors</h3>
              <p className="text-gray-600 text-sm">
                For those who lost family during the 1994 genocide against the Tutsi. 
                Share memories and search for lost loved ones.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Missing Relatives</h3>
              <p className="text-gray-600 text-sm">
                For anyone looking for family members who went missing for any reason. 
                No matter the year or circumstances.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lost Contact</h3>
              <p className="text-gray-600 text-sm">
                For those who lost contact with family due to migration, work, or other circumstances. 
                Reconnect with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stories of Hope and Reunion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are just a few of the many families who have been reunited through our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marie & Jean</h3>
              <p className="text-gray-600 text-sm">
                "After 30 years of searching, we found each other through this platform. 
                Thank you for giving us hope when we had none."
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                Genocide Survivors
              </span>
            </div>

            <div className="card text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah & Her Father</h3>
              <p className="text-gray-600 text-sm">
                "My father went to work in Uganda and never returned. After 14 years, 
                we found him through this platform. He's now back home with us."
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Missing Relative
              </span>
            </div>

            <div className="card text-center">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Grace & Her Mother</h3>
              <p className="text-gray-600 text-sm">
                "My mother went to work in South Africa and we lost contact. 
                This platform helped us reconnect after 6 years apart."
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Lost Contact
              </span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support and Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that this journey can be emotional. We're here to support you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Trauma Counseling</h3>
              <p className="text-sm text-gray-600">Professional counseling services available 24/7.</p>
            </div>

            <div className="card text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Legal Support</h3>
              <p className="text-sm text-gray-600">Help with documentation and legal processes.</p>
            </div>

            <div className="card text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support Groups</h3>
              <p className="text-sm text-gray-600">Connect with others on similar journeys.</p>
            </div>

            <div className="card text-center">
              <Heart className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600">A safe space to share and heal together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurvivorReconnection;

