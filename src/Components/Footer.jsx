import React from "react";
import logo from "../assets/images/home/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-deep">
      <div className="Container py-10 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   items-start gap-5">
        <div>
          <img src={logo} alt="logo" className="mb-7" />
          <h3 className="font-bold text-lg mb-4">Briefly about us</h3>
          <p className="text-white/70 text-sm font-normal w-full md:w-[250px]">
            We thoroughly study and then discuss with our customers the
            appearance of each product. We rarely repeat ourselves, because
            we know that you value individuality and are not ready to be content
            with ready-made solutions.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lg">Menu</h3>
          <ul className="flex gap-4 flex-col">
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Home
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              projects
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              services
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              blog
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lg">Services</h3>
          <ul className="flex gap-4 flex-col">
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Interior Design
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Design
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Wood supply
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Repair
            </li>
            <li className="hover:text-primary hover:cursor-pointer hover:underline transation-all duration-200">
              Concept
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-lg">Social media</h3>
          <p className="text-white/70 text-sm font-normal w-full md:w-[300px]">
            Follow us on social media so you don't miss out on new incredible
            projects designed for our clients around the world.
          </p>
          <ul className="flex mt-4   gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
