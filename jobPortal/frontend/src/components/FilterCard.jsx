import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [filters, setFilters] = useState({
    Location: "",
    Industry: "",
    Salary: "",
  });

  const dispatch = useDispatch();

  const changeHandler = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  useEffect(() => {
    dispatch(setSearchedQuery(filters));
  }, [filters]);

  return (
    <div className="w-full bg-white p-3 rounded-md dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-md mt-3">{data.filterType}</h2>
          <RadioGroup
            className="my-4"
            value={filters[data.filterType]}
            onValueChange={(val) => changeHandler(data.filterType, val)}
          >
            {data.array.map((item, idx) => {
              const itemId = `id-${data.filterType}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
