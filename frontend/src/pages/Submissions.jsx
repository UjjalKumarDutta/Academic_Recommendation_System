import { useEffect, useState } from "react";
import { getSubmissions } from "../services/api";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalSubmissions = submissions.length;

  const bachelorCount = submissions.filter(
    (item) =>
      item.qualification ===
      "Bachelor's Degree"
  ).length;

  const masterCount = submissions.filter(
    (item) =>
      item.qualification ===
      "Master's Degree"
  ).length;

  const mbaCount = submissions.filter(
    (item) =>
      item.qualification === "MBA"
  ).length;

  const phdCount = submissions.filter(
    (item) =>
      item.qualification === "PhD"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
          📊 All Submissions
        </h1>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold">
              Total
            </h2>

            <p className="text-3xl font-bold text-indigo-600">
              {totalSubmissions}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold">
              Bachelor's
            </h2>

            <p className="text-3xl font-bold text-blue-600">
              {bachelorCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold">
              Master's
            </h2>

            <p className="text-3xl font-bold text-green-600">
              {masterCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold">
              MBA
            </h2>

            <p className="text-3xl font-bold text-orange-600">
              {mbaCount}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold">
              PhD
            </h2>

            <p className="text-3xl font-bold text-purple-600">
              {phdCount}
            </p>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

              <tr>
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Qualification
                </th>

                <th className="p-4 text-left">
                  Experience
                </th>

                <th className="p-4 text-left">
                  Recommendation
                </th>
              </tr>

            </thead>

            <tbody>

              {submissions.map((submission) => (
                <tr
                  key={submission.id}
                  className="border-b hover:bg-blue-50 transition duration-300"
                >
                  <td className="p-4">
                    {submission.name}
                  </td>

                  <td className="p-4">
                    {submission.email}
                  </td>

                  <td className="p-4">
                    {submission.qualification}
                  </td>

                  <td className="p-4">
                    {submission.experience}
                  </td>

                  <td className="p-4 font-semibold">
                    {submission.recommendation}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Submissions;