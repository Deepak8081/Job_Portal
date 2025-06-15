import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    const { Location, Industry, Salary } = searchedQuery;

    const filteredJobs = allJobs.filter((job) => {
      const matchLocation = Location ? job.location === Location : true;
      const matchIndustry = Industry ? job.title === Industry : true;

      let matchSalary = true;
      if (Salary === "0-40k") {
        matchSalary = job.salary <= 40000;
      } else if (Salary === "42-1lakh") {
        matchSalary = job.salary > 42000 && job.salary <= 100000;
      } else if (Salary === "1lakh to 5lakh") {
        matchSalary = job.salary > 100000 && job.salary <= 500000;
      }

      return matchLocation && matchIndustry && matchSalary;
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <div className="flex-1 flex justify-center items-center">
              <Alert
                variant="default"
                className="max-w-md w-full mt-20 text-center"
              >
                <Info className="h-5 w-5 mx-auto mb-2 text-blue-500" />
                <AlertTitle className="text-lg font-semibold">
                  No Jobs Found
                </AlertTitle>
                <AlertDescription className="text-sm text-muted-foreground">
                  We couldn't find any jobs matching your current filters. Try
                  clearing some filters or updating your search criteria to see
                  more results.
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
