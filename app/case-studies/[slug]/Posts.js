"use client";
import React, { useEffect, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import Link from "next/link";
import ConfigData from "../../../config";

const Posts = ({ slug }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [siteUrl, serverUrl, slug]);

  return (
    <>
      <style>
        {`
        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 1rem !important;
        }
        h1, h2, h3, h4, h5, h6, p {
          margin-top: 1rem !important;
        }
        
        ul li{
        margin-bottom: 0.5rem !important
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
        
        h2{
        font-size: 28px !important
        }

        b {
        font-weight: 700 !important;
        font-style: normal !important;
        }
      `}
      </style>
      {data && !loading
        ? data.map((post) => (
            <React.Fragment key={post.id}>
              <title>{post.acf.meta_title}</title>
              <meta name="description" content={post.acf.meta_description_} />
              <meta name="robots" content="index,follow" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                property="article:modified_time"
                content="2023-07-06T15:35:40+00:00"
              />
            </React.Fragment>
          ))
        : null}

      <div className="w-full px-4 container mx-auto lg:px-0">
        {loading ? (
          // 👇 Skeleton Loader Section
          <div className="animate-pulse text-white py-10 space-y-4">
            <div className="h-4 w-40 bg-gray-600 rounded"></div>
            <div className="h-8 w-3/4 bg-gray-600 rounded"></div>
            <div className="space-y-2 pt-4">
              <div className="h-4 w-full bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-600 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-600 rounded"></div>
            </div>
          </div>
        ) : data ? (
          data.map((post) => (
            <div key={post.id} className="flex flex-col">
              <div className="pb-10">
                {/* Breadcrumb */}
                <div className="flex items-center mb-3 flex-nowrap text-white text-sm">
                  <p className="mb-0 flex items-center gap-2">
                    <Link href="/case-studies" className="hover:underline">
                      Case Studies
                    </Link>
                    <CiCircleChevRight className="text-lg" />
                    <Link
                      href=""
                      className="hover:underline"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />
                  </p>
                </div>

                {/* Title and Content */}
                <div className="flex flex-col justify-between text-white">
                  <h5
                    className="lg:text-[52px] text-2xl font-semibold pb-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div className="flex flex-col">
                    <div
                      className="text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </>
  );
};

export default Posts;
