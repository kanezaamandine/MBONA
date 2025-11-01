const ChildCard = ({ child }) => (
  <div className="card hover:shadow-xl transition-all duration-300">
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
      <p className="text-gray-600 text-sm leading-relaxed">{child.description}</p>
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Special Needs:</h4>
        <div className="flex flex-wrap gap-2">
          {child.needs.map((need, index) => (
            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
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
);
