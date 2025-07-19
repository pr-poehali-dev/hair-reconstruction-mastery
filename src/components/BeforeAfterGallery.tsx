import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeAfterImage {
  before: string;
  after: string;
  title?: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

const BeforeAfterGallery = ({ images }: BeforeAfterGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAfter(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAfter(false);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="absolute inset-0 flex">
            {/* Before Image */}
            <div 
              className={`relative w-1/2 overflow-hidden transition-all duration-500 ease-in-out ${
                isAfter ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <img
                src={currentImage.before}
                alt="До"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                ДО
              </div>
            </div>

            {/* After Image */}
            <div 
              className={`relative w-1/2 overflow-hidden transition-all duration-500 ease-in-out ${
                isAfter ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <img
                src={currentImage.after}
                alt="После"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                ПОСЛЕ
              </div>
            </div>

            {/* Divider Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-lg transform -translate-x-1/2 z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Toggle Buttons */}
        <div className="p-6 bg-white">
          <div className="flex gap-3 justify-center mb-4">
            <Button
              variant={!isAfter ? "default" : "outline"}
              onClick={() => setIsAfter(false)}
              className="flex-1 max-w-32"
            >
              ДО
            </Button>
            <Button
              variant={isAfter ? "default" : "outline"}
              onClick={() => setIsAfter(true)}
              className="flex-1 max-w-32"
            >
              ПОСЛЕ
            </Button>
          </div>

          {currentImage.title && (
            <h3 className="text-lg font-semibold text-center text-slate-800">
              {currentImage.title}
            </h3>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-slate-600' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAfter(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;