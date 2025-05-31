
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ShopByMood = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = [
    {
      id: 'bold',
      name: 'Bold',
      description: 'Make a statement',
      color: 'bg-gradient-to-br from-red-500 to-orange-500',
      textColor: 'text-white',
      icon: '⚡',
      count: 12
    },
    {
      id: 'calm',
      name: 'Calm',
      description: 'Find your peace',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-400',
      textColor: 'text-white',
      icon: '🌊',
      count: 8
    },
    {
      id: 'rebel',
      name: 'Rebel',
      description: 'Break the rules',
      color: 'bg-gradient-to-br from-purple-600 to-pink-600',
      textColor: 'text-white',
      icon: '🔥',
      count: 6
    },
    {
      id: 'lover',
      name: 'Lover',
      description: 'Spread the love',
      color: 'bg-gradient-to-br from-pink-400 to-rose-400',
      textColor: 'text-white',
      icon: '💖',
      count: 10
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Express yourself',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-400',
      textColor: 'text-white',
      icon: '🎨',
      count: 7
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Less is more',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
      textColor: 'text-white',
      icon: '⚪',
      count: 9
    }
  ];

  const handleMoodClick = (moodId: string) => {
    setSelectedMood(selectedMood === moodId ? '' : moodId);
  };

  return (
    <section className="py-20 bg-voin-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-voin-black mb-4">
            Shop by Mood
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every mood deserves the perfect T-shirt. Find yours and express what words cannot.
          </p>
        </div>

        {/* Mood Cards - Horizontal Scroll */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max min-w-full">
            {moods.map((mood) => (
              <div
                key={mood.id}
                className={`relative flex-shrink-0 w-64 h-80 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  selectedMood === mood.id ? 'ring-4 ring-voin-red ring-offset-4' : ''
                }`}
                onClick={() => handleMoodClick(mood.id)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${mood.color}`}></div>
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Top Content */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">{mood.icon}</div>
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">
                      {mood.count} designs
                    </Badge>
                  </div>

                  {/* Bottom Content */}
                  <div className="text-center">
                    <h3 className={`font-grotesk text-3xl font-bold mb-2 ${mood.textColor}`}>
                      {mood.name}
                    </h3>
                    <p className={`text-lg opacity-90 mb-6 ${mood.textColor}`}>
                      {mood.description}
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-white/90 text-gray-900 hover:bg-white font-semibold rounded-full px-6"
                    >
                      Explore
                    </Button>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedMood === mood.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-voin-red rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Mood Action */}
        {selectedMood && (
          <div className="text-center mt-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-voin-red hover:bg-voin-red/90 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Shop {moods.find(m => m.id === selectedMood)?.name} Collection
            </Button>
          </div>
        )}

        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-center mt-8">
          <p className="text-sm text-gray-500">← Swipe to explore all moods →</p>
        </div>
      </div>
    </section>
  );
};

export default ShopByMood;
