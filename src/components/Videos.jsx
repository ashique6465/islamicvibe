import React, { useEffect, useState } from "react";
import CountUp from "react-countup"; 

const Videos = () => {
  const [subscriberCount, setSubscriberCount] = useState(null);
  const youtubeVideos = [
    {
      id: "43Ee7fjBZms",
      title: "Azmat Raza Bhagalpuri ",
    },
    {
      id: "Y-Qqy7LY2vk",
      title: "Mohammad Ali Faizi ",
    },
    {
      id: "tdkhH4qgkkE",
      title: "Muharram-24",
    },
    // {
    //   id: "k9u-vgtfHMo",
    //   title:"Akhtar Kashif",
    // },
  ];

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const channelId = "UC2HX4jo0FVDwxcC4R-FO-Nw";

    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const data = await response.json();
        const subscribers = data.items[0].statistics.subscriberCount;
        setSubscriberCount(subscribers);
      } catch (error) {
        console.error("Error fetching subscriber count: ", error);
      }
    };

    fetchSubscriberCount();
  }, []);

  return (
    <section className="py-10 bg-gray-100 text-center mt-16">
      <h2 className="text-5xl font-bold mb-8 ">Watch My Videos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
        {youtubeVideos.map((video) => (
          <div key={video.id} className="w-full">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://www.youtube.com/channel/UC2HX4jo0FVDwxcC4R-FO-Nw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition"
        >
          Watch More
        </a>
      </div>

      {subscriberCount && (
        <div className="mt-4 text-xl font-medium">
          
          <p>
            Subscribers:{" "}
            <CountUp end={parseInt(subscriberCount)} duration={2} />+
          </p>
        </div>
      )}
    </section>
  );
};

export default Videos;
