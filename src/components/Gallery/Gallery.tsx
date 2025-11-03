"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  details: string;
}

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "",
      description: "",
      category: "",
      imageUrl: "/assets/images/back_2.jpg",
      details: "",
    },
    {
      id: 2,
      title: "",
      description: "",
      category: "",
      imageUrl: "/assets/images/back.jpg",
      details: "",
    },
    {
      id: 3,
      title: "",
      description: "",
      category: "",
      imageUrl: "/assets/images/front.jpg",
      details: "",
    },
  ];

  // const openModal = (item: GalleryItem) => {
  //   setSelectedItem(item);
  //   document.body.style.overflow = "hidden";
  // };

  // const closeModal = () => {
  //   setSelectedItem(null);
  //   document.body.style.overflow = "unset";
  // };

  return (
    <section ref={ref} id="gallery" className="py-16 sm:py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 fade-in-up ${
            isVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-3 sm:mb-4">
            Project <span className="gradient-text font-medium">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Visual showcase of electronics projects and achievements
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[250px] stagger-container ${
            isVisible ? "animate" : ""
          }`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                professional-card rounded-xl overflow-hidden relative group
                hover:scale-105 transition-all duration-300 stagger-child
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
            >
              <img
                src={item.imageUrl}
                alt={`Gallery image ${item.id}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>

                <span className="text-xs text-sky-400 font-light mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-medium text-white mb-1 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 font-light line-clamp-2">
                  {item.description}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 w-10 h-10 bg-zinc-800/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer group"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-sky-900 to-blue-900">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm font-light">
                  Image Placeholder
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-sky-900/50 text-sky-400 rounded-full text-xs font-light mb-4">
                    {selectedItem.category}
                  </span>

                  <h2 className="text-2xl font-medium text-white mb-3 gradient-text">
                    {selectedItem.title}
                  </h2>

                  <p className="text-sm text-slate-300 font-light mb-4">
                    {selectedItem.description}
                  </p>

                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <h3 className="text-sm font-medium text-white mb-2">
                      Project Details
                    </h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {selectedItem.details}
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="mt-6 w-full accent-gradient text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-200 font-light cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
