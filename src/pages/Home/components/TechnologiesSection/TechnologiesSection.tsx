import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss, SiRedux, SiCanva, SiMongodb } from "react-icons/si";

import "./TechnologiesSection.css";

export default function TechnologiesSection() {
  return (
    <div className="w-full flex justify-around text-lg">
      <div className="section">
        <h3 className="front-title">Frontend</h3>
        <ul>
          <li className="flex items-center">
            <FaHtml5 className="inline-block mr-4 icon-front" />
            HTLM5 + CSS3
          </li>
          <li className="flex items-center">
            <FaReact className="inline-block mr-4 icon-front" />
            ReactJS
          </li>
          <li className="flex items-center">
            <SiTailwindcss className="inline-block mr-4 icon-front" />
            TailwindCSS
          </li>
          <li className="flex items-center">
            <SiRedux className="inline-block mr-4 icon-front" />
            Redux / ReactContext
          </li>
        </ul>
      </div>
      <div className="section">
        <h3 className="back-title">Backend</h3>
        <ul>
          <li className="flex items-center">
            <FaNodeJs className="inline-block mr-4 icon-back" />
            NodeJS
          </li>
          <li className="flex items-center">
            <AiOutlineApi className="inline-block mr-4 icon-back" />
            express.js
          </li>
          <li className="flex items-center">
            <BiTestTube className="inline-block mr-4 icon-back" />
            Jest (unit testing)
          </li>
          <li className="flex items-center">
            <SiMongodb className="inline-block mr-4 icon-back" />
            MongoDB
          </li>
        </ul>
      </div>
      <div className="section">
        <h3 className="uiux-title">UI/UX</h3>
        <ul>
          <li className="flex items-center">
            <FiFigma className="inline-block mr-4 icon-uiux" />
            Figma
          </li>
          <li className="flex items-center">
            <SiCanva className="inline-block mr-4 icon-uiux" />
            Canva
          </li>
        </ul>
      </div>
    </div>
  );
}
