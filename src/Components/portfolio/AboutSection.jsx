import React, { useState } from 'react';
import { Calendar, MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function AboutSection({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Personal Details Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-amber-100 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Birthday</p>
                    <p className="font-medium text-gray-900">{data.birthday}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Marital Status</p>
                    <p className="font-medium text-gray-900">{data.marital}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{data.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${data.email}`} className="font-medium text-amber-600 hover:text-amber-700 break-all">
                      {data.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${data.phone}`} className="font-medium text-amber-600 hover:text-amber-700">
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="lg:col-span-2">
            <div className={`${!expanded ? 'line-clamp-12' : ''}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-5">
                About Me
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {data.bio}
              </p>

              <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Core Skills:</h4>
              <div className="space-y-3">
                {data.coreSkills?.map((skill, index) => (
                  <div key={index}>
                    <h5 className="font-bold text-amber-600 mb-2">{skill.category}</h5>
                    <p className="text-gray-700">{skill.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="mt-6 text-amber-600 hover:text-amber-700 font-medium text-lg hover:underline"
              >
                View more →
              </button>
            )}
          </div>
        </div>
      </div>
    </section >
  );
}