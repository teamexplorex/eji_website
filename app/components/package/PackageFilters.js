"use client";

import { useState } from "react";
import styles from "./PackageFilters.module.css";
import { IoFilterSharp } from "react-icons/io5";
import {
  MdExpandLess,
  MdExpandMore,
  MdSearch,
  MdCalendarToday,
} from "react-icons/md";

export default function PackageFilters() {
  const [expanded, setExpanded] = useState({
    duration: true,
    flights: true,
    priceRange: true,
    departBetween: true,
    departureCity: true,
    tourType: true,
    hotelCategory: true,
    specialityTour: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <IoFilterSharp className={styles.filterIcon} /> Filter your Tour
        </div>
        <button className={styles.clearAll}>Clear All</button>
      </div>

      <div className={styles.searchSection}>
        <h3>Search your Destination</h3>
        <div className={styles.searchBox}>
          <MdSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search a destination" />
        </div>
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => toggleSection("duration")}
        >
          <h3>Total Duration</h3>
          {expanded.duration ? (
            <MdExpandLess className={styles.sectionIcon} />
          ) : (
            <MdExpandMore className={styles.sectionIcon} />
          )}
        </div>
        {expanded.duration && (
          <div className={styles.sectionContent}>
            <div className={styles.slider}>
              <div className={styles.sliderTrack}>
                <div className={styles.sliderFill} style={{ width: "40%" }} />
              </div>
              <div className={styles.sliderLabels}>
                <span>2N</span>
                <span>7N</span>
              </div>
            </div>
            <div className={styles.durationButtons}>
              <button>3-6 days</button>
              <button>6-9 days</button>
              <button>9-12 days</button>
              <button>12-15 days</button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => toggleSection("flights")}
        >
          <h3>Flights</h3>
          {expanded.flights ? (
            <MdExpandLess className={styles.sectionIcon} />
          ) : (
            <MdExpandMore className={styles.sectionIcon} />
          )}
        </div>
        {expanded.flights && (
          <div className={styles.sectionContent}>
            <div className={styles.flightButtons}>
              <button>With Flight(45)</button>
              <button>Without Flight(46)</button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => toggleSection("priceRange")}
        >
          <h3>Price Range</h3>
          {expanded.priceRange ? (
            <MdExpandLess className={styles.sectionIcon} />
          ) : (
            <MdExpandMore className={styles.sectionIcon} />
          )}
        </div>
        {expanded.priceRange && (
          <div className={styles.sectionContent}>
            <div className={styles.slider}>
              <div className={styles.sliderTrack}>
                <div className={styles.sliderFill} style={{ width: "60%" }} />
              </div>
              <div className={styles.sliderLabels}>
                <span>₹ 14,000</span>
                <span>₹ 34,000</span>
              </div>
            </div>
            <div className={styles.priceButtons}>
              <button>₹31,000 - ₹40,000</button>
              <button>₹40,000 - ₹50,000</button>
              <button>₹50,000 - ₹60,000</button>
              <button>₹60,000 & above</button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => toggleSection("tourType")}
        >
          <h3>Tour Type</h3>
          {expanded.tourType ? (
            <MdExpandLess className={styles.sectionIcon} />
          ) : (
            <MdExpandMore className={styles.sectionIcon} />
          )}
        </div>
        {expanded.tourType && (
          <div className={styles.sectionContent}>
            <div className={styles.tourTypeButtons}>
              <button className={styles.active}>All (33)</button>
              <button>Group Tour (17)</button>
              <button>Custolzed Holiday (16)</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
