import './events.css';
import { AdvancedImage } from '@cloudinary/react';
import { getOptimizedImage } from '../config/cloudinary';

const eventsData = [
  {
    id: 1,
    image: 'Varient_1',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 2,
    image: 'Varient_2',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 3,
    image: 'Varient_3',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 4,
    image: 'Varient_4',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 5,
    image: 'Varient_5',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 6,
    image: 'Varient_6',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 7,
    image: 'Varient_7',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 8,
    image: 'Varient_8',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 9,
    image: 'Varient_9',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 10,
    image: 'Varient_10',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 11,
    image: 'Varient_11',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 12,
    image: 'Varient_12',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 13,
    image: 'Varient_13',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 14,
    image: 'Varient_14',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 15,
    image: 'Varient_15',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 16,
    image: 'Varient_16',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 17,
    image: 'Varient_17',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 18,
    image: 'Varient_18',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 19,
    image: 'Varient_19',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 20,
    image: 'Varient_20',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 21,
    image: 'Varient_21',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 22,
    image: 'Varient_22',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 23,
    image: 'Varient_23',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  }
];

const Events = () => {
  return (
    <>
      <section className="sec1">
        <h2>Events List</h2>
      </section>
      <section className="sec2">
        {eventsData.map((event) => (
          <div key={event.id} className="card">
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <AdvancedImage cldImg={getOptimizedImage(event.image)} alt={`Event ${event.id}`} />
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Events;
