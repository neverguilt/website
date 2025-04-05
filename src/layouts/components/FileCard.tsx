// src/components/FileCard.tsx
import React from 'react'

const FileCard = () => {
  return (
    <a
      className="h-full max-w-full w-full flex items-center flex-col flex-nowrap justify-center gap-0 p-0 cursor-pointer overflow-visible"
    >
      {/* Front Layer (Inner) */}
      <div className="absolute flex-col pb-[100px] right-0 left-0 gap-[10px] z-[2] flex-none h-[60%] rounded-[8px_8px_56px_56px] bg-[#f5f4f2d5] shadow-[0px_3px_0px_rgb(233,222,216),_0px_-6px_4px_-4px_rgba(19,20,21,0.12)] bottom-0 flex justify-center items-center">
        {/* .front */}
        <div className="flex flex-none gap-[10px] items-center flex-col cursor-pointer inset-2 overflow-hidden p-[10px] absolute z-[1] rounded-[4px_4px_48px_48px] after:content-[''] after:border-[2px] after:border-dashed after:border-[rgb(122,121,120)] after:w-full after:h-full after:absolute after:box-border after:left-0 after:top-0 after:rounded-[inherit] pointer-events-none"></div>
        {/* Button */}
        <div className="absolute top-[28px] left-[28px] h-[44px] w-auto z-[8] flex-none">
          <div
            className="relative flex flex-row flex-nowrap items-center justify-center gap-2 overflow-hidden p-[14px_22px] w-min h-min opacity-100 will-change-transform rounded-[100px] bg-[var(--token-e93ad026-bcfd-461b-9ea2-4f6f411a8646,rgb(237,230,222))] shadow-[0px_2px_0px_0px_var(--token-86888b41-42dd-497b-bfde-2818b9691689,rgb(221,216,213))] border-solid border-[var(--border-color,var(--token-86888b41-42dd-497b-bfde-2818b9691689,rgb(221,216,213)))] border-t-[var(--border-top-width,2px)] border-r-[var(--border-right-width,2px)] border-b-[var(--border-bottom-width,2px)] border-l-[var(--border-left-width,2px)]"
          >
            <div className="outline-none flex flex-col justify-start flex-shrink-0 opacity-100 transform-none text-black">
              <div className="flex-none relative h-5 w-auto whitespace-pre">View my Works</div>
            </div>
            <div className="rounded-[100px] flex flex-col flex-none items-center justify-center gap-2.5 cursor-pointer absolute inset-1 max-w-[800px] overflow-hidden p-2 z-10 after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:border-2 after:border-gray-400 after:border-dashed after:box-border after:pointer-events-none after:rounded-[100px]"></div>
          </div>
        </div>
        {/* Bg pattern */}
        <div className="absolute inset-2 flex-none pointer-events-none select-none mix-blend-darken opacity-10 rounded-bl-[56px] rounded-br-[56px] rounded-tl-[4px] rounded-tr-[4px]">
          <div className="absolute inset-0 border-0 bg-repeat bg-top bg-[length:80.01px_auto] bg-[url('https://framerusercontent.com/images/VfkEna8iRjS9ZbXeCG1MRu3r0w.svg')] rounded-inherit"></div>
        </div>
      </div>
      {/* Back Layer (Outer) */}
      <div className="absolute w-full h-full bg-[#c58546] rounded-[56px] z-[-1] inset-0 cursor-pointer flex flex-none flex-col flex-nowrap gap-[10px] justify-center overflow-hidden p-[10px]">
        {/* .back */}
        <div className="flex flex-none gap-[10px] items-center flex-col cursor-pointer inset-2 overflow-hidden p-[10px] absolute z-[1] rounded-[48px_48px_48px_48px] after:content-[''] after:border-[2px] after:border-dashed after:border-[rgb(122,121,120)] after:w-full after:h-full after:absolute after:box-border after:left-0 after:top-0 after:rounded-[inherit] pointer-events-none"></div>
      </div>
    </a>
  )
}

export default FileCard
