
import { Button } from '@/components/ui/button';
import { Heart, Users, Target } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-black">
                The Story Behind
                <span className="text-black block">VOIN</span>
              </h2>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p className="text-xl leading-relaxed">
                  VOIN was born from a simple belief: <strong>fashion should be a language of emotion.</strong> 
                  Every design we create tells a story, captures a mood, and gives voice to feelings 
                  that words sometimes cannot express.
                </p>
                
                <p className="leading-relaxed">
                  Our journey began in 2020 when a group of passionate designers and dreamers 
                  came together with a shared vision - to create T-shirts that don't just look good, 
                  but make you <em>feel</em> something. We believe that what you wear should reflect 
                  who you are and inspire who you want to become.
                </p>
                
                <p className="leading-relaxed">
                  Today, VOIN stands for authenticity, quality, and the courage to be different. 
                  We're not just making T-shirts; we're crafting canvases for self-expression.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Heart className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-grotesk font-bold text-black mb-2">Passion</h4>
                <p className="text-sm text-gray-600">Every design is crafted with love</p>
              </div>
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-grotesk font-bold text-black mb-2">Community</h4>
                <p className="text-sm text-gray-600">Building a family of bold individuals</p>
              </div>
              <div className="text-center p-4">
                <Target className="w-8 h-8 text-black mx-auto mb-3" />
                <h4 className="font-grotesk font-bold text-black mb-2">Purpose</h4>
                <p className="text-sm text-gray-600">Fashion with meaning and impact</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold rounded-full px-8"
              >
                Our Mission
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white font-semibold rounded-full px-8"
              >
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="space-y-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.kaft.com/static/images/content/banner/1746433654165.jpg"
                  alt="VOIN team workspace"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="font-grotesk text-3xl font-bold text-black">3+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-black rounded-2xl p-6 shadow-xl text-white">
                <div className="text-center">
                  <div className="font-grotesk text-3xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Fashion fades, but style is eternal. At VOIN, we create pieces that transcend trends 
                and become part of your personal story."
              </blockquote>
              <cite className="font-grotesk font-bold text-black">
                — VOIN Founders
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
