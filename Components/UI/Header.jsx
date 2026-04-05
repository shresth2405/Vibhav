import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiTeamFill, RiTeamLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaRobot, FaTasks } from "react-icons/fa";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { IoMdGitNetwork } from "react-icons/io";
import { SiQiskit } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaHammer } from "react-icons/fa";
import { IoThunderstormOutline } from "react-icons/io5";
import { TbWaveSine, TbAugmentedReality } from "react-icons/tb";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import OurWork2 from "../../pages/OurWork2";

const projects = [
  {
    name: "AI/ML",
    href: "/Projects/ai",
    icon: FaRobot,
  },
  {
    name: "AR/VR",
    href: "/Projects/ar",
    icon: TbAugmentedReality,
  },
  {
    name: "IoT",
    href: "/Projects/iot",
    icon: IoThunderstormOutline,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/Projects/es",
    icon: FiCpu,
  },
  {
    name: "DSP",
    href: "/Projects/dsp",
    icon: TbWaveSine,
  },
  {
    name: "QUANTUM COMPUTING",
    href: "/Projects/quan",
    icon: SiQiskit,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/OurWork/Current",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/OurWork/Previous",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/OurTeam/currteam",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/OurTeam/alumni",
    icon: AiOutlineTeam,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  return (
    <Popover className="absolute  top-0 left-0 right-0 z-50 bg-black w-screen  bg-opacity-30">
      <div className="mx-auto max-w-7xl ">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start md:w-0 md:flex-1">
            <Link 
              href="/"
              onClick={(e) => {
                if (router.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="sr-only">Team Vibhav</span>
             
            </Link>
          </div>
          <div className="-my-2  md:hidden">
            <Popover.Button className="inline-flex items-center mr-1 justify-end  md:justify-center rounded-md bg-[#bca665e4]  p-2 text-black  hover:bg-sky-100 hover:text-black ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden  md:gap-12 md:flex">
            <Link
              href="/"
              className=" flex  font-[Hero-Bold] text-xl px-5 font-bold text-gray-200 rounded-lg p-2 hover:bg-[#a18240] hover:text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 "
              onClick={(e) => {
                if (router.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <IoHome className="w-6 h-6 mr-1" /> Home
            </Link>

            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={classNames(
                      open ? "text-gray-400" : "text-gray-200",
                      "inline-flex items-center text-base font-medium hover:text-white",
                    )}
                  >
                    <span className="flex rounded-lg p-2 tracking-wide font-[Hero-Bold] text-xl font-bold hover:bg-[#a18240]">
                      {" "}
                      <RiTeamFill className="h-6 w-6 mr-1" /> Team
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-400" : "text-gray-200",
                          "ml-1 mt-1.5 text- h-5 w-5 group-hover:text-white",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Item className="absolute z-10  mt-10 w-screen max-w-xs transform px-2 md:px-0 md:left-1/2 md:ml-0 md:-translate-x-1/2">
                      <div className="overflow-hidden  rounded-lg shadow-lg ">
                        <div className="absolute -ml-20 rounded-lg grid gap-6 bg-gray-900 px-5 py-6 md:gap-8 md:p-8">
                          {ourteam.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#a18240]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base  font-medium text-white ">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Menu.Item>
                  </Transition>
                </>
              )}
            </Menu>

            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={classNames(
                      open ? "text-gray-400" : "text-gray-200",

                      "inline-flex items-center text-base font-medium hover:text-white",
                    )}
                  >
                    <span className="flex rounded-lg p-2 font-Kanit text-xl font-[Hero-Bold] hover:bg-[#a18240]">
                      {" "}
                      <MdDesignServices className="h-6 mr-1 w-6" /> Projects
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 mt-1.5 h-5 w-5 group-hover:text-gray-500",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Item className="absolute z-10 mt-10 w-screen max-w-lg transform px-2 md:px-0 md:left-1/2 md:ml-0 md:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="absolute ml-56 rounded-lg grid gap-6 bg-gray-900 px-5 py-6 md:gap-8 md:p-8">
                          {projects.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#a18240]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white ">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Menu.Item>
                  </Transition>
                </>
              )}
            </Menu>
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={classNames(
                      open ? "text-gray-400" : "text-gray-200",
                      "inline-flex items-center text-base font-medium hover:text-white",
                    )}
                  >
                    <span className="flex rounded-lg p-2 font-[Hero-Bold] text-xl font-bold hover:bg-[#a18240]">
                      {" "}
                      <FaHammer className="w-6 mr-1 h-6" /> Work
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600 " : "text-gray-400",
                          "ml-1 mt-1.5 h-5 w-5  group-hover:text-gray-500",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Item className="absolute z-10 mt-10 w-screen max-w-xs transform px-2 md:px-32 md:ml-0 md:translate-x-[20rem]">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="absolute -ml-2 rounded-lg grid gap-6 bg-gray-900 px-5 py-6 md:gap-8 md:p-8">
                          {ourwork.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#a18240]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white ">
                                  {item.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Menu.Item>
                  </Transition>
                </>
              )}
            </Menu>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 md:w-0"></div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-700 shadow-lg">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-10 w-auto "
                    src="/Assets/Yellow.png"
                    alt="Team Vibhav"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#bca665e4] p-2 text-black hover:bg-sky-100 hover:text-black  ">
                    <span className="sr-only ">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid py-1 gap-y-4 gap-x-8">
                <Popover.Button
                  as={Link}
                  href="/"
                  className="text-left px-5 py-2 font-medium text-white rounded-lg hover:bg-[#dab971] mx-2"
                  onClick={(e) => {
                    if (router.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  Home
                </Popover.Button>

                <Menu>
                  <Menu.Button className="text-base px-5 py-2 font-medium text-white rounded-lg hover:bg-[#dab971] mx-2 flex items-center justify-between">
                    Team
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute z-[100] mt-24 w-screen max-w-xs transform px-2 md:px-0 md:left-1/2 md:ml-0 md:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-gray-700 px-5 py-6 md:gap-8 md:p-8">
                          {ourteam.map((item) => (
                            <Popover.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#dab971]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Menu>

                <Menu>
                  <Menu.Button className="text-base px-5 py-2 font-medium text-white rounded-lg hover:bg-[#dab971] mx-2 flex items-center justify-between">
                    Projects
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute z-[100] mt-40 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-gray-700 px-5 py-6 md:gap-8 md:p-8">
                          {projects.map((item) => (
                            <Popover.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#dab971]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Menu>
                <Menu>
                  <Menu.Button className="text-base px-5 py-2 font-medium text-white rounded-lg hover:bg-[#dab971] mx-2 flex items-center justify-between">
                    Work
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute z-[100] mt-52 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ">
                        <div className="relative grid gap-6 bg-gray-700 px-5 py-6 md:gap-8 md:p-8">
                          {ourwork.map((item) => (
                            <Popover.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-[#dab971]"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                              </div>
                            </Popover.Button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
