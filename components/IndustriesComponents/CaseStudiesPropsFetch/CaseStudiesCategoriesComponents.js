"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import ConfigData from "../../../config";

const CaseStudiesCategoriesComponents = ({ categoryId }) => {
  const [data, setData] = useState(null);
  const pathname = usePathname();
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&per_page=3&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <style jsx>{`
        .post-content-title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
        .post-content {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      
       
        
        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 1rem !important;
        }
        h1, h2, h3, h4, h5, h6, p {
          margin-top: 1rem !important;
        }
        
        ul li{
        margin-bottom: 0.5rem !important
        font-size: 20px !important
        }

        ul{
        padding-left: 20px !important;
        margin-top: 1rem !important
        }

        h4{
        font-size: 24px !important
        }

        h3{
        font-size: 28px !important
        }
        
        h2 { 
        font-size: 32px !important
        }

        b {
        font-weight: 700 !important;
        font-style: normal !important;
        }
      `}
      </style>

      <div className="container mx-auto lg:py-10">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="mb-10">
              <img
                src={item.acf.thumbnail_image.url}
                alt={item.title.rendered}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="bg-white shadow-lg p-6 mt-4 flex flex-col lg:flex-row justify-between gap-4">
                <div className="lg:w-1/3">
                  <div
                    className="text-xl font-monument-bold text-red-600 post-content-title"
                    dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                  />
                </div>
                <div className="lg:w-xl lg:self-center">
                  <p
                    className="text-gray-600 post-content"
                    dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                  />
                </div>
                <div className="lg:w-auto lg:self-center">
                  <button
                    onClick={() => handleShowModal(item)}
                    className="text-red-600 font-medium flex items-center gap-2 hover:underline text-xl"
                  >
                    Learn More
                    <FiArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center text-center text-red-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mr-2"></div>
            Loading...
          </div>
        )}

        {isOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
            <div
              onClick={handleCloseModal}
              className="absolute inset-0 cursor-pointer"
            ></div>
            <div className="relative bg-white rounded-lg max-h-[80vh] overflow-auto w-11/12 md:w-3/4 lg:w-1/2 p-6 z-50">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <div className="text-black">
                <h2
                  className="text-2xl font-semibold text-red-600 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: selectedItem.title.rendered,
                  }}
                />
                <div
                  className="text-start"
                  dangerouslySetInnerHTML={{
                    __html: selectedItem.content.rendered,
                  }}
                />
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/contact-us"
                    className="btn-14"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isOpen && (
          <div className="mt-10 flex justify-center">
            {(pathname === "/leads" ||
              pathname === "/sales" ||
              pathname === "/traffic" ||
              pathname === "/keyword-ranking" ||
              pathname === "/engagement") && (
              <Link
                href="/welcome"
                className="btn-14"
              >
                Enter website
              </Link>
            )}
            {pathname.startsWith("/industries") && (
              <Link href="/case-studies" className="btn-18">
                View All Case Studies
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CaseStudiesCategoriesComponents;
