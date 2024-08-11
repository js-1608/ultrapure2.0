import { useState } from "react";
import productImage from "../assests/product.png";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

// Import your images at the top of your file
import technology1 from "../assests/technology (1).png";
import technology2 from "../assests/technology (2).png";
import technology3 from "../assests/technology (3).png";

import r1 from "../assests/resource/r (1).png";
import r2 from "../assests/resource/r (2).png";
import r3 from "../assests/resource/r (3).png";
import r4 from "../assests/resource/r (4).png";
import r5 from "../assests/resource/r (5).png";
import r6 from "../assests/resource/r (6).png";
import r7 from "../assests/resource/r (7).png";
import r8 from "../assests/resource/r (8).png";
import r9 from "../assests/resource/r (9).png";
import r10 from "../assests/resource/r (10).png";

// Define your technology array with correct image imports
const technology = [
  {
    name: "nanoX technology",
    description:
      "AOP CELL Technology Virusheild Air Purifier Falcon C (For Cassette AC)  Flacon S (For Split AC)",
    href: "/technology#section1",
    icon: ChartPieIcon,
    src: technology1, // Use imported variable
  },
  {
    name: "plasmOX technology",
    description: "Speak directly to your customers",
    href: "/technology#section2",
    icon: CursorArrowRaysIcon,
    src: technology2, // Use imported variable
  },
  {
    name: "ultraSORB technology",
    description: "Your customers’ data will be safe and secure",
    href: "/technology#section3",
    icon: FingerPrintIcon,
    src: technology3, // Use imported variable
  },
];

const products = [
  {
    name: "Microbial Contamination",
    list: ['AOP CELL Technology', 'Virusheild Air Purifier', 'Falcon C (For Cassette AC)', 'Falcon S (For Split AC)', 'Ceiling Suspended Air Purifier'],
    links: ['/aop', '/vap', '/fcap', '/fsap', '/cf'],
    description: "",
    icon: ChartPieIcon,
  },
  {
    name: "For Gaseous Contamination",
    list: ['ultraSORB Chemical Media Grid Block','odorNOX System','Data Centre Corrosion Control Unit'],
    links: ['/ucm','/OdorNOX','/ccu'],
    description: "",
    icon: FingerPrintIcon,
  },
  {
    name: "Particulate Contamination",
    list: ['CBR Filter','ESP Filter',],
    links: ['/cf', '/ef', ],
    description: "",
    icon: CursorArrowRaysIcon,
  },

  // {
  //   name: "Particulate Contamination",
  //   list: [,'garboNOX System'],
  //   links: [, '/gap'],   
  //    description: "Connect with third-party tools",
  //   icon: SquaresPlusIcon,
  // },
];

const market_served = [
  {
    name: "Commercial & Public Buildings",
    items: [
      "Airports",
      "Halls & Malls",
      "Hotels",
      "Museums",
      "Offices",
      "Restaurants",
      "Schools & Universities",
      "Hospitals/IVF Centres",
      
    ],
    href: "/commercial",
    icon: ChartPieIcon,
  },
  {
    name: "Industrial/Transportation",
    items: ["Airpor",
          "Power Generation",
          "Public Transportation",
          "Pulp and Paper",
          "Refineries"],
    href: "/industrial",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Food & Beverage",
    items: ["Beverage Production",
            "Dairy Processes",
            "Food Processing"],
    href: "/food",
    icon: FingerPrintIcon,
  },
  {
    name: "Material Processing",
    items: ["Mining",
          "Oil, Gas & Chemicals",
          "Pulp & Paper"],
    href: "/material",
    icon: SquaresPlusIcon,
  },
  {
    name: "Water/Wastewater",
    items: ["Corrosion Control",
          "Emergency Gas Scrubbing",
          "Odor Control"],
    href: "/waste",
    icon: SquaresPlusIcon,
  },
];

const solution = [
  { name: "Indoor Air Quality", href: "#", icon: ChartPieIcon },
  {
    name: "Toxic Gas & Corrosion Control",
    href: "/market-served",
    icon: CursorArrowRaysIcon,
  },
  { name: "AQI Monitoring", href: "/market-served", icon: FingerPrintIcon },
  { name: "Odor Control", href: "/market-served", icon: SquaresPlusIcon },
];
const resources = [
  {
    name: "FAQ s",
    description:
      "AOP CELL Technology Virusheild Air Purifier Falcon C (For Cassette AC)  Flacon S (For Split AC)",
    href: "/faq",
    icon: ChartPieIcon,
    src: r1,
  },
  {
    name: "Careers",
    description: "Speak directly to your customers",
    href: "/work",
    icon: CursorArrowRaysIcon,
    src: r2,
  },
  {
    name: "Download Centre",
    description: "Speak directly to your customers",
    href: "/download",
    icon: CursorArrowRaysIcon,
    src: r2,
  },
  {
    name: "Test Reports",
    description: "Speak directly to your customers",
    href: "/pdf/FINAL UEPL REPORT (1).pdf",
    icon: CursorArrowRaysIcon,
    src: r3,
  },
  // {
  //   name: "Corporate Social Responsibilities",
  //   description: "Speak directly to your customers",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  //   src: r4,
  // },
  // {
  //   name: "Events and Webinars",
  //   description: "Speak directly to your customers",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  //   src: r5,
  // },
  {
    name: "Media Gallery",
    description: "Speak directly to your customers",
    href: "/gallery",
    icon: CursorArrowRaysIcon,
    src: r6,
  },
  // {
  //   name: "Customer Support",
  //   description: "Speak directly to your customers",
  //   href: "/contact",
  //   icon: CursorArrowRaysIcon,
  //   src: r7,
  // },
  // {
  //   name: "Videos",
  //   description: "Speak directly to your customers",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  //   src: r8,
  // },
  // {
  //   name: "Testimonials",
  //   description: "Speak directly to your customers",
  //   href: "#",
  //   icon: CursorArrowRaysIcon,
  //   src: r9,
  // },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-left pl-10 pr-10 p-5 lg:px-8"
        aria-label="Global"
      >
   

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/about" className="text-md font-semibold leading-6 text-gray-900">
            Abouts us
          </Link>

          <Popover className="">
            <PopoverButton className="flex relative right-0 items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
              Our Technology
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 header_container">
                <div className=" w-full   p-5 overflow-hidden  bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5 ">
                  <h1 className="font-semibold text-3xl">Our Technology</h1>
                  <div className="flex size-max p-5 pt-14 ">
                    {/* Left Content (60% width) */}

                    {technology.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50 color-blue"
                      >
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <img
                            src={item.src}
                            alt={item.name}
                            className="w-4/6 h-2/6 rounded-lg object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="">
            <PopoverButton className=" relative left-0 flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
              Market Served
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 header_container">
                <div className="w-full flex overflow-hidden  bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5 ">
                  <div className=" w-100% p-2 m-2 flex ">
                    <div className="p-4 flex">
                      {market_served.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex-1 items-center gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50 color-blue"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={item.href}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <ul className="mt-1 text-gray-600  list-inside">
                              {item.items.map((listItem, index) => (
                                <li key={index}>{listItem}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="relative">
      <PopoverButton
        className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        Product
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </PopoverButton>

      <Transition
        show={isPopoverOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 header_container">
          <div className="w-full flex overflow-hidden bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
            {/* Left Content (60% width) */}
            <div className="w-60% p-2 m-2">
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50 color-blue"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <h5 className="block font-semibold text-gray-900">{item.name}</h5>
                        <ul className="mt-1 text-gray-600 list-inside">
                          {item.list.map((listItem, index) => (
                            <li key={index}>
                              <Link
                                to={item.links[index]}
                                onClick={() => setIsPopoverOpen(false)} // Close the Popover on link click
                              >
                                {listItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" divide-gray-900/5 w-1/2 ml-10">
                <Link
                  to="/product"
                  className="text-md font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsPopoverOpen(false)} // Close the Popover on link click
                >
                  We Manufacture Customized Standalone
                  Air Purification Equipment's
                </Link>
              </div>
            </div>

            {/* Right Content (40% width) */}
            <div className="w-40% pl-5 m-auto">
              <div className="cols-1 p-5 m-auto">
                <img src={productImage} alt="Logo" className="w-full" />
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>


          <Popover className="">
            <PopoverButton className=" relative left-0 flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900"
            >
              Resources
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4  header_container">
                <div className="w-full flex overflow-hidden  bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
                  {/* Left Content (60% width) */}
                  <div className="w-full p-2 m-2 flex flex-wrap  ">
                    {resources.map((item) => (
                      <div
                        key={item.name}
                        className="w-1/5 p-5 flex items-center justify-center flex-row text-center rounded-lg text-gray-900 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-50 group-hover:bg-white">
                          <img
                            src={item.src}
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                            alt="icon"
                          />
                        </div>
                        <Link
                          to={item.href}
                          className="block font-semibold mt-2"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Link to="/contact" className="text-md font-semibold leading-6 text-gray-900">
            Contact us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="#" className="text-md font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>

        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5" onClick={closeMenu}>
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  About us
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Our Technology
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...technology].map((item) => (
                          // <DisclosureButton>
                            <Link
                            key={item.name}
                            as="a"
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={closeMenu}>
                              {item.name}
                            </Link>
                            
                          // </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

               <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Market Served
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...market_served].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure> 

                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Solution
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...solution].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure> */}

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                      {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg p-4 text-md leading-6 hover:bg-gray-50 color-blue"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <h5 className="block font-semibold text-gray-900">{item.name}</h5>
                        <ul className="mt-1 text-gray-600 list-inside">
                          {item.list.map((listItem, index) => (
                            <li key={index}>
                              <Link
                                to={item.links[index]}
                                onClick={closeMenu} // Close the Popover on link click
                              >
                                {listItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Resources
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2 w-full">
                        {[...resources].map((item) => (
                          // <DisclosureButton>
                            <Link
                            key={item.name}
                            as="a"
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={closeMenu}
                          >                            {item.name}
</Link>
                          // </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
           
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
