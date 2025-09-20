import React from 'react'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { TooltipContent } from "../ui/tooltip";
import { Button } from "@/components/ui/button";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { updateIsNewMasterArray } from '@/redux/slices/segmentsSlice';
import { RiHome4Line } from 'react-icons/ri';
const NoSegment = () => {
    const dispatch = useDispatch<AppDispatch>();

     const handleAddSegment = () => {
    dispatch(updateIsNewMasterArray(true));
   
  };
  return (

   <>
       

         <div className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-none h-full border border-gray-200 shadow-sm">
                     {/* Icon */}
                     <div className="bg-blue-100 text-blue-500 p-4 rounded-full mb-3">
                       <RiHome4Line className="w-10 h-10" />
                     </div>
         
                     {/* Text */}
                     <p className="text-gray-700 font-semibold text-base mb-1">
                       No data available
                     </p>
                     <p className="text-gray-500 text-sm max-w-[200px] text-center">
                        No segments available. <br></br>
                       Please add a segment.
                     </p>
         
                     {/* Optional Action */}
                     <button
                           onClick={handleAddSegment} // onClick={handleAddNew}
                       className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow transition"
                     >
                        Segment
                     </button>
                   </div>

   </>
  )
}

export default NoSegment