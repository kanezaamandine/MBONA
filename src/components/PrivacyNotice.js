import React, { useState } from 'react';
import { X, Shield, Eye, Lock } from 'lucide-react';

const PrivacyNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-orange-200 p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Shield className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Your Privacy Matters
            </h4>
             <p className="text-xs text-gray-600 mb-2">
              Everything on this platform is optional and private. You control what you share.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>You choose visibility</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>Secure & encrypted</span>
              </div>
              </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;


