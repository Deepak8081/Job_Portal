import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
    const isJobSaved = storedJobs.some((savedJob) => savedJob._id === job._id);
    setIsSaved(isJobSaved);
  }, [job._id]);

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  const handleSaveJob = () => {
    let updatedSavedJobs = [...savedJobs];
    if (isSaved) {
      updatedSavedJobs = updatedSavedJobs.filter(
        (savedJob) => savedJob._id !== job._id
      );
    } else {
      updatedSavedJobs.push(job);
    }

    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    setSavedJobs(updatedSavedJobs);
    setIsSaved(!isSaved);
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark onClick={handleSaveJob} />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary}LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]" onClick={handleSaveJob}>
          {isSaved ? "Remove from Saved" : "Save For Later"}
        </Button>
      </div>
    </div>
  );
};

export default Job;
