import React from 'react'
import Dropdown from './Dropdown';

const data = [
  {
    title: "1. Delivery Zones",
    descriptions: [
      {
        title: "New York",
        descriptions: [
          {
            points:
              "We deliver within a 10-mile radius of our central location in Manhattan.",
          },
          {
            points:
              "Zip Codes Covered: 10001, 10002, 10003, 10011, 10019, and nearby.",
          },
        ],
      },

      {
        title: "Amsterdam",
        descriptions: [
          {
            points:
              "We deliver across the Amsterdam-Centrum and neighboring districts, within a 7 km radius.",
          },
          {
            points: "Postcodes Covered: 1011-1019, 1050, and nearby.",
          },
        ],
      },

      {
        title: "Bucharest",
        descriptions: [
          {
            points:
              "Delivery covers a 10 km radius from our central Piata Romana location.",
          },
          {
            points:
              "Postcodes Covered: 010011-010999, 030011-030999, and nearby.",
          },
        ],
      },

      {
        title: "Berlin",
        descriptions: [
          {
            points: "We deliver within a 10 km radius of our Mitte location.",
          },
          {
            points: "Postcodes Covered: 10115, 10435, 10997, and nearby.",
          },
        ],
      },
      {
        title: "London",
        descriptions: [
          {
            points:
              "Our delivery services cover areas within a 10 km radius from our location in Soho.",
          },
          {
            points: "Postcodes Covered: W1, SW1, WC1, NW1, and nearby.",
          },
        ],
      },
    ],
  },

  {
    title: "2. Delivery Methods & Fees",
    descriptions: [
      {
        title: "Delivery Methods",
        descriptions: [
          {
            points:
              "Online Ordering: Place your order directly on our website for quick and easy delivery.",
          },
          {
            points:
              "Phone Orders: Call our store to place your delivery order.",
          },
          {
            points:
              "Partner Apps: Available on Uber Eats, DoorDash (New York, London, Berlin), and Glovo (Bucharest, Amsterdam).",
          },
        ],
      },
      {
        title: "Delivery Fees & Minimum Order",
        descriptions: [
          {
            title: "New York",
            points: "$2.99 delivery fee | $15 minimum order",
          },
          {
            title: "London",
            points: "£3.50 delivery fee | £12 minimum order",
          },
          {
            title: "Amsterdam",
            points: "€2.50 delivery fee | €15 minimum order",
          },
          {
            title: "Berlin",
            points: "€2.99 delivery fee | €12 minimum order",
          },
          {
            title: "Bucharest",
            points: "12 RON delivery fee | 50 RON minimum order",
          },
        ],
      },
      {
        title: "Delivery Time Estimate",
        descriptions: [
          {
            points:
              "We aim to deliver within 30-45 minutes in all cities. Times may vary based on traffic, weather, and peak hours.",
          },
        ],
      },
      {
        title: "Contactless Delivery",
        descriptions: [
          {
            points:
              "Contactless delivery is available upon request for all orders. Simply select the option during checkout for a no-contact drop-off.",
          },
        ],
      },
    ],
  },
  {
    title: "3. Pickup Info",
    descriptions: [
      {
        title: "New York",
        descriptions: [
          {
            points:
              "Pickup is available at our Manhattan location. Place your order online or call ahead for fast pickup service.",
          },
        ],
      },
      {
        title: "London",
        descriptions: [
          {
            points:
              "Swing by our Soho location for pickup. Order online in advance to skip the wait.",
          },
        ],
      },
      {
        title: "Amsterdam",
        descriptions: [
          {
            points:
              "Convenient pickup at our Amsterdam-Centrum store. Pre-order online for quick collection.",
          },
        ],
      },
      {
        title: "Berlin",
        descriptions: [
          {
            points:
              "Pickup is available at our Mitte location. Skip the queue by placing your order online for collection.",
          },
        ],
      },
      {
        title: "Bucharest",
        descriptions: [
          {
            points:
              "Pickup at our Piata Romana location. Place your order ahead for a seamless pickup experience.",
          },
        ],
      },
    ],
  },
];

const Accordian = () => {
  return (
     <div className="w-full px-6 md:px-0 max-w-6xl mx-auto flex flex-col space-y-7 py-10 ">
          {data?.map((item, index) => {
            return <Dropdown data={item} key={index} />;
          })}
        </div>
  )
}

export default Accordian