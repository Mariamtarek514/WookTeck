import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/home/Logo.png";
import LogoDark from "../assets/images/home/Logo_dark.png";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const location = useLocation();

  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("animate");
  };
  return (
    <nav
      className={`Container  ${
        location.pathname !== "/home" ? "shadow shadow-md" : "absolute z-10"
      } `}
    >
      <div
        className={`${
          location.pathname === "/home"
            ? "bg-transparent border-b border-white/20 text-white"
            : "bg-white text-text"
        }  font-normal text-sm  justify-between py-8 top-0 flex items-center gap-4 `}
      >
        <div className="logo">
          <img
            src={`${location.pathname === "/home" ? logo : LogoDark}`}
            alt="logo"
          />
        </div>
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <NavLink
              className={`transition-all duration-150 ${
                location.pathname === "/home"
                  ? "hover:bg-[#c4c4c433]"
                  : "hover:bg-primary hover:text-white"
              } py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] ${
                location.pathname === "/home" ? "active_grey" : "active_primary"
              }`}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`transition-all duration-150 ${
                location.pathname === "/home"
                  ? "hover:bg-[#c4c4c433]"
                  : "hover:bg-primary hover:text-white"
              } py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] ${
                location.pathname === "/home" ? "active_grey" : "active_primary"
              }`}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`transition-all duration-150 ${
                location.pathname === "/home"
                  ? "hover:bg-[#c4c4c433]"
                  : "hover:bg-primary hover:text-white"
              } py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] ${
                location.pathname === "/home" ? "active_grey" : "active_primary"
              }`}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`transition-all duration-150 ${
                location.pathname === "/home"
                  ? "hover:bg-[#c4c4c433]"
                  : "hover:bg-primary hover:text-white"
              } py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] ${
                location.pathname === "/home" ? "active_grey" : "active_primary"
              }`}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <ul className="hidden lg:flex items-center gap-4">
          <li
            className={`border-1 ${
              location.pathname === "/home"
                ? "border-white/50"
                : "border-[#333]/50"
            }  border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
          >
            {location?.pathname === "/home" ? (
              <span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00134 3.6727C4.29872 3.6727 2.92538 5.04604 2.92538 6.74866C2.92538 8.45128 4.29872 9.82462 6.00134 9.82462C7.70396 9.82462 9.0773 8.45128 9.0773 6.74866C9.0773 5.04604 7.70396 3.6727 6.00134 3.6727ZM6.00134 8.74844C4.90106 8.74844 4.00156 7.85162 4.00156 6.74866C4.00156 5.64571 4.89838 4.74888 6.00134 4.74888C7.10429 4.74888 8.00112 5.64571 8.00112 6.74866C8.00112 7.85162 7.10162 8.74844 6.00134 8.74844ZM9.92058 3.54688C9.92058 3.94576 9.59933 4.26433 9.20312 4.26433C8.80424 4.26433 8.48567 3.94308 8.48567 3.54688C8.48567 3.15067 8.80692 2.82942 9.20312 2.82942C9.59933 2.82942 9.92058 3.15067 9.92058 3.54688ZM11.9578 4.27504C11.9123 3.31397 11.6928 2.46266 10.9887 1.76127C10.2873 1.05987 9.43603 0.840351 8.47496 0.792164C7.48444 0.735945 4.51556 0.735945 3.52504 0.792164C2.56665 0.837674 1.71534 1.05719 1.01127 1.75859C0.307195 2.45998 0.0903514 3.31129 0.042164 4.27236C-0.0140547 5.26288 -0.0140547 8.23176 0.042164 9.22228C0.0876743 10.1834 0.307195 11.0347 1.01127 11.7361C1.71534 12.4375 2.56397 12.657 3.52504 12.7052C4.51556 12.7614 7.48444 12.7614 8.47496 12.7052C9.43603 12.6596 10.2873 12.4401 10.9887 11.7361C11.6901 11.0347 11.9096 10.1834 11.9578 9.22228C12.0141 8.23176 12.0141 5.26556 11.9578 4.27504ZM10.6782 10.2851C10.4694 10.8098 10.0651 11.214 9.53776 11.4255C8.74802 11.7387 6.87407 11.6665 6.00134 11.6665C5.12861 11.6665 3.25198 11.7361 2.46492 11.4255C1.94021 11.2167 1.53597 10.8125 1.32448 10.2851C1.01127 9.49534 1.08355 7.62139 1.08355 6.74866C1.08355 5.87593 1.01394 3.9993 1.32448 3.21224C1.5333 2.68753 1.93753 2.2833 2.46492 2.07181C3.25466 1.75859 5.12861 1.83087 6.00134 1.83087C6.87407 1.83087 8.7507 1.76127 9.53776 2.07181C10.0625 2.28062 10.4667 2.68486 10.6782 3.21224C10.9914 4.00198 10.9191 5.87593 10.9191 6.74866C10.9191 7.62139 10.9914 9.49802 10.6782 10.2851Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4584 4.29869L11.4584 4.29869L11.4586 4.30337C11.5138 5.27502 11.5138 8.2223 11.4586 9.19395L11.4585 9.19724C11.4134 10.0959 11.2135 10.8042 10.6352 11.3825L10.6345 11.3832C10.0564 11.9635 9.34882 12.1632 8.45131 12.2057L8.45131 12.2057L8.44663 12.206C7.47498 12.2611 4.52502 12.2611 3.55338 12.206L3.55008 12.2058C2.6521 12.1608 1.94562 11.9611 1.36415 11.3818C0.783867 10.8038 0.584105 10.0961 0.541604 9.19863L0.541626 9.19863L0.541361 9.19395C0.486213 8.2223 0.486213 5.27234 0.541361 4.3007L0.541371 4.3007L0.541537 4.2974C0.586651 3.39762 0.784334 2.69042 1.36415 2.11282C1.94541 1.53376 2.65423 1.33408 3.54876 1.2916L3.54876 1.29162L3.55337 1.29136C4.52502 1.23621 7.47498 1.23621 8.44663 1.29136L8.44662 1.29137L8.44992 1.29154C9.3486 1.3366 10.0569 1.53653 10.6352 2.11482L10.6359 2.11549C11.2161 2.69356 11.4159 3.40118 11.4584 4.29869ZM9.7221 11.8903L9.72386 11.8896C10.3775 11.6275 10.8829 11.1228 11.1428 10.47C11.3365 9.98317 11.3951 9.23143 11.4159 8.56457C11.4313 8.0694 11.4262 7.56052 11.4221 7.15883C11.4205 7.00383 11.4191 6.8648 11.4191 6.74866C11.4191 6.63251 11.4205 6.4935 11.4221 6.33856C11.4262 5.93709 11.4313 5.42865 11.4159 4.93375C11.3951 4.26694 11.3364 3.51567 11.143 3.0279L11.1423 3.02614C10.8801 2.3725 10.3755 1.86706 9.72264 1.60724L9.72127 1.6067C9.23532 1.41496 8.48447 1.35625 7.81749 1.33514C7.31858 1.31934 6.80648 1.32425 6.4034 1.32811C6.25179 1.32957 6.1156 1.33087 6.00134 1.33087C5.88519 1.33087 5.74618 1.32946 5.59123 1.3279C5.18976 1.32384 4.68133 1.3187 4.18643 1.33412C3.51962 1.35491 2.76834 1.41358 2.28058 1.60703L2.28058 1.60702L2.27882 1.60773C1.62517 1.86985 1.11974 2.37449 0.85992 3.02736L0.859918 3.02736L0.859378 3.02873C0.667641 3.51468 0.608924 4.26553 0.587813 4.93251C0.572022 5.43142 0.576928 5.94352 0.58079 6.3466C0.582242 6.49821 0.583547 6.6344 0.583547 6.74866C0.583547 6.86481 0.582142 7.00382 0.580575 7.15877C0.576515 7.56024 0.571374 8.06867 0.586802 8.56357C0.607588 9.23038 0.666253 9.98166 0.859701 10.4694L0.860409 10.4712C1.12253 11.1248 1.62716 11.6303 2.28004 11.8901L2.28141 11.8906C2.76736 12.0824 3.5182 12.1411 4.18519 12.1622C4.68409 12.178 5.1962 12.1731 5.59928 12.1692C5.75089 12.1678 5.88708 12.1665 6.00134 12.1665C6.11749 12.1665 6.2565 12.1679 6.41144 12.1694C6.81291 12.1735 7.32135 12.1786 7.81625 12.1632C8.48306 12.1424 9.23433 12.0837 9.7221 11.8903ZM3.42538 6.74866C3.42538 5.32218 4.57486 4.1727 6.00134 4.1727C7.42782 4.1727 8.5773 5.32218 8.5773 6.74866C8.5773 8.17514 7.42782 9.32462 6.00134 9.32462C4.57486 9.32462 3.42538 8.17514 3.42538 6.74866ZM3.50156 6.74866C3.50156 8.1282 4.62535 9.24844 6.00134 9.24844C7.37732 9.24844 8.50112 8.1282 8.50112 6.74866C8.50112 5.36956 7.38044 4.24888 6.00134 4.24888C4.62224 4.24888 3.50156 5.36956 3.50156 6.74866ZM9.42058 3.54688C9.42058 3.6684 9.32441 3.76433 9.20312 3.76433C9.0816 3.76433 8.98567 3.66816 8.98567 3.54688C8.98567 3.42681 9.08306 3.32942 9.20312 3.32942C9.32319 3.32942 9.42058 3.42681 9.42058 3.54688Z"
                    stroke="#333333"
                    strokeOpacity="0.5"
                  />
                </svg>
              </span>
            )}
          </li>
          <li
            className={`border-1 ${
              location.pathname === "/home"
                ? "border-white/50"
                : "border-[#333]/50"
            }  border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
          >
            {location.pathname === "/home" ? (
              <span>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7665 2.92893C10.7741 3.03553 10.7741 3.14214 10.7741 3.24874C10.7741 6.5 8.29953 10.2462 3.77666 10.2462C2.38325 10.2462 1.08884 9.84265 0 9.14217C0.197977 9.165 0.388314 9.17261 0.593909 9.17261C1.74364 9.17261 2.80203 8.7843 3.64722 8.12186C2.56599 8.09901 1.6599 7.39089 1.34771 6.41626C1.50001 6.43909 1.65228 6.45432 1.81219 6.45432C2.033 6.45432 2.25383 6.42385 2.4594 6.37058C1.3325 6.14213 0.487291 5.15229 0.487291 3.95686V3.92641C0.814691 4.10915 1.19543 4.22337 1.59896 4.23858C0.936519 3.79694 0.502525 3.04314 0.502525 2.19034C0.502525 1.7335 0.624331 1.31471 0.837542 0.949228C2.04821 2.44162 3.86802 3.41622 5.90862 3.52284C5.87055 3.3401 5.8477 3.14976 5.8477 2.9594C5.8477 1.60405 6.94416 0.5 8.3071 0.5C9.01522 0.5 9.65481 0.796954 10.1041 1.27665C10.6599 1.17006 11.1929 0.964463 11.665 0.682743C11.4822 1.25382 11.0939 1.73352 10.5838 2.03807C11.0787 1.98479 11.5584 1.84771 12 1.65737C11.665 2.14466 11.2462 2.57866 10.7665 2.92893Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7665 2.42893C10.7741 2.53553 10.7741 2.64214 10.7741 2.74874C10.7741 6 8.29953 9.74622 3.77666 9.74622C2.38325 9.74622 1.08884 9.34265 0 8.64217C0.197977 8.665 0.388314 8.67261 0.593909 8.67261C1.74364 8.67261 2.80203 8.2843 3.64722 7.62186C2.56599 7.59901 1.6599 6.89089 1.34771 5.91626C1.50001 5.93909 1.65228 5.95432 1.81219 5.95432C2.033 5.95432 2.25383 5.92385 2.4594 5.87058C1.3325 5.64213 0.487291 4.65229 0.487291 3.45686V3.42641C0.814691 3.60915 1.19543 3.72337 1.59896 3.73858C0.936519 3.29694 0.502525 2.54314 0.502525 1.69034C0.502525 1.2335 0.624331 0.814714 0.837542 0.449228C2.04821 1.94162 3.86802 2.91622 5.90862 3.02284C5.87055 2.8401 5.8477 2.64976 5.8477 2.4594C5.8477 1.10405 6.94416 0 8.3071 0C9.01522 0 9.65481 0.296954 10.1041 0.776652C10.6599 0.670057 11.1929 0.464463 11.665 0.182743C11.4822 0.753823 11.0939 1.23352 10.5838 1.53807C11.0787 1.48479 11.5584 1.34771 12 1.15737C11.665 1.64466 11.2462 2.07866 10.7665 2.42893Z"
                    fill="#333333"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M10.4717 2.02513L10.2481 2.1884L10.2678 2.46457C10.2739 2.55041 10.2741 2.63919 10.2741 2.74874C10.2741 5.7849 7.96606 9.24622 3.77666 9.24622C3.15193 9.24622 2.54918 9.15904 1.97922 8.99587C2.70709 8.80591 3.37691 8.469 3.95566 8.01539L5.05778 7.15156L3.65778 7.12197C3.06903 7.10953 2.54646 6.84321 2.19469 6.42971C2.32833 6.41266 2.45912 6.38717 2.58483 6.35459L2.55874 5.38055C1.90324 5.24766 1.36811 4.79209 1.12637 4.18581C1.27399 4.21453 1.42563 4.2324 1.58013 4.23822L3.34985 4.30493L1.87631 3.32255C1.34757 2.97005 1.00253 2.36958 1.00253 1.69034C1.00253 1.58941 1.00991 1.49099 1.0242 1.39525C2.29101 2.63495 3.99943 3.42377 5.88253 3.52216L6.5304 3.55601L6.39811 2.92089C6.3659 2.76623 6.3477 2.61035 6.3477 2.4594C6.3477 1.37919 7.22131 0.5 8.3071 0.5C8.87263 0.5 9.38142 0.736499 9.73912 1.11843L9.92753 1.31962L10.1982 1.2677C10.2553 1.25676 10.3121 1.24488 10.3687 1.23207L10.6011 1.92708C10.5585 1.96052 10.5154 1.99321 10.4717 2.02513Z"
                    stroke="#333333"
                    strokeOpacity="0.5"
                  />
                </svg>
              </span>
            )}
          </li>
          <li
            className={`border-1 ${
              location.pathname === "/home"
                ? "border-white/50"
                : "border-[#333]/50"
            }  border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
          >
            {location.pathname === "/home" ? (
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.14062C12 3.16274 9.31452 0.75 6 0.75C2.68548 0.75 0 3.16274 0 6.14062C0 8.83116 2.19411 11.0613 5.0625 11.466V7.69891H3.53831V6.14062H5.0625V4.95295C5.0625 3.60203 5.95766 2.85582 7.32871 2.85582C7.98532 2.85582 8.67194 2.96103 8.67194 2.96103V4.28695H7.91516C7.17 4.28695 6.9375 4.70255 6.9375 5.1288V6.14062H8.60153L8.3354 7.69891H6.9375V11.466C9.80589 11.0613 12 8.83116 12 6.14062Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 6.14062C11.5 8.36487 9.80958 10.2941 7.4375 10.8628V8.19891H8.3354H8.75725L8.82827 7.78308L9.0944 6.2248L9.19416 5.64062H8.60153H7.4375V5.1288C7.4375 5.00105 7.47196 4.93131 7.50716 4.89474C7.53774 4.86296 7.635 4.78695 7.91516 4.78695H8.67194H9.17194V4.28695V2.96103V2.5318L8.74766 2.46679L8.67194 2.96103L8.74759 2.46678L8.74749 2.46677L8.74726 2.46673L8.7466 2.46663L8.74455 2.46632L8.7375 2.46527L8.71214 2.46157C8.69039 2.45845 8.65918 2.45409 8.6199 2.4489C8.54143 2.43853 8.43037 2.4248 8.29811 2.41109C8.0355 2.38387 7.68091 2.35582 7.32871 2.35582C6.55638 2.35582 5.8581 2.56644 5.3471 3.02603C4.8287 3.49228 4.5625 4.16153 4.5625 4.95295V5.64062H3.53831H3.03831V6.14062V7.69891V8.19891H3.53831H4.5625V10.8628C2.19042 10.2941 0.5 8.36487 0.5 6.14062C0.5 3.4879 2.90991 1.25 6 1.25C9.09009 1.25 11.5 3.4879 11.5 6.14062Z"
                    stroke="#333333"
                    strokeOpacity="0.5"
                  />
                </svg>
              </span>
            )}
          </li>
        </ul>
        <button
          role="button"
          className="bg-transparent focus:outline-none block lg:hidden"
          onClick={handleClick}
        >
          <FaBarsStaggered size={20} />
        </button>
        {/* mobile navbar */}
        <MobileNavbar controls={controls} />
      </div>
    </nav>
  );
};
const MobileNavbar = ({ controls }) => {
  const handleCloseClick = () => {
    controls.start("initial");
  };
  return (
    <motion.div
      variants={{
        initial: {
          translateX: "100%",
          visibility: "hidden",
          display: "none",
        },
        animate: {
          translateX: "0",
          visibility: "visible",
          display: "block",
        },
      }}
      transition={{
        duration: 0.5,
      }}
      initial="initial"
      animate={controls}
      className="absolute top-0 flex flex-col h-screen gap-10 right-0 px-6 py-8 bg-deep w-[300px] max-w-full"
    >
      <ul className=" flex flex-col  gap-6 pb-5 border-b border-white/10">
        <li className="cursor-pointer ms-auto " onClick={handleCloseClick}>
          <IoMdClose size={20} color="#FFF" />
        </li>
        <li>
          <NavLink
            className="text-white hover:bg-[#c4c4c433] py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] "
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white hover:bg-[#c4c4c433] py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] "
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white hover:bg-[#c4c4c433] py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] "
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white hover:bg-[#c4c4c433] py-2 px-4 rounded-tr-[5px] rounded-bl-[5px] "
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <ul className="flex   gap-4">
        <li
          className={`border-1 hover:border-primary cursor-pointer border-white/50 border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00134 3.6727C4.29872 3.6727 2.92538 5.04604 2.92538 6.74866C2.92538 8.45128 4.29872 9.82462 6.00134 9.82462C7.70396 9.82462 9.0773 8.45128 9.0773 6.74866C9.0773 5.04604 7.70396 3.6727 6.00134 3.6727ZM6.00134 8.74844C4.90106 8.74844 4.00156 7.85162 4.00156 6.74866C4.00156 5.64571 4.89838 4.74888 6.00134 4.74888C7.10429 4.74888 8.00112 5.64571 8.00112 6.74866C8.00112 7.85162 7.10162 8.74844 6.00134 8.74844ZM9.92058 3.54688C9.92058 3.94576 9.59933 4.26433 9.20312 4.26433C8.80424 4.26433 8.48567 3.94308 8.48567 3.54688C8.48567 3.15067 8.80692 2.82942 9.20312 2.82942C9.59933 2.82942 9.92058 3.15067 9.92058 3.54688ZM11.9578 4.27504C11.9123 3.31397 11.6928 2.46266 10.9887 1.76127C10.2873 1.05987 9.43603 0.840351 8.47496 0.792164C7.48444 0.735945 4.51556 0.735945 3.52504 0.792164C2.56665 0.837674 1.71534 1.05719 1.01127 1.75859C0.307195 2.45998 0.0903514 3.31129 0.042164 4.27236C-0.0140547 5.26288 -0.0140547 8.23176 0.042164 9.22228C0.0876743 10.1834 0.307195 11.0347 1.01127 11.7361C1.71534 12.4375 2.56397 12.657 3.52504 12.7052C4.51556 12.7614 7.48444 12.7614 8.47496 12.7052C9.43603 12.6596 10.2873 12.4401 10.9887 11.7361C11.6901 11.0347 11.9096 10.1834 11.9578 9.22228C12.0141 8.23176 12.0141 5.26556 11.9578 4.27504ZM10.6782 10.2851C10.4694 10.8098 10.0651 11.214 9.53776 11.4255C8.74802 11.7387 6.87407 11.6665 6.00134 11.6665C5.12861 11.6665 3.25198 11.7361 2.46492 11.4255C1.94021 11.2167 1.53597 10.8125 1.32448 10.2851C1.01127 9.49534 1.08355 7.62139 1.08355 6.74866C1.08355 5.87593 1.01394 3.9993 1.32448 3.21224C1.5333 2.68753 1.93753 2.2833 2.46492 2.07181C3.25466 1.75859 5.12861 1.83087 6.00134 1.83087C6.87407 1.83087 8.7507 1.76127 9.53776 2.07181C10.0625 2.28062 10.4667 2.68486 10.6782 3.21224C10.9914 4.00198 10.9191 5.87593 10.9191 6.74866C10.9191 7.62139 10.9914 9.49802 10.6782 10.2851Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </li>
        <li
          className={`border-1 hover:border-primary cursor-pointer border-white/50 border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
        >
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7665 2.92893C10.7741 3.03553 10.7741 3.14214 10.7741 3.24874C10.7741 6.5 8.29953 10.2462 3.77666 10.2462C2.38325 10.2462 1.08884 9.84265 0 9.14217C0.197977 9.165 0.388314 9.17261 0.593909 9.17261C1.74364 9.17261 2.80203 8.7843 3.64722 8.12186C2.56599 8.09901 1.6599 7.39089 1.34771 6.41626C1.50001 6.43909 1.65228 6.45432 1.81219 6.45432C2.033 6.45432 2.25383 6.42385 2.4594 6.37058C1.3325 6.14213 0.487291 5.15229 0.487291 3.95686V3.92641C0.814691 4.10915 1.19543 4.22337 1.59896 4.23858C0.936519 3.79694 0.502525 3.04314 0.502525 2.19034C0.502525 1.7335 0.624331 1.31471 0.837542 0.949228C2.04821 2.44162 3.86802 3.41622 5.90862 3.52284C5.87055 3.3401 5.8477 3.14976 5.8477 2.9594C5.8477 1.60405 6.94416 0.5 8.3071 0.5C9.01522 0.5 9.65481 0.796954 10.1041 1.27665C10.6599 1.17006 11.1929 0.964463 11.665 0.682743C11.4822 1.25382 11.0939 1.73352 10.5838 2.03807C11.0787 1.98479 11.5584 1.84771 12 1.65737C11.665 2.14466 11.2462 2.57866 10.7665 2.92893Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </li>
        <li
          className={`border-1 hover:border-primary cursor-pointer border-white/50 border w-[30px] h-[30px] flex items-center justify-center rounded-tr-[5px] rounded-bl-[5px]`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.14062C12 3.16274 9.31452 0.75 6 0.75C2.68548 0.75 0 3.16274 0 6.14062C0 8.83116 2.19411 11.0613 5.0625 11.466V7.69891H3.53831V6.14062H5.0625V4.95295C5.0625 3.60203 5.95766 2.85582 7.32871 2.85582C7.98532 2.85582 8.67194 2.96103 8.67194 2.96103V4.28695H7.91516C7.17 4.28695 6.9375 4.70255 6.9375 5.1288V6.14062H8.60153L8.3354 7.69891H6.9375V11.466C9.80589 11.0613 12 8.83116 12 6.14062Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </li>
      </ul>
    </motion.div>
  );
};
export default Navbar;
