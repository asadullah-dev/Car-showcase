"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";

import { updateSearchParams } from ".";

import {CustomButtons} from ".";

const ShowMore = ({ pageNumber, isNext,setLimit }: ShowMoreProps) => {


  const handleNavigation = () => {
    
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButtons
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
