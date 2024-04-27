import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { sidebar } from "../lib/sidebar";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [menu, openMenu] = useState();
  const path = useLocation();

  return (
    <>
      <div className="w-56 fixed font-poppins bg-slate-900 max-h-screen h-full flex flex-col items-center z-50">
        <img src="/img/logo.png" alt="Logo" className="w-40 h-40" />
        <List className="text-white">
          {sidebar.map((d, i) => {
            if (d.nested) {
              return (
                <Accordion
                  icon={
                    <HiChevronRight
                      className={`w-4 h-4 ${
                        menu === i ? "rotate-90" : "rotate-0"
                      } transition-all`}
                    />
                  }
                  open={
                    menu === i ||
                    d.data.filter((d) => d.link === path.pathname).length > 0
                  }
                  key={i}
                >
                  <ListItem
                    className={`px-2 py-2.5 mx-auto hover:bg-blue-500/10 hover:text-slate-100 focus:bg-transparent active:bg-blue-500/10 transition-all duration-300 w-48`}
                    onClick={() => {
                      if (menu === i) {
                        return openMenu(null);
                      } else {
                        return openMenu(i);
                      }
                    }}
                  >
                    <AccordionHeader className="border-b-0 p-0">
                      <div className={`flex items-center gap-2 text-slate-400`}>
                        {React.createElement(d.icon, {
                          className: "w-5 h-5",
                        })}
                        <h1 className="font-semibold text-xs font-poppins">
                          {d.label}
                        </h1>
                      </div>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="p-0 text-white">
                    <List>
                      {d.data.map((d, i) => (
                        <Link to={d.link}>
                          <ListItem
                            key={i}
                            className={`pl-6 py-2 hover:bg-blue-500/10 ${
                              path.pathname === d.link
                                ? "bg-blue-500/10 text-slate-100"
                                : "text-slate-400"
                            } hover:text-slate-100 focus:bg-transparent active:bg-blue-500/10 transition-all duration-300 mx-auto w-48`}
                          >
                            <div className="flex items-center gap-2">
                              {React.createElement(d.icon, {
                                className: "w-5 h-5",
                              })}
                              <h1 className="font-semibold text-xs font-poppins">
                                {d.label}
                              </h1>
                            </div>
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              );
            } else {
              return (
                <Link key={i} to={d.link}>
                  <div
                    className={`px-2 py-2.5 mx-auto hover:bg-blue-500/10 ${
                      path.pathname === d.link && !menu
                        ? "bg-blue-500/10 text-slate-100"
                        : "text-slate-400"
                    } hover:text-slate-100 transition-all duration-300 w-48 rounded-md`}
                  >
                    <div className="flex items-center gap-2">
                      {React.createElement(d.icon, { className: "w-5 h-5" })}
                      <h1 className="font-bold text-xs font-poppins">
                        {d.label}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </List>
      </div>
    </>
  );
}
