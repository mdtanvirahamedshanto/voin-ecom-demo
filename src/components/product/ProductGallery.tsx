
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden group">
        <img
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              size="icon"
              variant="secondary"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </>
        )}

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 hover:bg-white">
            <Expand className="w-4 h-4" />
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              className={`aspect-square bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${
                selectedImage === index
                  ? 'ring-2 ring-voin-red ring-offset-2'
                  : 'hover:opacity-80'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
