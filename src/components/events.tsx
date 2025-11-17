import './events.css';

const eventsData = [
  {
    id: 1,
    image: '/Varients/Varient (1).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 2,
    image: '/Varients/Varient (2).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 3,
    image: '/Varients/Varient (3).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 4,
    image: '/Varients/Varient (4).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 5,
    image: '/Varients/Varient (5).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 6,
    image: '/Varients/Varient (6).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 7,
    image: '/Varients/Varient (7).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 8,
    image: '/Varients/Varient (8).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 9,
    image: '/Varients/Varient (9).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 10,
    image: '/Varients/Varient (10).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 11,
    image: '/Varients/Varient (11).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 12,
    image: '/Varients/Varient (12).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 13,
    image: '/Varients/Varient (13).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 14,
    image: '/Varients/Varient (14).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 15,
    image: '/Varients/Varient (15).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 16,
    image: '/Varients/Varient (16).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 17,
    image: '/Varients/Varient (17).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 18,
    image: '/Varients/Varient (18).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 19,
    image: '/Varients/Varient (19).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 20,
    image: '/Varients/Varient (20).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 21,
    image: '/Varients/Varient (21).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 22,
    image: '/Varients/Varient (22).png',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSf1catBP9-LIE2M1sA-f2xgY-9c_4bZ0_C_c4Nh7aVBfGN1zQ/viewform'
  },
  {
    id: 23,
    image: '/Varients/Varient (23).png',
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
              <img src={event.image} alt={`Event ${event.id}`} />
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Events;
