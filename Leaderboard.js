import React, { useState, useEffect } from "react";
import Footer from "../components/Footer"; // Importing Footer component

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch live leaderboard data from backend
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/leaderboard"); // Update with your backend URL
        const data = await response.json();
        setLeaderboardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Leaderboard Section */}
        <h1 className="text-3xl font-bold m-4 text-center text-orange-600">Leaderboard 🏆</h1>
        <p className="text-center text-gray-500 italic">
          "Success is not the key to happiness. Happiness is the key to success. 
          If you love what you are doing, you will be successful." - Albert Schweitzer
        </p>

        <table className="border-collapse w-1/2 mx-auto border border-gray-300 my-4">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2 border border-gray-300">No.</th>
              <th className="p-2 border border-gray-300">Username</th>
              <th className="p-2 border border-gray-300">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.length > 0 ? (
              leaderboardData.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border border-gray-300 font-bold">{index + 1}</td>
                  <td className="p-2 border border-gray-300">{user.username}</td>
                  <td className="p-2 border border-gray-300">{user.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  Loading live scores...
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Best Prayers Section */}
        <div className="my-10 text-center">
          <h2 className="text-2xl font-semibold text-orange-600">Best Prayers for Success 🙏</h2>
          <p className="text-gray-600 w-3/4 mx-auto italic">
            "O Lord, grant me the strength to rise after every fall, the courage to stand in the face of challenges, and the wisdom to make the right choices."
          </p>
          <p className="text-gray-600 w-3/4 mx-auto italic mt-2">
            "May your hard work be blessed with success, and may every challenge be an opportunity for growth."
          </p>
        </div>

        {/* Additional Motivational Quotes */}
        <div className="my-10 text-center">
          <h2 className="text-2xl font-semibold text-orange-600">Words of Wisdom 📖</h2>
          <p className="text-gray-600 w-3/4 mx-auto italic">
            "It does not matter how slowly you go as long as you do not stop." - Confucius
          </p>
          <p className="text-gray-600 w-3/4 mx-auto italic mt-2">
            "Believe you can and you're halfway there." - Theodore Roosevelt
          </p>
          <p className="text-gray-600 w-3/4 mx-auto italic mt-2">
            "The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Leaderboard;
