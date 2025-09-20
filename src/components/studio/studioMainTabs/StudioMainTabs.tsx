import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { updateActiveTab } from "@/redux/slices/visualizerSlice/workspaceSlice";
import { setCurrentTabContent } from "@/redux/slices/studioSlice";
import { setCurrentGenAiImage } from "@/redux/slices/visualizerSlice/genAiSlice";
import { setCanvasType, updateIsCompare } from "@/redux/slices/canvasSlice";

import DesignHubContent from "./tabContent/DesignHubContent";
import MeasurementContent from "./tabContent/MeasurementContent";
import PreferredImageTab from "@/components/workSpace/projectWorkSpace/PreferredImageTab";

const base =
  "flex items-center justify-center gap-2  px-3 py-2 rounded-lg text-sm transition-all select-none focus:ring-none focus:outline-none";

const activeCls =
  "bg-white text-black border border-gray-200 shadow-lg ring-2 ring-blue-500/20";

const inactiveCls =
  "bg-transparent text-gray-600 border border-transparent hover:bg-white hover:border-gray-200";

export default function StudioMainTabs() {
  const dispatch = useDispatch<AppDispatch>();
  const active = useSelector((s: RootState) => s.workspace.activeTab) ?? "inspiration";

  const setTab = (v: string) => dispatch(updateActiveTab(v));

  const goInspiration = () => {
    dispatch(setCurrentTabContent("home"));
    dispatch(setCanvasType("hover"));
    setTab("inspiration");
  };

  const goDesignHub = () => {
    dispatch(updateIsCompare(false));
    dispatch(setCanvasType("hover"));
    dispatch(setCurrentTabContent("home"));
    dispatch(setCurrentGenAiImage(null));
    setTab("design-hub");
  };

  const goMeasurement = () => {
    dispatch(setCanvasType("hover"));
    setTab("measurement");
  };

  return (
    <TooltipProvider>
      <Tabs value={active} onValueChange={setTab} className="w-full h-full flex flex-col">
        {/* BAR */}
        <TabsList
          className="
            w-full bg-gray-100 border border-gray-200 rounded-none p-1
            grid grid-cols-3 gap-2
            md:inline-flex md:w-auto md:gap-2
          "
        >
          {/* Inspiration */}
          <Tooltip>
            <TooltipTrigger asChild>
              <TabsTrigger
                value="inspiration"
                onClick={goInspiration}
                className={`${base} ${active === "inspiration" ? activeCls : inactiveCls}`}
              >
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg> */}
                <span className="hidden sm:inline">Inspiration</span>
              </TabsTrigger>
            </TooltipTrigger>
            <TooltipContent>Inspiration</TooltipContent>
          </Tooltip>

          {/* Design Hub */}
          <Tooltip>
            <TooltipTrigger asChild>
              <TabsTrigger
                value="design-hub"
                onClick={goDesignHub}
                className={`${base} ${active === "design-hub" ? activeCls : inactiveCls}`}
              >
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="4.5" r="2.5" />
                  <path d="m10.2 6.3-3.9 3.9" />
                  <circle cx="4.5" cy="12" r="2.5" />
                  <path d="M7 12h10" />
                  <circle cx="19.5" cy="12" r="2.5" />
                  <path d="m13.8 17.7 3.9-3.9" />
                  <circle cx="12" cy="19.5" r="2.5" />
                </svg> */}
                <span className="hidden sm:inline">Design Hub</span>
              </TabsTrigger>
            </TooltipTrigger>
            <TooltipContent>Design Hub</TooltipContent>
          </Tooltip>

          {/* Measurement */}
          <Tooltip>
            <TooltipTrigger asChild>
              <TabsTrigger
                value="measurement"
                onClick={goMeasurement}
                className={`${base} ${active === "measurement" ? activeCls : inactiveCls}`}
              >
                {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg> */}
                <span className="hidden sm:inline">Measurement</span>
              </TabsTrigger>
            </TooltipTrigger>
            <TooltipContent>Measurement</TooltipContent>
          </Tooltip>
        </TabsList>

        {/* CONTENT */}
        <TabsContent value="design-hub">
          <DesignHubContent />
        </TabsContent>

        <TabsContent value="inspiration" className="flex-grow">
          <PreferredImageTab />
        </TabsContent>

        <TabsContent value="measurement" className="flex-grow">
          <MeasurementContent />
        </TabsContent>
      </Tabs>
    </TooltipProvider>
  );
}
