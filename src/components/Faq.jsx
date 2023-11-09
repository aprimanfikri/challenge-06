import React, { useState, useEffect } from "react";
import { Accordion } from "flowbite-react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState({});

  useEffect(() => {
    const initialStatus = {};
    for (let i = 1; i <= 2; i++) {
      initialStatus[`accordion${i}`] = false;
    }
    setAccordionOpen(initialStatus);
  }, []);

  const toggleAccordion = (accordionKey) => {
    setAccordionOpen((prevStatus) => ({
      ...prevStatus,
      [accordionKey]: !prevStatus[accordionKey],
    }));
  };

  return (
    <div
      id="faq"
      className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-5">Frequently Asked Question</h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="lg:w-1/2">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Apa saja syarat yang dibutuhkan?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                distinctio provident placeat, tempora maiores repudiandae beatae
                amet quidem fugiat dolores aliquid at magnam ad nihil aperiam
                quia commodi. Optio, molestias!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Berapa hari minimal sewa mobil lepas kunci?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis voluptatibus est, illo dicta aliquid nobis fugiat
                impedit ut exercitationem! Rem quidem repudiandae, vel iste
                cupiditate dolorem blanditiis voluptatum doloremque non.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat commodi temporibus ipsam quisquam impedit, nulla,
                exercitationem tenetur ratione nobis inventore ducimus soluta,
                omnis ullam rem iusto explicabo veritatis placeat asperiores?
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Apakah Ada biaya antar-jemput?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat commodi temporibus ipsam quisquam impedit, nulla,
                exercitationem tenetur ratione nobis inventore ducimus soluta,
                omnis ullam rem iusto explicabo veritatis placeat asperiores?
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black">
              Bagaimana jika terjadi kecelakaan
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat commodi temporibus ipsam quisquam impedit, nulla,
                exercitationem tenetur ratione nobis inventore ducimus soluta,
                omnis ullam rem iusto explicabo veritatis placeat asperiores?
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
