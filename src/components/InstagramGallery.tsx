
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramGallery = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dim_31470_800_800.jpg?cacheID=1744362691000",
      username: "@bold_statement",
      likes: 234
    },
    {
      id: 2,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_applien_31175_800_800.jpg?cacheID=1744314129000",
      username: "@calm_vibes",
      likes: 189
    },
    {
      id: 3,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_dailypractice_31507_800_800.jpg?cacheID=1744312291000",
      username: "@rebel_soul",
      likes: 312
    },
    {
      id: 4,
      image: "http://cdn.kaft.com/static/images/cache/800/tisort_plania_31187_800_800.jpg?cacheID=1744314129000",
      username: "@love_express",
      likes: 276
    },
    {
      id: 5,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_zzz_31181_800_800.jpg?cacheID=1744314129000",
      username: "@urban_bold",
      likes: 198
    },
    {
      id: 6,
      image: "https://cdn.kaft.com/static/images/cache/800/tisort_monosansu_31338_800_800.jpg?cacheID=1741790752000",
      username: "@zen_master",
      likes: 345
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-black" />
            <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-black">
              #VOINVibes
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See how our community rocks VOIN. Tag us @voin.bd and get featured!
          </p>
          <Button
            className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @voin.bd
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={`Instagram post by ${post.username}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <Instagram className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold text-sm">{post.username}</p>
                  <p className="text-xs opacity-90">❤️ {post.likes}</p>
                </div>
              </div>

              {/* Corner Tag */}
              <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                VOIN
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
            Get Featured on Our Page!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Share your VOIN moment and inspire others. Use #VOINVibes and tag @voin.bd in your post.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold rounded-full px-8"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Post Your VOIN Look
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black font-semibold rounded-full px-8"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
