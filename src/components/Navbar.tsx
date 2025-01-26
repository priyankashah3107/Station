"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const navmobile = [
  { id: 1, name: "Explore Stations", path: "/explore" },
  { id: 1, name: "Terms of Service", path: "/tos" },
  { id: 1, name: "Privacy Policy", path: "/privacy" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-white text-black dark:text-white ">
      <div className="flex items-center justify-between px-4 py-4  mx-auto">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center space-x-4 cursor-pointer">
          {/* Hamburger Menu (Mobile View) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* SVG Logo */}
          <div className="flex items-center space-x-2">
            <svg
              width="100"
              height="50"
              viewBox="0 0 1986 464"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hidden md:block"
                d="M1615.9 100C1615.5 100 1615.2 99.9 1615 99.7C1614.8 99.5 1614.7 99.2 1614.7 98.8V27.2C1614.7 26.7333 1614.8 26.4 1615 26.2C1615.27 25.9333 1615.6 25.8 1616 25.8H1639.1C1647.97 25.8 1654.8 27.4333 1659.6 30.7C1664.47 33.9667 1666.9 38.7333 1666.9 45C1666.9 49 1665.83 52.4 1663.7 55.2C1661.63 57.9333 1658.33 60.1 1653.8 61.7C1653.53 61.7667 1653.4 61.9 1653.4 62.1C1653.4 62.3 1653.53 62.4333 1653.8 62.5C1658.6 63.7 1662.27 65.7667 1664.8 68.7C1667.4 71.5667 1668.7 75.4 1668.7 80.2C1668.7 86.8667 1666.2 91.8333 1661.2 95.1C1656.2 98.3667 1649.07 100 1639.8 100H1615.9ZM1639.3 93C1645.83 93 1650.7 91.9667 1653.9 89.9C1657.1 87.7667 1658.7 84.4333 1658.7 79.9C1658.7 76.6333 1657.9 74 1656.3 72C1654.7 69.9333 1652.53 68.4333 1649.8 67.5C1647.07 66.5667 1643.93 66.1 1640.4 66.1H1625.7C1624.77 66.1 1624.3 66.5 1624.3 67.3V91.6C1624.3 92.5333 1624.6 93 1625.2 93H1639.3ZM1640.4 58.9C1642.4 58.9 1644.4 58.7 1646.4 58.3C1648.4 57.9 1650.2 57.2333 1651.8 56.3C1653.47 55.3 1654.77 54 1655.7 52.4C1656.7 50.7333 1657.2 48.6333 1657.2 46.1C1657.2 41.5667 1655.53 38.2333 1652.2 36.1C1648.93 33.9 1644.57 32.8 1639.1 32.8H1625.6C1624.73 32.8 1624.3 33.2 1624.3 34V57.6C1624.3 58.4667 1624.6 58.9 1625.2 58.9H1640.4ZM1684.62 27.2C1684.62 26.2667 1685.02 25.8 1685.82 25.8H1730.72C1731.39 25.8 1731.72 26.1667 1731.72 26.9V32C1731.72 32.8 1731.29 33.2 1730.42 33.2H1695.52C1694.66 33.2 1694.22 33.6 1694.22 34.4V57.8C1694.22 58.5333 1694.59 58.9 1695.32 58.9H1721.22C1721.96 58.9 1722.32 59.2667 1722.32 60V65.3C1722.32 65.5667 1722.26 65.8 1722.12 66C1721.99 66.1333 1721.69 66.2 1721.22 66.2H1695.32C1694.59 66.2 1694.22 66.5667 1694.22 67.3V91.6C1694.22 92.2667 1694.56 92.6 1695.22 92.6H1731.92C1732.66 92.6 1733.02 92.9333 1733.02 93.6V98.9C1733.02 99.2333 1732.92 99.5 1732.72 99.7C1732.59 99.9 1732.32 100 1731.92 100H1686.02C1685.09 100 1684.62 99.5333 1684.62 98.6V27.2ZM1741.91 26.9C1741.91 26.5667 1741.98 26.3 1742.11 26.1C1742.31 25.9 1742.65 25.8 1743.11 25.8H1796.91C1797.31 25.8 1797.61 25.9 1797.81 26.1C1798.01 26.3 1798.11 26.5667 1798.11 26.9V32.1C1798.11 32.7667 1797.71 33.1 1796.91 33.1H1776.61C1775.88 33.1 1775.51 33.4333 1775.51 34.1V98.7C1775.51 99.5667 1775.11 100 1774.31 100H1767.11C1766.31 100 1765.91 99.5667 1765.91 98.7V34.2C1765.91 33.4667 1765.58 33.1 1764.91 33.1H1743.11C1742.31 33.1 1741.91 32.7667 1741.91 32.1V26.9ZM1798.1 100C1797.7 100 1797.4 99.8667 1797.2 99.6C1797.06 99.2667 1797.06 98.8333 1797.2 98.3L1823.1 27.2C1823.3 26.7333 1823.53 26.4 1823.8 26.2C1824.06 25.9333 1824.5 25.8 1825.1 25.8H1832.9C1834.1 25.8 1834.86 26.3 1835.2 27.3L1860.8 98.3C1860.93 98.7 1860.9 99.1 1860.7 99.5C1860.56 99.8333 1860.26 100 1859.8 100H1852.7C1851.9 100 1851.36 99.6667 1851.1 99L1844.2 79.6C1844.06 79.3333 1843.93 79.1333 1843.8 79C1843.66 78.8667 1843.4 78.8 1843 78.8H1813.9C1813.3 78.8 1812.9 79.0667 1812.7 79.6L1805.6 99.1C1805.53 99.3667 1805.36 99.6 1805.1 99.8C1804.9 99.9333 1804.56 100 1804.1 100H1798.1ZM1840.4 71.2C1841.2 71.2 1841.46 70.7667 1841.2 69.9L1829.2 37C1828.93 36.4 1828.66 36.1 1828.4 36.1C1828.2 36.1 1828 36.4 1827.8 37L1815.6 70.1C1815.26 70.8333 1815.46 71.2 1816.2 71.2H1840.4Z"
                fill="black"
              />
              <rect width="464" height="464" rx="60" fill="black" />
              <path
                // fill-rule="evenodd"
                // clip-rule="evenodd"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M84.7011 196.503C65.1438 215.998 65.0933 247.656 84.5883 267.214L196.232 379.214C215.727 398.772 247.386 398.822 266.943 379.327L379.215 267.412C398.772 247.917 398.823 216.259 379.328 196.702L267.684 84.7011C248.189 65.1437 216.531 65.0933 196.973 84.5883L84.7011 196.503ZM167.799 215.402C159.194 223.98 159.172 237.91 167.749 246.515L216.794 295.716C225.372 304.321 239.302 304.344 247.907 295.766L296.912 246.916C305.518 238.339 305.54 224.409 296.962 215.804L247.917 166.602C239.339 157.997 225.41 157.975 216.805 166.553L167.799 215.402Z"
                fill="white"
              />
              <path
                className="hidden md:block"
                d="M771.6 293.2C771.6 334.8 737.6 374.8 675.6 374.8C620 374.8 577.2 344.4 577.2 295.2H626C628 318 644 336.4 675.6 336.4C707.6 336.4 725.6 319.2 725.6 295.6C725.6 228.4 578 272 578 169.6C578 120.8 616.8 90.4 673.6 90.4C726.8 90.4 764.4 118.4 768.4 166H718C716.4 147.2 700 130 671.2 129.2C644.8 128.4 624.4 141.2 624.4 168C624.4 230.8 771.6 191.6 771.6 293.2ZM818.606 310.8V188.8H792.606V151.6H818.606V96.8H864.606V151.6H918.206V188.8H864.606V310.8C864.606 327.2 871.006 334 890.206 334H918.206V372H882.206C843.006 372 818.606 355.6 818.606 310.8ZM931.034 260.8C931.034 192.8 977.034 148 1035.03 148C1072.23 148 1097.83 165.6 1111.43 183.6V151.6H1157.43V372H1111.43V339.2C1097.43 358 1071.03 375.6 1034.23 375.6C977.034 375.6 931.034 328.8 931.034 260.8ZM1111.43 261.6C1111.43 214.4 1079.03 187.6 1044.63 187.6C1010.63 187.6 977.834 213.2 977.834 260.8C977.834 308.4 1010.63 336 1044.63 336C1079.03 336 1111.43 309.2 1111.43 261.6ZM1210.53 310.8V188.8H1184.53V151.6H1210.53V96.8H1256.53V151.6H1310.13V188.8H1256.53V310.8C1256.53 327.2 1262.93 334 1282.13 334H1310.13V372H1274.13C1234.93 372 1210.53 355.6 1210.53 310.8ZM1338.16 372V151.6H1383.76V372H1338.16ZM1361.36 122.4C1344.96 122.4 1332.16 109.6 1332.16 93.2C1332.16 76.8 1344.96 64 1361.36 64C1377.36 64 1390.16 76.8 1390.16 93.2C1390.16 109.6 1377.36 122.4 1361.36 122.4ZM1639.63 261.6C1639.63 330.8 1588.43 375.6 1525.23 375.6C1462.43 375.6 1414.83 330.8 1414.83 261.6C1414.83 192.4 1464.43 148 1527.23 148C1590.03 148 1639.63 192.4 1639.63 261.6ZM1461.23 261.6C1461.23 311.6 1490.83 336 1525.23 336C1559.23 336 1592.83 311.6 1592.83 261.6C1592.83 211.6 1560.43 187.6 1526.43 187.6C1492.03 187.6 1461.23 211.6 1461.23 261.6ZM1827.1 372V248.8C1827.1 208.4 1805.1 187.6 1771.9 187.6C1738.3 187.6 1716.3 208.4 1716.3 248.8V372H1670.7V151.6H1716.3V176.8C1731.1 158.8 1755.5 148 1781.9 148C1833.5 148 1872.3 180.4 1872.3 242V372H1827.1Z"
                fill="black"
              />
            </svg>

            {/* <h1 className="text-xl font-bold font-['Poppins']">
              Station <span className="text-gradient">Hub</span>
            </h1> */}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <button className="text-sm">Explore Stations</button>
          {/* <button className=" text-black font-semibold">Login</button> */}
          <Link href={"/create-show"}>
            <Button
              buttonName="Claim your station"
              color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-4 shadow"
              size="px-6 py-2.5"
              className="rounded"
            >
              Claim your station
            </Button>
          </Link>
        </div>

        {/* Mobile Action Button */}
        <div className="md:hidden">
          <Button
            buttonName="Claim your station"
            color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-4 shadow"
            size="px-4 py-2"
            className="rounded"
          >
            Claim your station
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden  w-[200px] h-screen  text-black py-6 px-4 space-y-4 rounded-lg shadow-lg">
          {navmobile.map((val, index) => (
            <ul
              className="block w-full text-sm text-left px-4 py-2 hover:bg-gray-50 rounded"
              key={index}
            >
              <Link href={val.path}>
                <li className="cursor-pointer">{val.name}</li>
              </Link>
            </ul>
          ))}
          <Button
            buttonName="Claim your station"
            color="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-200 text-sm font-medium disabled:opacity-50 focus-visible:outline-none bg-gradient-to-r from-[#FE0307] to-[#D90AB9] text-white opacity-100 hover:opacity-90 py-2 px-4 shadow"
            size=""
            className="rounded"
          >
            Claim your station
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
