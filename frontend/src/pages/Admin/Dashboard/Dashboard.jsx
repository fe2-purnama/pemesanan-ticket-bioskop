import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import LayoutAdmin from "../../../components/LayoutAdmin/LayoutAdmin";

const Dashboard = () => {
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalCinemas, setTotalCinemas] = useState(0);
  const [totalShows, setTotalShows] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesResponse = await api.get("/movies");
        const cinemasResponse = await api.get("/cinemas");
        const showsResponse = await api.get("/shows");

        setTotalMovies(moviesResponse.data.length);
        setTotalCinemas(cinemasResponse.data.length);
        setTotalShows(showsResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Total Movies: {totalMovies}
            </p>
          </div>
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Total Cinemas: {totalCinemas}
            </p>
          </div>
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Total Shows: {totalShows}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
