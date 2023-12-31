import {
  Breadcrumbs,
  Dialog,
  DialogBody,
  IconButton,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { HiArrowDownOnSquare, HiHandThumbUp, HiXMark } from "react-icons/hi2";
import { MdPhoto } from "react-icons/md";
import { useState } from "react";

export default function Profile() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <Layout className="px-5 py-3 space-y-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-slate-800 font-semibold">Profile</h1>
          <Breadcrumbs>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
          </Breadcrumbs>
        </div>
        <div className="w-full rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white overflow-hidden">
          <div className="w-full h-64">
            <img
              src="/img/img.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 items-center relative -top-20 px-5">
            <div
              className="w-40 h-40 flex justify-center items-center rounded-full overflow-hidden bg-white/50 backdrop-blur-md"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <div className="w-36 h-36 rounded-full overflow-hidden">
                <img
                  src="/img/lusi.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-lg">Lusi Kuraisin</h1>
              <h1 className="text-xs text-slate-500">UI/UX Designer</h1>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-1">
                <h1>10</h1>
                <h1>Post</h1>
              </div>
              <div className="flex gap-1">
                <h1>1000</h1>
                <h1>Followers</h1>
              </div>
              <div className="flex gap-1">
                <h1>150</h1>
                <h1>Following</h1>
              </div>
            </div>
            <div className="w-full">
              <Tabs value="posts">
                <TabsHeader>
                  <Tab value="posts" className="font-poppins">
                    <div className="flex items-center gap-1">
                      <MdPhoto className="w-4 h-4" />
                      <h1>Posts</h1>
                    </div>
                  </Tab>
                  <Tab value="saved" className="font-poppins">
                    <div className="flex items-center gap-1">
                      <HiArrowDownOnSquare className="w-4 h-4" />
                      <h1>Saved</h1>
                    </div>
                  </Tab>
                  <Tab value="liked" className="font-poppins">
                    <div className="flex items-center gap-1">
                      <HiHandThumbUp className="w-4 h-4" />
                      <h1>Liked</h1>
                    </div>
                  </Tab>
                </TabsHeader>
                <TabsBody
                  animate={{
                    unmount: { y: 100, opacity: 0 },
                    mount: { y: 0, opacity: 1 },
                  }}
                >
                  <TabPanel value="posts">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="saved">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="liked">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="rounded-md border border-slate-200 shadow-sm shadow-slate-300 bg-white p-3">
                        <div className="w-full rounded-md overflow-hidden">
                          <img
                            src="/img/img1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>
      <div
        className={`${
          openProfile ? "w-screen h-screen" : "w-0 h-0"
        } fixed top-0 left-0 bg-white/10 backdrop-blur-md transition-all flex flex-col gap-5 justify-center items-center z-[9999]`}
      >
        <IconButton
          className="rounded-full"
          variant="text"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <HiXMark className="w-10 h-10" />
        </IconButton>
        <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
          <img
            src="/img/lusi.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
