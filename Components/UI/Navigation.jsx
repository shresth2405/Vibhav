
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AudioLines,
  BookMarked,
  Box,
  Cpu,
  History,
  Home,
  LinkIcon,
  Mail,
  Slack,
  User,
  Wifi,
} from "lucide-react";
import { Bot } from "lucide-react";
import { useRef } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { scrollToSection } from "../../utils/scrollToSection";

const projects = [
  {
    name: "AI/ML",
    href: "/projects/ai-ml",
    icon: Bot,
  },
  {
    name: "AR/VR",
    href: "/projects/ar-vr",
    icon: Box,
  },
   {
    name: "BLOCKCHAIN",
    href: "/projects/blockchain",
    icon: LinkIcon,
  },

  {
    name: "IoT",
    href: "/projects/iot",
    icon: Wifi,
  },
  {
    name: "DSP",
    href: "/projects/dsp",
    icon: AudioLines,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/projects/embedded",
    icon: Cpu,
  },

  {
    name: "QUANTUM COMPUTING",
    href: "/projects/quantum",
    icon: Slack,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/work/current-year",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/work/previous-year",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/team/current-team",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/team/alumni",
    icon: AiOutlineTeam,
  },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const scrollToBottom = () => {
    
    setTimeout(() => {
      if (window.innerWidth <= 640) {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 100,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 400,
          behavior: "smooth",
        });
      }
    }, 800);
  };
const goToSection = (section) => {
  document.body.classList.remove("overflow-hidden");
  setShowNavbar(false);

  if (router.pathname === "/") {
    scrollToSection(section);
  } else {
    sessionStorage.setItem("scrollTarget", section);
    router.push("/");
  }
};

  const toggleNavbar = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (!showNavbar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    setShowNavbar(() => !showNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    setActiveRoute(router.asPath);

    handleResize(); 
    window.addEventListener("resize", handleResize);
    


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.asPath]); 

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (ProjectVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleProjectVisibility();
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const toggleWorkVisibility = () => {
    setWorkVisible(!WorkVisible);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (WorkVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleWorkVisibility();
    setProjectVisible(false);
    setTeamVisible(false);
   
  };

  const toggleTeamVisibility = () => {
    setTeamVisible(!TeamVisible);
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (TeamVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "10px"
      );
    }
    toggleTeamVisibility();
    setProjectVisible(false);
    setWorkVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };
    const handleScroll = () => {
    
      if (
        window.scrollY > window.scrollY / 2 &&
        (ProjectVisible || WorkVisible || TeamVisible)
      ) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ProjectVisible, WorkVisible, TeamVisible]); 

  const handleSubmenuClick = () => {
    setProjectVisible(false);
    setWorkVisible(false);
    setTeamVisible(false);
  };

  
  
  const handleScroll = () => {
  const currentScrollY = window.scrollY;

 
  if (currentScrollY < 80) {
    setIsVisible(true);
    return;
  }

  
  setIsVisible(false);

 
  if (scrollTimeoutRef.current) {
    clearTimeout(scrollTimeoutRef.current);
  }

  
  scrollTimeoutRef.current = setTimeout(() => {
    setIsVisible(true);
  }, 800);
};

useEffect(() => {
  const handleRouteChange = () => {
    
    setProjectVisible(false);
    setWorkVisible(false);
    setTeamVisible(false);
    setShowNavbar(false);
    if (typeof document !== 'undefined') {
      document.body.classList.remove("overflow-hidden");
    }
  };

  
  router.events.on('routeChangeComplete', handleRouteChange);

  return () => {
    router.events.off('routeChangeComplete', handleRouteChange);
  };
}, [router.events]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, []);

  return isMobile ? (
    <div
      className={`navbar fixed font-chakra z-[100] inset-0 flex flex-col w-full h-fit top-0 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
      }`}
      
    >
      <ul className={`flex items-center   bg-black/20 backdrop-blur-lg justify-between px-3 py-1 mx-auto w-full transition-all duration-500 delay-100 ease-out ${showNavbar? "bg-black/90 bg-blur-xl": "bg-black/20"}`}>
        <li className="z-40 p-1 flex items-center gap-2">
          <Link href="/" className="block">
            <img src="/Assets/Yellow.png" className="h-10  " />
          </Link>
          <div className="h-10 w-[1px] bg-white"></div>

          <Link href="https://festnimbus.nith.ac.in">
            <div className="pl-3 z-50">
              <img src="/Assets/nimbusLogo.png" className="h-10"></img>
            </div>
          </Link>
        </li>

        <li>
          <button
            onClick={toggleNavbar}
            className="relative w-6 h-6 flex flex-col justify-center items-center group"
          >
            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md transition-all duration-300 ease-in-out ${showNavbar ? "rotate-45 translate-y-2" : ""
                }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md my-1 transition-all duration-300 ease-in-out ${showNavbar ? "opacity-0" : ""
                }`}
            ></span>

            <span
              className={`block w-full h-[3px] bg-cyan-400 rounded-md transition-all duration-300 ease-in-out ${showNavbar ? "-rotate-45 -translate-y-2" : ""
                }`}
            ></span>
          </button>
        </li>
      </ul>

      <div
        className={`${showNavbar ? " h-screen" : " h-0"
          } transition-all duration-500 delay-100 ease-in-out fixed top-14 bg-black/85 backdrop-blur-lg w-[100%] overflow-y-auto  `}
      >
        <div className="flex h-screen flex-col justify-between border-e text-gray-100">
          <div className="px-4 py-6">
            <ul className="mt-6 space-y-1 ">
              <li>
                <Link
                  href="/"
                  className="block rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/30 hover:text-cyan-400"
                  onClick={() => {
                    document.body.classList.remove("overflow-hidden");
                    setShowNavbar(false);
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Projects </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <Link
                        href="/projects/ai-ml"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        AI/ML
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects/ar-vr"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400 hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        AR/VR
                      </Link>
                    </li>

                      <li>
                      
                      <Link
                        href="/projects/blockchain"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        BLOCKCHAIN
                      </Link>
                    </li>

                    <li>

                      <Link
                        href="/projects/iot"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        IOT
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects/dsp"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        DSP
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects/embedded"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        EMBEDDED SYSTEMS
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/projects/quantum"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        QUANTAM COMPUTING
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Team </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <Link
                        href="/team/current-team"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        Current
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/team/alumni"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        Alumni
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group menu [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-800/30 hover:text-cyan-400">
                    <span className="text-sm font-medium"> Work </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <Link
                        href="/work/current-year"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        Current Year
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/work/previous-year"
                        className="block rounded-lg px-4 py-1 text-sm font-medium text-gray-400  hover:bg-gray-800/30 hover:text-cyan-400"
                        onClick={() => {
                          document.body.classList.remove("overflow-hidden");
                          setShowNavbar(false);
                        }}
                      >
                        Previous Year
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>


    <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800/30 hover:text-cyan-400" onClick={() => goToSection("contactUS")}>
      Contact
    </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`fixed top-1 left-0 right-0 z-[9999] flex justify-between p-2 sm:p-3 backdrop:blur-sm backdrop:brightness-75 transition-custom transition-all ease-in-out duration-300 text-3xl sm:text-4xl font-orbitron    ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
    >
      <Link href="/">
        <div className="pl-3 z-50">
          <img src="/Assets/Yellow.png" className=" h-12"></img>
        </div>
      </Link>
      <nav
        ref={navRef}
        className={`fixed top-1 left-0 right-0 z-[9999] re mx-auto w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] gap-x-2 gap-y-2 text-gray-200 rounded-[var(--border-radius--menu-wrapper)]  bg-[rgba(26,27,30,0.4)] bg-opacity-60 border  flex-col-reverse flex  max-sm:p-[5px] border-solid border-[#333333] border-opacity-55 transition-custom transition-all ease-in-out duration-300 max-w-[900px] shadow-2xl  ${isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
          } `}
      >
        {ProjectVisible && (
          <div className="relative z-40 max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-6 justify-items-start my-4 sm:my-6 mx-auto w-fit max-w-full px-8">
           {projects.map((item) => (
  <Link
    key={item.name}
    href={item.href || "/"}
    className="flex items-center gap-3 text-white no-underline hover:text-cyan-400 transition-all group w-full"
    onClick={(e) => {
      e.stopPropagation();
      handleSubmenuClick();
    }}
  >
    
    <item.icon className="w-5 h-5 shrink-0 transition-colors group-hover:text-purple-500" />
    
   
    <span className="text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap font-orbitron">
      {item.name}
    </span>
  </Link>
))}
            </div>
          </div>
        )}
        {WorkVisible && (
          <div className="max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
            <div className="grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-3 sm:my-6 mx-3 sm:mx-6">
              {ourwork.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleSubmenuClick}
                  className="text-white text-center text-xs sm:text-sm leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-2 sm:mx-4 w-4 sm:w-6 h-4 sm:h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {TeamVisible && (
          <div className="max-w-full gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-6 bg-cyan-400/15 border border-cyan-300/50 backdrop-blur-xl flex-col flex overflow-hidden p-3 sm:p-0 rounded-[12px] animateNav transition-custom hover:bg-purple-500/25">
            <div className="gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-3 sm:my-6 mx-3 sm:mx-6">
              {ourteam.map((item) => (
                <Link
                  onClick={handleSubmenuClick}
                  key={item.name}
                  href={item.href}
                  className="text-white text-center text-xs sm:text-sm  leading-[142.857%] max-sm:leading-none no-underline  transition-all duration-[0.2s] ease-[ease-in-out]"
                >
                  <item.icon className="inline mx-2 sm:mx-4 w-4 sm:w-6 h-4 sm:h-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div
          className={`z-50 w-full flex gap-x-0 gap-y-2 rounded-[var(--border-radius--menu-link)] 
    bg-cyan-400/15 border border-cyan-300/50 justify-evenly items-center overflow-auto p-1 max-sm:p-2 
    transition-custom text-lg sm:text-xl md:text-2xl font-orbitron shadow-2xl shadow-cyan-400/20
 backdrop-blur-xl
    ${isVisible ? "backdrop-blur-xl" : ""}`}
        >

        
          <p
            onClick={handleProjectClick}
            className={`menuLink ${activeRoute.startsWith("/projects") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2 ">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/projects/") || ProjectVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] pt-[1px] transition-colors group-hover:text-purple-500">Projects</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/projects/") || ProjectVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

      
          <p
            onClick={handleWorkClick}
            className={`menuLink ${activeRoute.startsWith("/work/") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/work/") || WorkVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Work</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/work/") || WorkVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

       <Link href="/" className={`menuLink ${activeRoute === "/" ? "active" : ""}`}>
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute === "/" ? "opacity-100" : "opacity-0 group-hover:opacity-80"} }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Home</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute === "/" ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </Link>

          
          <p
            onClick={handleTeamClick}
            className={`menuLink ${activeRoute.startsWith("/team") ? "active" : ""}`}
          >
            <div className="group flex items-center gap-2">
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/team/") || TeamVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"["}
              </span>
              <span className="flex items-center h-full leading-none pt-[1px] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] transition-colors group-hover:text-purple-500">Team</span>
              <span
                className={`text-xl sm:text-2xl md:text-3xl transition-opacity pb-[1px] ${activeRoute.startsWith("/team/") || TeamVisible
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-80"
                  }`}
              >
                {"]"}
              </span>
            </div>
          </p>

        
          <Link href="/" scroll={false}>
            <p onClick={() => goToSection("contactUS")} className="menuLink">
              <div className="group flex items-center gap-2">
                <span className="text-3xl opacity-0 group-hover:opacity-80 pb-[1px]">{"["}</span>
                <span className="flex items-center h-full leading-none pt-[1px] text-[1rem] transition-colors group-hover:text-purple-500">Contact</span>
                <span className="text-3xl opacity-0 group-hover:opacity-80 pb-[1px]">{"]"}</span>
              </div>
            </p>
          </Link>
        </div>

      </nav>
      <Link href="https://festnimbus.nith.ac.in">
        <div className="pr-5 z-50">
          <img src="/Assets/nimbusLogo.png" className="h-12"></img>
        </div>
      </Link>
    </div>
  );
}
