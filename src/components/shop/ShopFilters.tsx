
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface ShopFiltersProps {
  filters: {
    size: string;
    color: string;
    mood: string;
    priceRange: number[];
  };
  onFiltersChange: (filters: any) => void;
}

const ShopFilters = ({ filters, onFiltersChange }: ShopFiltersProps) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Red', value: '#FF3B3B' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Gray', value: '#6B7280' }
  ];
  const moods = ['Bold', 'Calm', 'Rebel', 'Lover'];

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      size: '',
      color: '',
      mood: '',
      priceRange: [0, 5000]
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const hasActiveFilters = localFilters.size || localFilters.color || localFilters.mood || 
    localFilters.priceRange[0] > 0 || localFilters.priceRange[1] < 5000;

  return (
    <div className="space-y-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-grotesk text-2xl font-bold text-voin-black">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearAllFilters}
            className="text-voin-red border-voin-red hover:bg-voin-red hover:text-white"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700">Active Filters:</p>
          <div className="flex flex-wrap gap-2">
            {localFilters.size && (
              <Badge variant="secondary" className="gap-1">
                Size: {localFilters.size}
                <X className="w-3 h-3 cursor-pointer" onClick={() => updateFilter('size', '')} />
              </Badge>
            )}
            {localFilters.color && (
              <Badge variant="secondary" className="gap-1">
                Color: {localFilters.color}
                <X className="w-3 h-3 cursor-pointer" onClick={() => updateFilter('color', '')} />
              </Badge>
            )}
            {localFilters.mood && (
              <Badge variant="secondary" className="gap-1">
                Mood: {localFilters.mood}
                <X className="w-3 h-3 cursor-pointer" onClick={() => updateFilter('mood', '')} />
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Size Filter */}
      <div className="space-y-4">
        <h4 className="font-grotesk text-lg font-bold text-voin-black">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant={localFilters.size === size ? "default" : "outline"}
              size="sm"
              onClick={() => updateFilter('size', localFilters.size === size ? '' : size)}
              className={localFilters.size === size ? 
                "bg-voin-red hover:bg-voin-red/90" : 
                "border-gray-300 hover:border-voin-red hover:text-voin-red"
              }
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-4">
        <h4 className="font-grotesk text-lg font-bold text-voin-black">Color</h4>
        <div className="grid grid-cols-3 gap-3">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`relative w-12 h-12 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                localFilters.color === color.name
                  ? 'border-voin-red scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => updateFilter('color', localFilters.color === color.name ? '' : color.name)}
              title={color.name}
            >
              {color.name === 'White' && (
                <div className="absolute inset-1 border border-gray-200 rounded-full"></div>
              )}
              {localFilters.color === color.name && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-voin-red rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mood Filter */}
      <div className="space-y-4">
        <h4 className="font-grotesk text-lg font-bold text-voin-black">Mood</h4>
        <div className="space-y-3">
          {moods.map((mood) => (
            <div key={mood} className="flex items-center space-x-3">
              <Checkbox
                id={mood}
                checked={localFilters.mood === mood}
                onCheckedChange={(checked) => updateFilter('mood', checked ? mood : '')}
                className="border-voin-red data-[state=checked]:bg-voin-red data-[state=checked]:border-voin-red"
              />
              <label
                htmlFor={mood}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {mood}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-4">
        <h4 className="font-grotesk text-lg font-bold text-voin-black">Price Range</h4>
        <div className="space-y-4">
          <Slider
            value={localFilters.priceRange}
            onValueChange={(value) => updateFilter('priceRange', value)}
            max={5000}
            min={0}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>৳{localFilters.priceRange[0]}</span>
            <span>৳{localFilters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Collections */}
      <div className="space-y-4">
        <h4 className="font-grotesk text-lg font-bold text-voin-black">Collections</h4>
        <div className="space-y-3">
          {['New Arrivals', 'Best Sellers', 'Limited Edition', 'Most Loved'].map((collection) => (
            <div key={collection} className="flex items-center space-x-3">
              <Checkbox
                id={collection}
                className="border-voin-red data-[state=checked]:bg-voin-red data-[state=checked]:border-voin-red"
              />
              <label
                htmlFor={collection}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {collection}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
